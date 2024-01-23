"use server";

import { TriangleUpIcon } from "@radix-ui/react-icons";
import { getAllCorpComments } from "../_actions";
import { DAYS_AGO } from "../_lib/constants";

export default async function SingleListItem() {
  const corpComments = await getAllCorpComments();
  return (
    <>
      {corpComments.map((corpComment) => (
        <li
          key={corpComment.id}
          className="flex justify-around bg-zinc-50 text-slate-900 p-4"
        >
          <button className="p-4 flex flex-col justify-center items-center">
            <TriangleUpIcon className="w-6 h-6 text-center" />
            {corpComment.upvoteCount}
          </button>
          <div className="flex justify-center items-center my-2 px-4 rounded-md bg-accent">
            <p className="text-slate-950 text-2xl">
              {corpComment.badgeLetters}
            </p>
          </div>
          <div>
            <p className="text-xl">{corpComment.companyName}</p>
            <p>{corpComment.comment}</p>
          </div>
          <div className="flex justify-center items-center">
            <p>{DAYS_AGO(corpComment)}</p>
          </div>
        </li>
      ))}
    </>
  );
}
