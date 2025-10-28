import { prisma } from "@/lib/prisma"
import signupSchema from "../../../../library/validations/userValidation/singup.js"
import { NextResponse } from "next/server.js"
import bcrypt from "bcryptjs"
import { signToken } from "@/library/jwt"
import { success } from "zod"


export async function POST(req: Request) {
    try {
        const body = await req.json()
        const isCorrect = signupSchema.safeParse(body)
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
        const { email, password } = isCorrect.data
        const userExists = await prisma.myWorker.findFirst({
            where: {
                email: email,
                password: password
            }
        })
        if (!userExists) {
            console.log("no worker found. try to signup")
            return NextResponse.json({
                msg: "No worker found.Try to signup"
            }, { status: 404 })
        }
        if (!userExists?.password) {
            throw new Error("User password not found");
        }
        const valid = await bcrypt.compare(password, userExists?.password)
        if (!valid) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }
        const token = signToken({
            email: userExists.email,
            id: userExists.id
        })
        return NextResponse.json({
            token,
            success:true,
            msg: "worker Login successfully!"
        },
            {
                status: 200
            })
    } catch (err) {
        console.log("error in worker signin route")
        return NextResponse.json({
            success: false,
            msg: "internal error in signin.js of worker"
        },
            {
                status: 500
            })
    }
}