import { prisma } from "@/lib/prisma"
import signinSchema from "../../../../library/validations/vendorValidation/signin.js"
import { NextResponse } from "next/server.js"



export async function POST(req: Request) {
    try {
        const body = await req.json()
        const isCorrect = signinSchema.safeParse(body)
        if (!isCorrect.success) {
            return NextResponse.json({
                verified:false,
                success: false,
                error: isCorrect.error.flatten().fieldErrors
            },
                {
                    status: 400
                })
        }
        const { mobileNumber, ownerName  } = isCorrect.data
        const userExists =await prisma.myVendor.findFirst({
            where: {
                mobileNumber: mobileNumber,
                ownerName: ownerName
            }
        })
        if (!userExists) {
            return NextResponse.json({
                verified:false,
                success: false,
                msg: "No user found.Try to signup"
            }, { status: 400 })
        }
        let verified = userExists?.verified
        verified= true
        return NextResponse.json({
            success: true,
            verified:true,
            msg: "Vendor Login successfully!"
        },
            {
                status: 200
            })
    } catch (err) {
        return NextResponse.json({
            success: false,
            msg: "internal error in signin.js of vendor"
        },
            {
                status: 500
            })
    }
}