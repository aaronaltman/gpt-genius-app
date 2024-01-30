"use client";

import SingleListItem from "./single-list-item";
import { getAllCorpComments } from "../_actions";
import { CorpComment } from "@prisma/client";

type FeedbackListProps = {
  feedbacks: CorpComment[];
};

export default async function FeedbackList({ feedbacks }: FeedbackListProps) {
  // Fetch all comments

  // Sort comments by company
  return (
    <>
      <ol className="w-full">
        <SingleListItem feedbacks={feedbacks} />
      </ol>
    </>
  );
}
