import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { date, success } from "zod";
import axios from "axios";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";



export async function POST(req: Request) {
    const session = await getServerSession(authOptions)
        if (!session) {
            console.log("session not found")
            return NextResponse.json({
                success: false,
                msg: "worker session not found.singin again"
            },
                {
                    status: 400
                })
        }
        else{
            console.log(session)
        }
    try {
        
        const {
            mobileNumber,
            name,
            address,
            dailyWage,
            occupation,
            age
        }:
            {
                mobileNumber: string,
                name: string,
                address: string,
                dailyWage: number,
                occupation: string,
                age: number

            } = await req.json()
            
        
        
        
        const addDetails = await prisma.myWorker.update({
            where: { mobileNumber: mobileNumber },
            data: {
                address,
                dailyWage,
                occupation,
                age
            }
        })
        console.log("worker profile created successfully")
        return NextResponse.json({
            success: true,
            msg: "Worker profile updated successfully!",
            addDetails: addDetails
        })

    } catch (error: any) {
        
        console.error('API Error Details:', {
            message: error.message,
            stack: error.stack,
            name: error.name
        })
        return NextResponse.json({
            success: false,
            error: error.message,
            msg: "Internal error in profile creation of Worker"
        }, { status: 500 })
    }
}