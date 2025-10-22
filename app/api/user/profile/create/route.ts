import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import axios from "axios";

export async function POST(req: Request) {
    try {
        const {
            mobileNumber,
            name,
            work,
            address
        }: {
            mobileNumber: string,
            name: string,
            address: string,
            work: string[]
        } = await req.json()
        console.log("here1")
       
        const response = await axios.post(`${process.env.BACKEND_URL}/api/user/signin`, { mobileNumber, name });
        console.log(response.data)
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
                address,
                work,
                name,
                mobileNumber,
            }
        })
        return NextResponse.json({
            success: true,
            msg: "User profile updated successfully!",
            addDetails: addDetails
        })

    } catch (err: any) {
        console.log("error:",err.message)
        return NextResponse.json({
            success: false,
            error: err.message,
            msg: "Internal error in profile creation of user"
        }, { status: 500 })
    }
}