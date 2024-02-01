import HashtagListButton from "./hashtag-list-button";
import prisma from "@/db";
import { CorpComment } from "@prisma/client";

export default async function HashtagList() {
  // Fetch unique company names with count of comments
  const corpComments = await prisma.corpComment.groupBy({
    by: ["companyName"],
    _count: {
      companyName: true,
    },
  });

  return (
    <div className="flex flex-col flex-wrap">
      <h2 className="text-white pt-10 pb-2 pl-4 font-bold">Filter Companies</h2>
      <ul className="flex lg:flex-col space-y-4 px-4">
        {corpComments.map((e) => {
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
