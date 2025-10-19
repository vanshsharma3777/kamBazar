import { PrismaClient, Prisma } from "../../../generated/prisma/index.js"
import signinSchema from "../../../../library/validations/userValidation/singin.js"
import { NextResponse } from "next/server.js"

const prisma = new PrismaClient()

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const isCorrect = signinSchema.safeParse(body)
        if (!isCorrect.success) {
            return NextResponse.json({
                success: false,
                verified: false,
                error: isCorrect.error.flatten().fieldErrors
            },
                {
                    status: 400
                })
        }
        const { mobileNumber, name } = isCorrect.data
        const userExists = await prisma.myUser.findFirst({
            where: {
                mobileNumber: mobileNumber,
                name: name
            }
        })
        if (!userExists) {
            return NextResponse.json({
                success: false,
                verified: false,
                msg: "No user found.Try to signup"
            }, { status: 400 })
        }
        let verified = userExists.verified
        verified = true
        return NextResponse.json({
            success: true,
            verified: true,
            msg: "User Login successfully!"
        },
            {
                status: 200
            })
    } catch (err) {
        return NextResponse.json({
            success: false,
            msg: "internal error in signin.js of User"
        },
            {
                status: 500
            })
    }
}