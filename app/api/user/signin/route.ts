import { prisma } from "@/lib/prisma"
import signupSchema from "../../../../library/validations/userValidation/singup.js"
import { NextResponse } from "next/server.js"
import bcrypt from "bcryptjs"
import { signToken } from "@/library/jwt"
import { success } from "zod"
import { getuid } from "process"


export async function POST(req: Request) {
    try {
        const body = await req.json()
        
        const { email, password } = body
        console.log(email)
        const getUser = await prisma.myUser.findUnique({
            where: {
                email: email,
            }
        })
        
        if (!getUser) {
            console.log("no user found. try signup")
            return NextResponse.json({
                success: false,
                verified: false,
                msg: "No user found.Try to signup"
            }, { status: 404 })
        }
        if (!getUser?.password) {
            throw new Error("User password not found");
        }
     
         const hasedPassword = getUser?.password as string
       
        const verify = await bcrypt.compare(password , hasedPassword)
        
        if (!verify) {
            
            return NextResponse.json({ msg: "Invalid credentials" , success:false }, { status: 401 });
        }
        console.log("token got ?")
        const token = signToken({
            email: getUser.email,
            id: getUser.id
        })     
        console.log("YESD")
    
        return NextResponse.json({
            token,
            msg: "User Login successfully!",
            success:true,
            valid:true
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