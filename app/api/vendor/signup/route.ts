import singupSchema from '../../../../library/validations/userValidation/singup.js'
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { signToken } from "@/library/jwt";
import { prisma } from '@/lib/prisma'
export async function POST(req: Request) {
    try {
        const body = await req.json()
       const isCorrect = singupSchema.safeParse(body);
        if (!isCorrect.success) {
            console.log("error in zod inputs of user")
            return NextResponse.json(
                { error: isCorrect.error.flatten().fieldErrors },
                { status: 400 }
            )
        }
        const {
            password,
            email,
        } = isCorrect.data
        
        const userExist = await prisma.myVendor.findUnique({
            where: {email}
        })
        if (userExist) {
            return NextResponse.json(
                { msg: "vendor already exist.Please signin" },
                { status: 404 }
            )
        }
        
        const hasedPassword = await bcrypt.hash(password , 10 )
        const user = await prisma.myVendor.create({
            data: {
                password : hasedPassword,
                email,
            }
        })
        const token = await signToken({ 
            id:user.id,
            email : user.email
        } )
        
        return NextResponse.json({
            msg: "vendor created succesfully.",
            user: user,
            token : token,
        }
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