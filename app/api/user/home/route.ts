import {prisma} from '@/lib/prisma'
import { verifyToken } from '@/library/jwt'
import { NextResponse } from 'next/server'


export async function GET(req:Request) {

    try {
        const authHeader = req.headers.get("authorization")
        const token = authHeader?.split(' ')[1]
        console.log('token :' , token)
        if(!token || token ==="null" || token ==='undefined'){
            console.log("Token not found or invalid")
            return NextResponse.json({
                msg:"token expired. Please signin again",
                valid:false
            },{status:400})
        }
        const decoded = await verifyToken(token)
        if(!decoded){
             return NextResponse.json({
                msg: "token not verified",
                valid: false
            }, { status: 400 })
        }
        const id = decoded.id
        const user = await prisma.myUser.findFirst({
            where:{id:id}
        })
        if(!user){
            console.log("here1")
           return NextResponse.json({
             msg:"User not found",
            valid:false
           },{status:400})
        }

        const allWorkers = await prisma.myWorker.findMany({
            orderBy:{
                createdAt:"desc"
            }
        })
        if(!allWorkers){
            return NextResponse.json({
                msg:"Unable to fetch all workers",
                valid:false
            },{status:404})
        }

        const allVendors = await prisma.myVendor.findMany({
            orderBy:{
                createdAt:"desc"
            }
        })
        if(!allVendors){
            return NextResponse.json({
                msg:"Unable to fetch all workers",
                valid:false
            },{status:404})
        }
        return NextResponse.json({
            user,
            allWorkers,
            allVendors,
            valid:true
        })
    }catch(error:any){
        console.log("error in home page of user :" , error.message)
        return NextResponse.json({
            msg:"Internal error in home page of user",
            err:error.message,
            valid:false
        },{
            status:500
        })
    }
}