"use server";
import prisma from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function createNote(formData: any) {
  const title = formData.get("title");
  const content = formData.get("content");
  const newNote = await prisma.note.create({
    data: {
      title,
      content,
    },
  });
  revalidatePath("/prisma-example");
}

export async function deleteNoteById(formData: any) {
  const id = formData.get("id");
  const deletedNote = await prisma.note.delete({
    where: {
      id,
    },
  });
  revalidatePath("/prisma-example");
  console.log(deletedNote, "successfully deleted");
}

export async function getAllNotes() {
  const notes = await prisma.note.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return notes;
}

export async function getNoteById(formData: any) {
  const id = formData.get("id");
  await prisma.note.findUnique({
    where: {
      id,
    },
  });
  redirect(`/prisma-example/${id}`);
}

export async function updateNote(formData: any) {
  const id = formData.get("id");
  const title = formData.get("title");
  const content = formData.get("content");

  await prisma.note.update({
    where: {
      id,
    },
    data: {
      title,
      content,
    },
  });
  redirect("/prisma-example");
}
