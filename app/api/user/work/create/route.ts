import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import {prisma} from '@/lib/prisma'
import { getServerSession } from 'next-auth/next'
import { NextResponse } from 'next/server'

export default async function POST(req:Request){
    const session= await getServerSession(authOptions)
    if(!session){
        console.log("session not found. Please signin again")
        return NextResponse.json({
            msg:"Session not found",
        },{status:400})
    }
    const body = await req.json()
    const data = {
        work:body.workType,
    }
}