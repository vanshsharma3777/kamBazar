import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { PrismaClient } from '../../../../../prisma/generated/client/index'
import { getServerSession } from 'next-auth/next'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()
export async function POST(req: Request) {
    const session = await getServerSession(authOptions)
    if (!session) {
        console.log("session not found. Please signin again")
        return NextResponse.json({
            msg: "Session not found",
        }, { status: 400 })
    }else{
        
        console.log(session)
    } const body = await req.json()
        
       const data = {
        number     : body.primaryContact,
        description : body.workDescription,
        alternateNumber : body.alternateContact,
        photos : body.photos,
        workType : body.workType
       }
       console.log(data)
        console.log(data.number)
    try {
       const mobileNumber = data.number 
        const user = await prisma.myUser.findUnique({
            where:{mobileNumber}
        })
        if(!user){
            console.log("user not exists")
            return NextResponse.json({
                msg:"user does not exists",
                success:false
            })
        }
        else{
            console.log(user)
             const userId = user?.id
        const addWork = await prisma.work.create({
            data:{
                alternateNumber:data.alternateNumber,
                workType:data.workType,
                description:data.description,
                photos:data.photos,
                workId :userId
            }
        })
        return NextResponse.json({
            msg:"work added successfully",
            Work:addWork,
            success:true
        })
        }
    
    } catch (error: any) {
        return NextResponse.json({
            msg:"error in route.ts of user work creation",
            stack:error.stack,
            error:error.message,
            success:false
        },{status:400})
    }

}