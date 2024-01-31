import HashtagListButton from "./hashtag-list-button";
import prisma from "@/db";
import { CorpComment } from "@prisma/client";

type HashtagListProps = {
  corpComments: CorpComment[];
  setCorpComments: (corpComments: CorpComment[]) => void;
};

export default async function HashtagList({
  corpComments,
  setCorpComments,
}: HashtagListProps) {
  // Fetch unique company names with count of comments
  const filterCorpComments = await prisma.corpComment.findMany({
    select: {
      id: true,
      companyName: true,
    },
    distinct: ["companyName"],
  });
  setCorpComments(filterCorpComments);

  return (
    <div className="flex flex-col flex-wrap">
      <h2 className="text-white pt-10 pb-2 pl-4 font-bold">Filter Companies</h2>
      <ul className="flex lg:flex-col space-y-4 px-4">
        {corpComments.map((e) => {
          return (
            <li key={e.id}>
              <HashtagListButton
                corpComments={corpComments}
                setCorpComments={setCorpComments}
                theCompanyName={e}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
