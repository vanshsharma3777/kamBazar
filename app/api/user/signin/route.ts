import {prisma} from "@/lib/prisma"
import signinSchema from "../../../../library/validations/userValidation/singin.js"
import { NextResponse } from "next/server.js"


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
                name:name
            }
        })
        if (!userExists) {
            console.log("no user found. try signup")
            return NextResponse.json({
                success: false,
                verified: false,
                msg: "No user found.Try to signup"
            }, { status: 500 })
        }
        let verified = userExists.verified
        verified = true
        console.log('user logged in successfully')
        return NextResponse.json({
            success: true,
            verified: true,
            msg: "User Login successfully!"
        },
            {
                status: 200
            })
    } catch (err) {
        console.log("error in user signin route")
        return NextResponse.json({
            success: false,
            msg: "internal error in signin.js of User"
        },
            {
                status: 500
            })
    }
}