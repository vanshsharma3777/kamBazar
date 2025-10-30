import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { verifyToken } from "@/library/jwt";
import { MobileInstance } from "twilio/lib/rest/api/v2010/account/availablePhoneNumberCountry/mobile";

export async function POST(req: Request) {

    try {
        const authHeader = req.headers.get('authorization')
        console.log("authorisation:", authHeader)
        const token = authHeader?.split(" ")[1];
        console.log("token :", token)

        if (!token || token === 'null' || token === 'undefined') {
            console.log("Token not found or invalid")
            return NextResponse.json(
                {
                    msg: "Token not found. Please sign in again",
                    valid: false
                }, { status: 400 }
            )
        }

        const body = await req.json()
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
        }
        const id = decoded.id
        console.log("id: ", id)
        const isUserExists = await prisma.myUser.findFirst({
            where:{
                id:id
            }
        })
        console.log("isWorkerExists :" , isUserExists)
        if(!isUserExists){
            console.log("working")
            return NextResponse.json({
                valid:false,
                msg:"Worker did not exists in record"
            } , {status:404})
        }
        const user = await prisma.myUser.update({
            where: { id },
            data: {
                mobileNumber: body.mobileNumber,
                name: body.name,
                address: body.address,

            }
        })
        console.log("decoded : ", decoded)
        return NextResponse.json(
            {
                msg: "User created successfully",
                userId:id,
                valid: true
            }
        )
    } catch (err: any) {
        console.log("error:", err.message)
        return NextResponse.json({
            success: false,
            error: err.message,
            msg: "Internal error in profile creation of user"
        }, { status: 500 })
    }
}