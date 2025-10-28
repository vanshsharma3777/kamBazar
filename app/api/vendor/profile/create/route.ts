import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { verifyToken } from "@/library/jwt";
import { MobileInstance } from "twilio/lib/rest/api/v2010/account/availablePhoneNumberCountry/mobile";
import { da } from "zod/locales";

export async function POST(req: Request) {
    
         try {
            const authHeader = req.headers.get('authorization')
    console.log("authorisation:", authHeader)
    const token = authHeader?.split(" ")[1];
    console.log("token :", token)
    
        console.log("TOKEN IS " , token)
        if (!token || token === 'null' || token === 'undefined') {
            console.log("here")
            return NextResponse.json(
                {
                    msg: "token not found. singin again",
                    valid: false
                }, { status: 400 }
            )
        }
        console.log(token)
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
            ownerName: body.ownerName,
            address: body.address,
            shopName: body.shopName,
            bussinessType:body.bussinessType,
            age: body.age,
        }
        console.log(data)
        const id = decoded.id
        const worker = await prisma.myVendor.update({
            where: { id },
            data: {
                mobileNumber: body.mobileNumber,
                ownerName: body.ownerName,
                address: body.address,
                shopName: body.shopName,
                age: body.age,
                bussinessType:body.bussinessType
            }
        })
        console.log("decoded : ", decoded)
        return NextResponse.json(
            {
                msg: "vendor created successfully",
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
            msg: "Internal error in profile creation of vendor"
        }, { status: 500 })
    }
}