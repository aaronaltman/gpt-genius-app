"use client";

import { useContext } from "react";
import { FeedbackItemsContext } from "../contexts/corp-comment-context-provider";

export default function HashtagListButton() {
  const context = useContext(FeedbackItemsContext);

  const handleClick = (companyName: string) => {
    console.log("clicked", companyName);
  };

  return (
    <>
      {context?.corpComments.map((comment) => (
        <button
          key={comment.companyName}
          className="btn btn-ghost bg-accent hover:scale-105 hover:bg-white"
          onClick={() => handleClick(comment.companyName)}
        >
          {comment.companyName}
        </button>
      ))}
    </>
  );
}
