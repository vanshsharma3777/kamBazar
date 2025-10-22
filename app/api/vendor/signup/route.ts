import { success } from 'zod';
import { prisma } from '@/lib/prisma'
import  singupSchema from '../../../../library/validations/vendorValidation/singup.js'
import { NextResponse } from "next/server";
export  async function POST(req: Request) {
    try {
        const body = await req.json()
        
        const {
            ownerName,
            age,
            mobileNumber,
        } = body

        const userExist = await prisma.myVendor.findFirst({
            where: { mobileNumber }
        })
        if (userExist) {
            console.log("user already exists")
            
            return NextResponse.json(
                { msg: "user already exist" },
                { status: 411 }
            )
        }

        const user = await prisma.myVendor.create({
            data: {
                ownerName:ownerName,
                age,
                mobileNumber
            }
        })
        user.verified=true;
        return NextResponse.json({
            msg: "user created succesfully.",
            user: user,
            success:true
        },
            { status: 201 }
        )
    }
    catch (err:any) {
        console.log("signup error: ", err.message)
        return NextResponse.json({
            msg: "signup internal server error.",
            error: err.message
        }, { status: 500 })
    }

}