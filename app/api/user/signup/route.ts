import singupSchema from '../../../../library/validations/userValidation/singup.js'
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { signToken } from "@/library/jwt";
import { prisma } from '@/lib/prisma'
import { emit } from 'process';
import { success } from 'zod';
export async function POST(req: Request) {
    try {
        const body = await req.json()
        const isCorrect = singupSchema.safeParse(body);
       
        const {
            password,
            email,
        } = body;
        console.log(password , email)
        const userExist = await prisma.myUser.findFirst({
            where: { email }
        })
        if (userExist) {
            return NextResponse.json(
                { msg: "user already exist" },
                { status: 404 }
            )
        }
        
        const hasedPassword = await bcrypt.hash(password , 10 )
        const user = await prisma.myUser.create({
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
            msg: "user created succesfully.",
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