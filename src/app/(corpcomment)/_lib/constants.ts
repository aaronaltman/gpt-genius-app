import { CorpComment } from "@prisma/client";

export const MAX_CHARS = 150;

export function DAYS_AGO(corpComment: CorpComment) {
  const date = corpComment.updatedAt
    ? corpComment.updatedAt
    : corpComment.createdAt;
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return "NEW";
  return days;
}
