import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import {prisma} from '@/lib/prisma'; // Adjust the import path based on your project structure

interface JwtPayload {
  id: string;
  email: string;
}

export async function GET(req: NextRequest) {
  try {
    // Extract token from Authorization header
    const authHeader = req.headers.get('Authorization');
    
    if (!authHeader) {
         console.log("unauthorized")
      return NextResponse.json(
       
        { 
          success: false, 
          message: 'Authorization header missing. Please login again.' 
        },
        { status: 401 }
      );
    }

    // Check if token exists and is in Bearer format
    const token = authHeader.startsWith('Bearer ') 
      ? authHeader.substring(7) 
      : authHeader;

    if (!token) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Token not found. Please login to continue.' 
        },
        { status: 401 }
      );
    }

    // Verify JWT token
    const JWT_SECRET = process.env.JWT_SECRET;
    
    if (!JWT_SECRET) {
      console.error('JWT_SECRET is not defined in environment variables');
      return NextResponse.json(
        { 
          success: false, 
          message: 'Server configuration error. Please contact support.' 
        },
        { status: 500 }
      );
    }

    let decoded: JwtPayload;
    
    try {
      decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
      console.log(decoded)
    } catch (error: any) {
      if (error.name === 'TokenExpiredError') {
        return NextResponse.json(
          { 
            success: false, 
            message: 'Session expired. Please login again.' 
          },
          { status: 401 }
        );
      } else if (error.name === 'JsonWebTokenError') {
        return NextResponse.json(
          { 
            success: false, 
            message: 'Invalid token. Please login again.' 
          },
          { status: 401 }
        );
      } else {
        return NextResponse.json(
          { 
            success: false, 
            message: 'Authentication failed. Please login again.' 
          },
          { status: 401 }
        );
      }
    }

    // Extract userId from decoded token
    const userId = decoded.id;

    if (!userId) {
        console.log("hello")
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid token payload. Please login again.' 
        },
        { status: 401 }
      );
    }

    // Verify user exists in database
    const userExists = await prisma.myUser.findUnique({
      where: { id: userId }
    });

    if (!userExists) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'User not found. Please login again.' 
        },
        { status: 404 }
      );
    }

    const userWorks = await prisma.work.findMany({
  include: {
    user: {           // 👈 this matches your relation field name
      select: {
        id: true,
        name: true,
        email: true,
        mobileNumber: true,
        address: true,
        profilePhoto: true
      }
    }
  },
  orderBy: {
    createdAt: 'desc'
  }
});

    if (!userWorks || userWorks.length === 0) {
  return NextResponse.json(
    { 
      success: true, 
      message: 'No works found. Start by creating your first work posting.',
      works: []
    },
    { status: 200 }
  );
}

        return NextResponse.json(
  { 
    success: true,
    message: 'Works fetched successfully.',
    count: userWorks.length,
    works: userWorks
  },
  { status: 200 }
);

    // Check if user has any posted works
    if (!userWorks || userWorks.length === 0) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'No works found. Start by creating your first work posting.',
          works: []
        },
        { status: 200 }
      );
    }





  } catch (error: any) {
    console.error('Error in GET /api/user/work/post:', error);
    
    // Handle Prisma specific errors
    if (error.code === 'P2002') {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Database constraint error occurred.' 
        },
        { status: 400 }
      );
    }

    if (error.code === 'P2025') {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Record not found in database.' 
        },
        { status: 404 }
      );
    }

    // Generic error response
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error while fetching works. Please try again later.',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// PATCH endpoint to update work status (deactivate work)
