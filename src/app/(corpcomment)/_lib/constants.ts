import { CorpComment } from "@prisma/client";
import { z } from "zod";

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

export const CorpCommentFormSchema = z.object({
  feedback: z
    .string()
    .max(MAX_CHARS, `Feedback must be at most ${MAX_CHARS} characters long`)
    .regex(/#/, "Feedback must include at least one hashtag (#)"),
});
