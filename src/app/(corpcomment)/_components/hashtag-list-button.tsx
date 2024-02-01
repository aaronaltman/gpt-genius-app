"use client";

import { useContext } from "react";
import { FeedbackItemsContext } from "../contexts/corp-comment-context-provider";

export default function HashtagListButton() {
  const context = useContext(FeedbackItemsContext);

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <button
      className="btn btn-ghost bg-accent hover:scale-105 hover:bg-white"
      onClick={handleClick}
    >
      #
      {context?.corpComments.map((comment) => {
        return comment.companyName;
      })}
    </button>
  );
}
