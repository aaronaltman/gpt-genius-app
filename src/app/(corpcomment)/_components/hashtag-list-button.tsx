"use client";

import { use, useEffect, useState } from "react";
import { CorpComment } from "@prisma/client";

type hashtagListProps = {
  corpComment: CorpComment;
};

export default function HashtagListButton({ corpComment }: hashtagListProps) {
  // Assuming corpComment includes a companyName
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <li className="btn btn-ghost bg-accent hover:scale-105 hover:bg-white">
      #{corpComment.companyName}
    </li>
  );
}
