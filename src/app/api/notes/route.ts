import { NextResponse } from "next/server";
import prisma from "@/db";

export async function GET(request: Request) {
  const note = await prisma.note.findMany();
  return NextResponse.json(note);
}

export async function POST(request: Request) {
  const data = await request.json();
  const note = await prisma.note.create({
    data: {
      title: data.title,
      content: data.content,
    },
  });
  return NextResponse.json({ data: note });
}
