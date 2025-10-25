import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import axios from "axios";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: Request) {
   const session= await getServerSession(authOptions)
   if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
   console.log(session)
   const userId = session.user.id 
   
   try {
        
        const {
            mobileNumber,
            name,
            work,
            address,
            email
        }: {
            mobileNumber: string,
            name: string,
            address: string,
            work: string[],
            email:string
        } = await req.json()
        const user = await prisma.user.findFirst({
            where:{email}
        })
        if(user){
           return NextResponse.json({
            msg:"User already exists"
           }) 
        }
        const response = await axios.post(`${process.env.BACKEND_URL}/api/user/signin`, { mobileNumber, name });
        console.log(response.data)
        console.log(response.data.verified)
        if (!response.data.verified) {
            return NextResponse.json({
                success: false,
                msg: "User not verified"
            },
                {
                    status: 400
                })
        }

        const addDetails = await prisma.myUser.update({
            where: { mobileNumber: mobileNumber },
            data: {
                address,
                work,
                name,
                mobileNumber,
            }
        })
        return NextResponse.json({
            success: true,
            msg: "User profile updated successfully!",
            addDetails: addDetails
        })

    } catch (err: any) {
        console.log("error:",err.message)
        return NextResponse.json({
            success: false,
            error: err.message,
            msg: "Internal error in profile creation of user"
        }, { status: 500 })
    }
}