"use client";

import SingleListItem from "./single-list-item";
import { CorpComment } from "@prisma/client";

type FeedbackListProps = {
  corpComments: CorpComment[];
  setCorpComments: (corpComments: CorpComment[]) => void;
};

export default async function FeedbackList({
  corpComments,
  setCorpComments,
}: FeedbackListProps) {
  // Fetch all comments

  // Sort comments by company
  return (
    <>
      <ol className="w-full">
        <SingleListItem
          corpComments={corpComments}
          setCorpComments={setCorpComments}
        />
      </ol>
    </>
  );
}
