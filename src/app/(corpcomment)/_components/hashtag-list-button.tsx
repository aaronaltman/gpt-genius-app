"use client";

import { useEffect } from "react";
import { filterCompanies } from "@/actions";

export default function HashtagListButton({
  theCompanyName,
  setFeedbacks,
  feedbacks,
}: any) {
  useEffect(() => {
    const fetchFeedbacks = async () => {
      const response = await filterCompanies(feedbacks);
      setFeedbacks(response);
    };
    fetchFeedbacks();
  }, []);
  // Fetch unique company names with count of comments

  return (
    <form action={filterCompanies}>
      <input type="hidden" name="companyName" value={feedbacks.companyName} />
      <button className="btn btn-ghost bg-accent hover:scale-105 hover:bg-white">
        #{feedbacks.companyName}
      </button>
    </form>
  );
}
