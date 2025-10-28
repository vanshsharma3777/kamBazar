import singupSchema from '../../../../library/validations/userValidation/singup.js'
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { signToken } from "@/library/jwt";
import { prisma } from '@/lib/prisma'
import { success } from 'zod';
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
        } = isCorrect.data;
        console.log("email:" , email)
        const userExist = await prisma.myWorker.findUnique({
            where: { email }
        })
        if (userExist) {
            return NextResponse.json(
                { msg: "worker already exist.Please signin" },
                { status: 404 }
            )
        }
        
        const hasedPassword = await bcrypt.hash(password , 10 )
        const user = await prisma.myWorker.create({
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
            msg: "Worker created succesfully.",
            user: user,
            token : token,
            success:true
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