"use client";

import { useContext } from "react";
import { FeedbackItemsContext } from "../contexts/corp-comment-context-provider";
import { getAllCorpComments } from "../_actions";

export default function HashtagListButton() {
  const context = useContext(FeedbackItemsContext);
  const uniqueCompanyNames = context?.corpComments
    ? Array.from(
        new Set(context.corpComments.map((comment) => comment.companyName))
      )
    : [];

  const handleClick = async (e: any) => {
    const companyNameNoHashtag = e.target.textContent.slice(1).toUpperCase();

    try {
      // Assume getAllCorpComments() fetches and returns the data
      const allComments = await getAllCorpComments();
      console.log("allComments:", allComments);
      // Now, update your context with this fetched data
      context?.setCorpComments(allComments);
      // Then, set the sortBy state to the clicked company name
      context?.setSortBy(companyNameNoHashtag);
    } catch (error) {
      console.error("Failed to refresh database:", error);
      // Handle any errors appropriately
    }
  };

  const handleAllCompaniesReset = async (e: any) => {
    try {
      // Assume getAllCorpComments() fetches and returns the data
      const allComments = await getAllCorpComments();
      console.log("allComments:", allComments);
      // Now, update your context with this fetched data
      context?.setCorpComments(allComments);
      context?.setSortBy("");
      // Then, set the sortBy state to "all"
    } catch (error) {
      console.error("Failed to refresh database:", error);
      // Handle any errors appropriately
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <button
        onClick={handleAllCompaniesReset}
        className="btn btn-ghost bg-accent hover:scale-105 hover:bg-white"
      >
        All Companies
      </button>
      {uniqueCompanyNames.map((companyName) => (
        <button
          key={companyName}
          className="btn btn-ghost bg-accent hover:scale-105 hover:bg-white"
          onClick={handleClick}
        >
          #{companyName}
        </button>
      ))}
    </div>
  );
}
