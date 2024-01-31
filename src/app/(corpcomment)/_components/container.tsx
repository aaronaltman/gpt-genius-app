import Header from "./header";
import ListItems from "./list-items";
import { CorpComment } from "@prisma/client";

type ContainerProps = {
  corpComments: CorpComment[];
  setCorpComments: (corpComments: CorpComment[]) => void;
};

export default function Container({
  corpComments,
  setCorpComments,
}: ContainerProps) {
  return (
    <div className="flex flex-col items-center text-white bg-zinc-900 my-10 max-w-2xl rounded-lg">
      <Header />
      <ListItems
        corpComments={corpComments}
        setCorpComments={setCorpComments}
      />
    </div>
  );
}
