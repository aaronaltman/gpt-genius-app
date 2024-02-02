"use client";

import { useContext } from "react";
import { FeedbackItemsContext } from "../contexts/corp-comment-context-provider";

export default function HashtagListButton() {
  const context = useContext(FeedbackItemsContext);
  const uniqueCompanyNames = context?.corpComments
    ? Array.from(
        new Set(context.corpComments.map((comment) => comment.companyName))
      )
    : [];

  const handleClick = (e) => {
    context?.setSelectedCompany(e.target.textContent);
  };

  return (
    <div className="flex flex-col space-y-4">
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
