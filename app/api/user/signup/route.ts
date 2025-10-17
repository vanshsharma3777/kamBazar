import singupSchema from '../../../../library/validations/userValidation/singup.js'
import { NextResponse } from "next/server";
import { prisma } from '../../../../lib/prismaClient/dist/index.js'
export async function POST(req: Request) {
    try {
        const body = await req.json()
        const isCorrect = singupSchema.safeParse(body);
        if (!isCorrect.success) {
            return NextResponse.json(
                { error: isCorrect.error.flatten().fieldErrors },
                { status: 400 }
            )
        }
        const {
            name,
            mobileNumber,
            profilePhoto,
            address
        } = isCorrect.data;

        const userExist = await prisma.myUser.findUnique({
            where: { mobileNumber }
        })
        if (userExist) {
            return NextResponse.json(
                { msg: "user already exist" },
                { status: 411 }
            )
        }

        const user = await prisma.myUser.create({
            data: {
                name,
                mobileNumber,
                profilePhoto,
                address
            }
        })

        return NextResponse.json({
            msg: "user created succesfully.",
            user: user
        },
            { status: 201 }
        )
    }
    catch (err: any) {
        console.log("signup error: ", err.message)
        return NextResponse.json({
            msg: "signup internal server error.",
            error: err.message
        }, { status: 500 })
    }

}