import { prisma } from '@/lib/prisma'
import { verifyToken } from '@/library/jwt'
import { NextRequest, NextResponse } from 'next/server'
import { jwt } from 'zod'

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get('authorization')
    const token = authHeader?.split(' ')[1]
    // ✅ Step 1: Check if token exists
    if (!token || token === 'null' || token === 'undefined') {
      return NextResponse.json(
        { msg: 'Token not found. Please sign in again', valid: false },
        { status: 400 }
      )
    }

    // ✅ Step 2: Verify token
    const decoded: any = await verifyToken(token)
    if (!decoded || !decoded.id) {
      return NextResponse.json(
        { msg: 'Token not verified or invalid', valid: false },
        { status: 400 }
      )
    }

    // ✅ Step 3: Parse request body
    const body = await req.json()
    const   getValue = {
        workType : body.workType,
        description : body.workDescription,
        alternateNumber : body.alternateContact
    } 
    console.log(getValue.workType)
    console.log(getValue.description)
    if (!getValue.workType || !getValue.description) {
      console.log("nopoooo")
      return NextResponse.json(
        { error: 'Missing required fields', valid: false },
        { status: 400 }
      )
    }
    console.log("yussss")
   const newWork = await prisma.work.create({
      data: {
        workType:body.workType,
        description: body.workDescription,
        alternateNumber: body.alternateContact || '',
        user: {
          connect: { id: decoded.id }, 
        },
      },
    })

    // ✅ Step 5: Return success response
    return NextResponse.json(
      {
        message: 'Work created successfully',
        valid: true,
        work: newWork,
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Error creating work:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    )
  }
}
