import { NextResponse } from "next/server";
import prisma from "@/db";

export async function GET(request: Request) {
  const comment = await prisma.corpComment.findMany();
  return NextResponse.json(comment);
}
