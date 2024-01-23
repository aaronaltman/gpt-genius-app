"use server";

import { TriangleUpIcon } from "@radix-ui/react-icons";
import { getAllCorpComments } from "../_actions";
import { DAYS_AGO } from "../_lib/constants";

export default async function SingleListItem() {
  // Get the data for the list item
  const corpComments = await getAllCorpComments();
  return (
    <>
      {corpComments.map((corpComment) => (
        <li
          key={corpComment.id}
          className="flex flex-col justify-between sm:flex-row bg-zinc-50 text-slate-900 p-4  rounded-lg shadow-sm mb-1 hover:scale-105 hover:my-2 transition-all"
        >
          <button className="p-2 mb-2 sm:mb-0 flex basis-1/12 flex-col justify-center items-center hover:bg-gray-200 rounded">
            <TriangleUpIcon className="w-6 h-6" />
            <span className="text-sm">{corpComment.upvoteCount}</span>
          </button>
          <div className="flex flex-col justify-center basis-1/12 items-center my-2 px-4 rounded-md bg-accent">
            <p className="text-lg text-white">{corpComment.badgeLetters}</p>
          </div>
          <div className="flex basis-9/12 justify-between px-2">
            <div>
              <p className="text-lg font-semibold">{corpComment.companyName}</p>
              <p className="text-sm">{corpComment.comment}</p>
            </div>
            <p className="text-sm italic">{DAYS_AGO(corpComment)}</p>
          </div>
        </li>
      ))}
    </>
  );
}
