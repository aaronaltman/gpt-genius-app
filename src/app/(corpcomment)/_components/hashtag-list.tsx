import HashtagListButton from "./hashtag-list-button";
import prisma from "@/db";

export default async function HashtagList() {
  // Fetch unique company names with count of comments
  const corpComment = await prisma.corpComment.findMany({
    select: {
      id: true,
      companyName: true,
    },
    distinct: ["companyName"],
  });

  return (
    <div className="flex flex-col flex-wrap">
      <h2 className="text-white pt-10 pb-2 pl-4 font-bold">Filter Companies</h2>
      <ul className="flex lg:flex-col space-y-4 px-4">
        {corpComment.map((e) => {
          return (
            <li key={e.id}>
              <HashtagListButton theCompanyName={e} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
