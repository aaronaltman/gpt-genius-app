"use server";

import prisma from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function createCorpComment(formData: FormData) {
  if (!formData) {
    return;
  }
  const comment = formData.get("feedback") as string;
  const companyName = comment.includes("#") ? comment.split("#")[0] : comment;
  const upvoteCount = 1;
  const badgeLetters = companyName[0];
  const newCorpComment = await prisma.corpComment.create({
    data: {
      comment,
      companyName,
      upvoteCount,
      badgeLetters,
    },
  });
  revalidatePath("/corp-comment");
  redirect("/corp-comment");
}

export async function updateCorpUpvoteCount() {}

export async function getAllCorpComments() {
  const allCorpComments = await prisma.corpComment.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return allCorpComments;
}

// Filter List Items #HashTagITems
export async function getCorpCommentsByCompanyName(companyName: string) {
  const allCorpComments = await prisma.corpComment.findMany({
    where: {
      companyName: {
        contains: companyName,
      },
    },
  });
  return allCorpComments;
}
