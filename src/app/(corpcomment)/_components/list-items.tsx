"use server";

import SingleListItem from "./single-list-item";
import { getAllCorpComments } from "../_actions";

export default async function FeedbackList() {
  const corpComments = await getAllCorpComments();
  return (
    <>
      <ol className="w-full">
        <SingleListItem corpComments={corpComments} />
      </ol>
    </>
  );
}
