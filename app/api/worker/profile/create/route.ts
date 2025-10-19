import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma/index.js";
import { date, success } from "zod";
import axios from "axios";

const prisma = new PrismaClient()

export async function POST(req: Request) {
    try {
        const {
            mobileNumber,
            name,
            address,
            profilePhoto,
            photo,
            video,
            dailyWage,
            occupation,
            pastDeals,
            presentDeals,
            age
        }:
            {
                mobileNumber: string,
                name: string,
                address: string,
                profilePhoto: string,
                photo: string,
                video: string,
                dailyWage: number,
                occupation: string,
                pastDeals: string[],
                age: number
                presentDeals: string[],

            } = await req.json()
        console.log("here1")
        const worker = await prisma.myWorker.findFirst({
            where: { mobileNumber, name },
        })
        console.log("here2")
        if (!worker) {
            return NextResponse.json({
                success: false,
                msg: "Worker Not found"
            },
                {
                    status: 400
                })
        }
        const response = await axios.post(`${process.env.BACKEND_URL}/api/worker/signin`, { mobileNumber, name });
        console.log("here3")
        console.log(response)
        if (!worker) {
            return NextResponse.json({
                success: false,
                msg: "Worker Not found"
            },
                {
                    status: 400
                })
        }
        console.log(response.data.verified)
        if (!response.data.verified) {
            return NextResponse.json({
                success: false,
                msg: "Worker not verified"
            },
                {
                    status: 400
                })
        }

        const addDetails = await prisma.myWorker.update({
            where: { mobileNumber: mobileNumber },
            data: {
                address,
                profilePhoto,
                photo,
                video,
                dailyWage,
                occupation,
                pastDeals,
                presentDeals,
                age
            }
        })
        return NextResponse.json({
            success: true,
            msg: "Worker profile updated successfully!",
            addDetails: addDetails
        })

    } catch (err: any) {
        console.log(err.message)
        return NextResponse.json({
            success: false,
            error: err.message,
            msg: "Internal error in profile creation of Worker"
        }, { status: 500 })
    }
}