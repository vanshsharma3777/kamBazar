import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { verifyToken } from "@/library/jwt";
import { MobileInstance } from "twilio/lib/rest/api/v2010/account/availablePhoneNumberCountry/mobile";

export async function POST(req: Request) {
    const authHeader = req.headers.get('authorization')
    console.log("authorisation:", authHeader)
    const token = authHeader?.split(" ")[1];
    console.log("token :", token)
    const body = await req.json()
    try {
        if (!token || token==='null' || token ==='undefined') {
            console.log("Token not found or invalid")
            return NextResponse.json(
                {
                    msg: "Token not found. Please sign in again",
                    valid: false
                }, { status: 400 }
            )
        }
        const decoded = await verifyToken(token);
        if (!decoded) {
            return NextResponse.json({
                msg: "token not verified",
                valid: false
            }, { status: 400 })
        }
        const data = {
            mobileNumber: body.mobileNumber,
            name: body.name,
            address: body.address,
            dailyWage: body.dailyWage,
            occupation: body.occupation,
            age: body.age,
            photo:body.photo,
            video:body.video,
            profilePhoto:body.profilePhoto,
        }
        const id = decoded.id
        console.log("if od wokrer is ", id)
        const isWorkerExists = await prisma.myWorker.findFirst({
            where:{
                id:id
            }
        })
        console.log("isWorkerExists :" , isWorkerExists)
        if(!isWorkerExists){
            console.log("working")
            return NextResponse.json({
                valid:false,
                msg:"Worker did not exists in record"
            } , {status:404})
        }
        const worker = await prisma.myWorker.update({
            where: { id },
            data: {
            mobileNumber: body.mobileNumber,
            name: body.name,
            address: body.address,
            dailyWage: body.dailyWage,
            occupation: body.occupation,
            age: body.age,
            photo:'',
            video:'',
            profilePhoto:'',
            }
        })
        console.log("decoded : ", decoded)
        return NextResponse.json(
            {
                msg: "worker created successfully",
                decoded: decoded,
                profileCreated: worker,
                valid: true
            }
        )
    } catch (err: any) {
        console.log("error:", err.message)
        return NextResponse.json({
            success: false,
            error: err.message,
            msg: "Internal error in profile bananee of worker"
        }, { status: 500 })
    }
}