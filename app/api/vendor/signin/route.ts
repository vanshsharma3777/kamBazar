import { prisma } from "@/lib/prisma"
import signupSchema from "../../../../library/validations/userValidation/singup.js"
import { NextResponse } from "next/server.js"
import bcrypt from "bcryptjs"
import { signToken } from "@/library/jwt"
import { useEffect } from "react"
import { success } from "zod"


export async function POST(req: Request) {
    try {
        const body = await req.json()
        
        const { email, password } = body
        const userExists = await prisma.myVendor.findUnique({
            where: {
                email: email,
                
            }
        })
        if (!userExists) {
            console.log("no vendor found. try to signup")
            return NextResponse.json({
                msg: "No vendor found.Try to signup"
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
            msg: "Vendor Login successfully!"
        },
            {
                status: 200
            })
    } catch (err) {
        console.log("error in vendor signin route")
        return NextResponse.json({
            success: false,
            msg: "internal error in signin.js of Vendor"
        },
            {
                status: 500
            })
    }
}