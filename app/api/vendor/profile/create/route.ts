import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma/index.js";
import { date, success } from "zod";
import axios from "axios";

const prisma = new PrismaClient()

export async function POST(req: Request) {
    try {
        const {
            mobileNumber,
            ownerName,
            address,
            shopName,
            photo,
            profilePhoto,
            email,
            password,
            gstNumber,
            bussinessType,
            age,


        }: {
            mobileNumber: string,
            ownerName: string,
            address: string,
            shopName: string,
            email: string,
            password: string,
            age: number,
            photo: string,
            profilePhoto: string,
            gstNumber: string,
            bussinessType: string,

        } = await req.json()
        console.log("here1")
        const vendor = await prisma.myVendor.findFirst({
            where: { mobileNumber, ownerName },
        })
        console.log("here2")
        if (!vendor) {
            return NextResponse.json({
                success: false,
                msg: "vendor Not found"
            },
                {
                    status: 400
                })
        }
        const response = await axios.post(`${process.env.BACKEND_URL}/api/vendor/signin`, { mobileNumber, ownerName });
        console.log("here3")
        console.log(response.data)
        if (!vendor) {
            return NextResponse.json({
                success: false,
                msg: "vendor Not found"
            },
                {
                    status: 400
                })
        }
        console.log(response.data.verified)
        if (!response.data.verified) {
            return NextResponse.json({
                success: false,
                msg: "vendor not verified"
            },
                {
                    status: 400
                })
        }

        const addDetails = await prisma.myVendor.update({
            where: { mobileNumber: mobileNumber },
            data: {
                address: vendor?.address,
                profilePhoto: vendor?.profilePhoto,
                shopName,
                email,
                password,
                gstNumber,
                bussinessType,
                age,
            }
        })
        return NextResponse.json({
            success: true,
            msg: "vendor profile updated successfully!",
            addDetails: addDetails
        })

    } catch (err: any) {
        console.log(err.message)
        return NextResponse.json({
            success: false,
            error: err.message,
            msg: "Internal error in profile creation of vendor"
        }, { status: 500 })
    }
}