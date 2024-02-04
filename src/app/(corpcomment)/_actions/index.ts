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
  // Use regex to find the letter following the first '#'
  const regexResult = comment.match(/#(\w+)/);
  const companyName = regexResult ? regexResult[1].toUpperCase() : "";
  // Get first letter after # or default to empty string if not found
  const upvoteCount = 0;
  const badgeLetters = companyName.charAt(0); // This will be the first letter after # as per companyName extraction

  const corpComment = await prisma.corpComment.create({
    data: {
      companyName,
      comment,
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
      createdAt: "desc",
    },
  });
  return allCorpComments;
}

// Filter List Items #HashTagITems
export async function getCommentsByCompanyName(companyName: string) {
  const commentsByCompany = await prisma.corpComment.findMany({
    where: {
      companyName: companyName,
    },
  });
  return commentsByCompany;
}

export async function getDaysAgoCorpComment(formData: CorpComment) {
  if (!formData) {
    return;
  }
  const theId = formData.id;
}

export async function onClickSortCompanies(formData: FormData) {
  const theName = formData.get("companyName") as string;
  if (!formData) {
    return;
  }
  const getCompanybyName = await prisma.corpComment.findMany({
    where: {
      companyName: theName,
    },
  });
  console.log(getCompanybyName);
}
