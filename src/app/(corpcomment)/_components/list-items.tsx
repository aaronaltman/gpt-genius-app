import SingleListItem from "./single-list-item";
import { CorpComment } from "@prisma/client";

type FeedbackListProps = {
  corpComments: CorpComment[];
  setCorpComments: (corpComments: CorpComment[]) => void;
};

export default function FeedbackList({
  corpComments,
  setCorpComments,
}: FeedbackListProps) {
  return (
    <>
      <ol className="w-full">
        {corpComments.map((comment) => (
          <SingleListItem
            key={comment.id} // Assuming each comment has a unique 'id'
            comment={comment}
            setCorpComments={setCorpComments}
            corpComments={corpComments}
          />
        ))}
      </ol>
    </>
  );
}
