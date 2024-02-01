"use client";

import HashtagListButton from "./hashtag-list-button";
import { useContext } from "react";
import { FeedbackItemsContext } from "../contexts/corp-comment-context-provider";

export default async function HashtagList() {
  const context = useContext(FeedbackItemsContext);

  return (
    <div className="flex flex-col flex-wrap">
      <h2 className="text-white pt-10 pb-2 pl-4 font-bold">Filter Companies</h2>
      <ul className="flex lg:flex-col space-y-4 px-4">
        {context?.corpComments.map((e) => {
          return (
            <li key={e.companyName}>
              <HashtagListButton />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
