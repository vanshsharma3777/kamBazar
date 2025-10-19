import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma/index.js";
import axios from "axios";
import { profile } from "console";

const prisma = new PrismaClient()

export async function POST(req: Request) {
    try {
        const {
            mobileNumber,
            name,
            profilePhoto,
            work,
            address
        }: {
            mobileNumber: string,
            name: string,
            address: string,
            profilePhoto: string
            work: string
        } = await req.json()
        console.log("here1")
        const user = await prisma.myUser.findFirst({
            where: { mobileNumber, name },
        })
        console.log("here2")
        if (!user) {
            return NextResponse.json({
                success: false,
                msg: "user Not found"
            },
                {
                    status: 400
                })
        }
        const response = await axios.post(`${process.env.BACKEND_URL}/api/user/signin`, { mobileNumber, name });
        console.log("here3")
        console.log(response.data)
        if (!user) {
            return NextResponse.json({
                success: false,
                msg: "User Not found"
            },
                {
                    status: 400
                })
        }
        console.log(response.data.verified)
        if (!response.data.verified) {
            return NextResponse.json({
                success: false,
                msg: "User not verified"
            },
                {
                    status: 400
                })
        }

        const addDetails = await prisma.myUser.update({
            where: { mobileNumber: mobileNumber },
            data: {
                address: user?.address,
                profilePhoto: user?.profilePhoto,
                work:user.work,
                name:user.name,
                mobileNumber:user.mobileNumber
            }
        })
        return NextResponse.json({
            success: true,
            msg: "User profile updated successfully!",
            addDetails: addDetails
        })

    } catch (err: any) {
        console.log(err.message)
        return NextResponse.json({
            success: false,
            error: err.message,
            msg: "Internal error in profile creation of user"
        }, { status: 500 })
    }
}