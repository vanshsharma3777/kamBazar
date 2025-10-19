import { getServerSession } from "next-auth";
import { PrismaClient } from "../../../../generated/prisma/index";
import { NextResponse } from "next/server";
import GoogleProvider from "next-auth/providers/google";

// import {handler} from "../../../../../app/api/auth/[...nextauth]/route"
const prisma = new PrismaClient()

export async function POST(req:Request) {
    const session = await getServerSession();
    console.log(session)
    console.log("hello")
    return NextResponse.json({
        success:true,
        msg:"got it"
    })
}