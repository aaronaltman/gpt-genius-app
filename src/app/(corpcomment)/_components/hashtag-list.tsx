import HashtagListButton from "./hashtag-list-button";
import prisma from "@/db";

export default async function HashtagList() {
  // Fetch unique company names with count of comments
  const uniqueCompanyNames = await prisma.corpComment.groupBy({
    by: ["companyName"],
    _count: {
      companyName: true,
    },
  });

  return (
    <div>
      <h2 className="text-white pt-10 pb-2 pl-4 font-bold">Filter Companies</h2>
      <ul className="space-y-4 px-4">
        {uniqueCompanyNames.map((entry) => (
          <li key={entry.companyName}>
            <HashtagListButton
              companyName={entry.companyName}
              count={entry._count.companyName}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
