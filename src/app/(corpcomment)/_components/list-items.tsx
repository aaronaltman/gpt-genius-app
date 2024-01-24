"use server";

import SingleListItem from "./single-list-item";
import { getAllCorpComments, onClickSortCompanies } from "../_actions";

export default async function FeedbackList() {
  // Fetch all comments
  const corpComments = await getAllCorpComments();

  // console.log("corpComments", corpComments);

  const filteredCorpComments = () => {
    const filteredCorpComments = corpComments.filter(
      (corpComment: any) => corpComment.companyName === "Amazon"
    );
    return filteredCorpComments;
  };
  return (
    <>
      <ol className="w-full">
        <SingleListItem corpComments={corpComments} />
      </ol>
    </>
  );
}
