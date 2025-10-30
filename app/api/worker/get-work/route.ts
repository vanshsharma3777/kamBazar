import { verifyToken } from "@/library/jwt";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { filterWork } from "@/lib/workFilter";

export async function GET(req: any) {
  try {
    const authHeader = req.headers.get("authorization");
    console.log("authorisation:", authHeader);
    const token = authHeader?.split(" ")[1];
    console.log("token :", token);

    if (!token || token === "null" || token === "undefined") {
      console.log("Token not found or invalid");
      return NextResponse.json(
        {
          msg: "Token not found. Please sign in again",
          valid: false,
        },
        { status: 400 }
      );
    }

    const body = await req.json();
    const decoded = await verifyToken(token);
    if (!decoded) {
      return NextResponse.json(
        {
          msg: "token not verified",
          valid: false,
        },
        { status: 400 }
      );
    }
    const workerEmail = decoded.email;
    const worker = await prisma.myWorker.findFirst({
      where: {
        email: workerEmail,
      },
    });

    const workerOcc = worker?.occupation;
    const workerLat = worker?.lat;
    const workerLng = worker?.lng;
    if (workerOcc) {
      const allWork = await prisma.work.findMany({
        where: {
          isActive: true,
          workType: workerOcc,
        },
      });
      const filteredWork = filterWork({ allWork, workerLat, workerLng });
      return NextResponse.json({ filteredWork });
    }
  } catch (error) {}
}
