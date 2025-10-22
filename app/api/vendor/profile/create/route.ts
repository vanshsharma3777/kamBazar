import { NextResponse } from "next/server";
import {prisma} from "@/lib/prisma";
import { date, success } from "zod";
import axios from "axios";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions)
                if (!session) {
                    console.log("session not found")
                    return NextResponse.json({
                        success: false,
                        msg: "worker session not found.try to signin first"
                    },
                        {
                            status: 400
                        })
                }

        const {
            mobileNumber,
            ownerName,
            address,
            shopName,
            email,
            password,
            age,


        }: {
            mobileNumber: string,
            ownerName: string,
            address: string,
            shopName: string,
            email: string,
            password: string,
            age: number,

        } = await req.json()
       

        const addDetails = await prisma.myVendor.update({
            where: { mobileNumber: mobileNumber },
            data: {
                address,
                shopName,
                email,
                password,
                age,
                ownerName,
            }
        })
        console.log("profile updated suceesffuly")
        return NextResponse.json({
            success: true,
            msg: "vendor profile updated successfully!",
            addDetails: addDetails
        })

    } catch (error: any) {
         console.error('API Error Details in vendoor profile creation:', {
            message: error.message,
            stack: error.stack,
            name: error.name
        })
        return NextResponse.json({
            success: false,
            error: error.message,
            msg: "Internal error in profile creation of vendor"
        }, { status: 500 })
    }
}