import {prisma} from "@/lib/prisma"
import signinSchema from "../../../../library/validations/workerValidation/signin.js"
import { NextResponse } from "next/server.js"
import { use } from "react"


export async function POST(req: Request) {
    try {
        const body = await req.json()
        const isCorrect = signinSchema.safeParse(body)
        if (!isCorrect.success) {
            return NextResponse.json({
                success: false,
                error: isCorrect.error.flatten().fieldErrors
            },
                {
                    status: 400
                })
        }
        const { mobileNumber, name } = isCorrect.data
        const worker = await  prisma.myWorker.findUnique({
            where:{mobileNumber}
        })
        let verified = worker?.verified
        const userExists =await prisma.myWorker.findFirst({
            where: {
                mobileNumber: mobileNumber,
                name: name
            }
        })

        if (!userExists) {
            return NextResponse.json({
                success: false,
                msg: "No user found.Try to signup"
            }, { status: 400 })
        }
        
        verified= true
        return NextResponse.json({
            verified,
            success: true,
            msg: "Worker Login successfully!"
        },
            {
                status: 200
            })
    } catch (err) {
        return NextResponse.json({
            success: false,
            msg: "internal error in signin.js of worker"
        },
            {
                status: 500
            })
    }
}