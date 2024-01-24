"use server";

import prisma from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { CorpComment } from "@prisma/client";

export default async function createCorpComment(formData: FormData) {
  if (!formData || !formData.get("feedback")) {
    return;
  }
  const comment = formData.get("feedback") as string;
  const companyName = comment
    .split(" ")
    .find((word) => word.startsWith("#"))
    ?.substring(1);

  if (!companyName) {
    return; // or handle error
  }

  const upvoteCount = 1;
  const badgeLetters = companyName[0].toUpperCase();

  try {
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
    return newCorpComment; // or some status
  } catch (error) {
    // handle error
    console.error(error);
  }
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
export async function getCorpCommentsByCompanyName() {
  const allCorpCommentNames = await prisma.corpComment.findMany({
    select: {
      id: true,
      companyName: true,
    },
  });
  return allCorpCommentNames;
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
