import { CorpComment } from "@prisma/client";

export const MAX_CHARS = 150;

export function DAYS_AGO(corpComment: CorpComment) {
  const publishedDate = corpComment.createdAt;
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - publishedDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (diffDays === 1) {
    return "NEW";
  }
  return `${diffDays} d`;
}

export const HASHTAG_LIST_ITEMS = [
  {
    id: 1,
    name: "#General",
  },
  {
    id: 2,
    name: "#Nike",
  },
  {
    id: 3,
    name: "#Adidas",
  },
  {
    id: 4,
    name: "#Starbucks",
  },
];
