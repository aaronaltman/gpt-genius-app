"use client";

import { filterCompanies } from "@/actions";
import { CorpComment } from "@prisma/client";

export default function HashtagListButton() {
  const { companyName, setCorpComments, corpComments } = props;

  return (
    <button
      className="btn btn-ghost bg-accent hover:scale-105 hover:bg-white"
      onClick={handleClick}
    >
      #
      {corpComments.map((comment) => {
        return comment.companyName;
      })}
    </button>
  );
}
