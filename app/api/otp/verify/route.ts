import redis from "@/lib/redis";
import { PrismaClient } from '../../../../app/generated/prisma/index.js'
import { NextResponse } from "next/server";
import { success } from "zod";
import { Message } from "twilio/lib/twiml/MessagingResponse.js";
const prisma = new PrismaClient();


async function POST(req: Request) {
    const { mobileNumber, otp, userType }: { mobileNumber: string; otp: string; userType: string } = await req.json();
    try {
        const storedOTP = await redis.get(`otp:${mobileNumber}`)
        if (!storedOTP) {
            return NextResponse.json({
                success: false,
                message: 'OTP expired or not found'
            },
                {
                    status: 400
                })
        }
        if (storedOTP !== otp) {
            return NextResponse.json({
                success: false,
                message: "Inavlid OTP"
            },
                {
                    status: 400
                })
        }
        let user;
        if (userType === 'myVendor') {
            user = prisma.myVendor.upsert({
                where: { mobileNumber },
                update: { verified: true },
                create: { mobileNumber, verified: true, ownerName: "david", age: 18 }
            })
        }
        else if (userType === 'myWorker') {
            user = prisma.myWorker.upsert({
                where: { mobileNumber },
                update: { verified: true },
                create: { mobileNumber, verified: true, name: "david", age: 18 }
            })
        }
        else if (userType === 'myUser') {
            user = prisma.myUser.upsert({
                where: { mobileNumber },
                update: { verified: true },
                create: { mobileNumber, verified: true, name: "david" }
            })
        }
        else {
            return NextResponse.json(
                { success: false, message: "Invalid user type" },   
                { status: 400 }
            );
        }

        await redis.del(`otp:${userType}:${mobileNumber}`)
        return NextResponse.json({
            success:true,
            Message:"OTP verified successfully"
        })
    } catch (error: any) {
             return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

}