import  authOptions  from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { success } from "zod";


export async function GET(res:Response){
    const session = await getServerSession(authOptions)
    console.log(session)
    return NextResponse.json({
        session,
        msg:"working",
        success:true
    })
}