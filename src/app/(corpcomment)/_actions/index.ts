"use server";

import prisma from "@/db";
import { revalidatePath } from "next/cache";

export default async function createCorpComment(formData: FormData) {
  if (!formData) {
    return;
  }
  let comment = formData.get("feedback") as string;
  const companyName = comment.includes("#") ? comment.split("#")[0] : comment;
  let upvoteCount = 420;
  let badgeLetters = companyName[0];
  const newCorpComment = await prisma.corpComment.create({
    data: {
      comment,
      companyName,
      upvoteCount,
      badgeLetters,
    },
  });
  revalidatePath("/corp-comments");
}

export async function updateCorpUpvoteCount() {}

export async function getAllCorpComments() {
  const allCorpComments = await prisma.corpComment.findMany();
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
