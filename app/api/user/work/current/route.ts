import { getServerSession } from "next-auth";
import { PrismaClient } from "../../../../generated/prisma/index";
import { handler } from "../../../auth/[...nextauth]/route";
const primsa = new PrismaClient();

export async function GET(res:Response) {
    const session = getServerSession(handler)
    console.log(session)
}