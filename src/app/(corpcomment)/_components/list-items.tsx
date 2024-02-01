import SingleListItem from "./single-list-item";
import { CorpComment } from "@prisma/client";

export default function FeedbackList() {
  return (
    <>
      <ol className="w-full">
        <SingleListItem />
      </ol>
    </>
  );
}
