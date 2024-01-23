"use server";

import prisma from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { CorpComment } from "@prisma/client";

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

export async function updateCorpUpvoteCount(formData: FormData) {
  const corpcom = formData.get("corpId") as string;
  if (!formData) {
    return;
  }
  const corpComment = await prisma.corpComment.update({
    where: {
      id: corpcom,
    },
    data: {
      upvoteCount: {
        increment: 1,
      },
    },
  });
  revalidatePath("/corp-comment");
  return corpComment;
}

export async function getAllCorpComments() {
  const allCorpComments = await prisma.corpComment.findMany({
    orderBy: {
      upvoteCount: "desc",
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

export async function getDaysAgoCorpComment(formData: CorpComment) {
  if (!formData) {
    return;
  }
  const theId = formData.id;
}
