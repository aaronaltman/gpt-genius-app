"use client";

import { TriangleUpIcon } from "@radix-ui/react-icons";
import { updateCorpUpvoteCount } from "../_actions";
import { DAYS_AGO } from "../_lib/constants";
import { CorpComment } from "@prisma/client";
import { motion } from "framer-motion";
import { use, useEffect, useState } from "react";

export default function SingleListItem({
  corpComments,
}: {
  corpComments: CorpComment[];
}) {
  // Get the data for the list item
  return (
    <>
      {corpComments.map((corpComment) => (
        <li
          key={corpComment.id}
          className="flex flex-col justify-between items-center sm:flex-row bg-zinc-50 text-slate-900 p-4  rounded-lg shadow-sm mb-1 hover:scale-105 hover:my-2 transition-all hover:ease-in"
        >
          <form action={updateCorpUpvoteCount}>
            <input
              type="hidden"
              name="corpId"
              value={corpComment.id}
              readOnly={true}
            />
            <button className="p-2 mb-2 sm:mb-0 flex basis-1/12 flex-col justify-center items-center hover:bg-gray-200 rounded">
              <TriangleUpIcon className="w-6 h-6" />
              <span className="text-sm">{corpComment.upvoteCount}</span>
            </button>
          </form>
          <motion.div
            className="flex flex-col justify-center basis-1/12 items-center my-2 px-4 rounded-md bg-accent h-10 uppercase text-xl text-white font-bold italic odd-bg-green"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="flex items-center justify-center">
              {corpComment.badgeLetters}
            </p>
          </motion.div>
          <div className="flex basis-9/12 justify-between px-2">
            <div>
              <p className="text-lg font-bold">{corpComment.companyName}</p>
              <p className="text-sm">{corpComment.comment}</p>
            </div>
            <p id="getCreatedAt" className="flex text-sm italic">
              {DAYS_AGO(corpComment)}
            </p>
          </div>
        </li>
      ))}
    </>
  );
}
