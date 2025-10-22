import { prisma } from "@/lib/prisma";
import  singupSchema from '../../../../library/validations/workerValidation/signup.js'
import { NextResponse } from "next/server";
import { success } from "zod";
export  async function POST(req: Request) {
    try {
        const body = await req.json()
        const isCorrect = singupSchema.safeParse(body);
        if (!isCorrect.success) {
            console.log("error in enteries")
            return NextResponse.json(
                { error: isCorrect.error.flatten().fieldErrors },
                { status: 400 }
            )
        }
        const {
            name,
            mobileNumber,
            age,
        } = isCorrect.data;

        const userExist = await prisma.myWorker.findFirst({
            where: { mobileNumber }
        })
        if (userExist) {
            return NextResponse.json(
                { msg: "user already exist" },
                { status: 411 }
            )
        }

        const user = await prisma.myWorker.create({
            data: {
                name,
                mobileNumber,
                age,
            }
        })
        user.verified = true;

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