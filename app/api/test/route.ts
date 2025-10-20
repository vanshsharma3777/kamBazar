import { getServerSession } from "next-auth/next";
import  {authOptions}  from "../auth/[...nextauth]/route";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
export async function GET(req:Response , res:Response ){
    const session:any = await getServerSession(authOptions)
    console.log("sesion details are :",session)
    return NextResponse.json({
        session,
        msg:"working",
        success:true
    })
}