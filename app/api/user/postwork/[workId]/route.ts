import { prisma } from '@/lib/prisma'
import { verifyToken } from '@/library/jwt'
import { NextRequest, NextResponse } from 'next/server'
import { jwt } from 'zod'


interface JwtPayload {
  id: string;
  email: string;
}
export async function PATCH(req: NextRequest, { params }: { params: { workId: string } }) {
  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return NextResponse.json({ success: false, message: 'Authorization header missing.' }, { status: 401 });
    }

    const token = authHeader.startsWith('Bearer ') ? authHeader.substring(7) : authHeader;
    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) {
      return NextResponse.json({ success: false, message: 'Server config error.' }, { status: 500 });
    }

    const decoded =await verifyToken(token) as JwtPayload
    const userId = decoded.id;
    const { workId } = params;

    if (!workId) {
      return NextResponse.json({ success: false, message: 'Work ID not provided.' }, { status: 400 });
    }

    const work = await prisma.work.findUnique({ where: { id: workId } });
    if (!work) {
      return NextResponse.json({ success: false, message: 'Work not found.' }, { status: 404 });
    }

    // ✅ Compare userId with work.userId (not work.id!)
    if (work.workId !== userId) {
      return NextResponse.json({ success: false, message: 'Unauthorized access.' }, { status: 403 });
    }

    const updatedWork = await prisma.work.update({
      where: { id: workId },
      data: { isActive: false },
    });

    return NextResponse.json({
      success: true,
      message: 'Work marked as completed successfully.',
      work: updatedWork,
    });
  } catch (error: any) {
    console.error('Error in PATCH /api/user/work/post:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error.', error: error.message },
      { status: 500 }
    );
  }
}