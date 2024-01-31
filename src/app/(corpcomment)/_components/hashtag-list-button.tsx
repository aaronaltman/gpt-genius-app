"use client";

import { filterCompanies } from "@/actions";
import { CorpComment } from "@prisma/client";

type HashtagListButtonProps = {
  companyName: string; // Assuming you just need the company name
  setCorpComments: (corpComments: CorpComment[]) => void;
  corpComments: CorpComment[];
};

export default function HashtagListButton({
  companyName,
  setCorpComments,
  corpComments,
}: HashtagListButtonProps) {
  const handleClick = async () => {
    const response = await filterCompanies(companyName);
    setCorpComments(response);
  };

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
