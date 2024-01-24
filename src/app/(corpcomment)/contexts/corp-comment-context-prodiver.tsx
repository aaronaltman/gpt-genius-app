import { useState, createContext } from "react";
import { CorpComment } from "@prisma/client";

type TfeedbackItemsContext = {
  corpComments: CorpComment[];
  setCorpComments: (corpComments: CorpComment[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

const FeedbackItemsContext = createContext<TfeedbackItemsContext | null>(null);

export default function CorpCommentContextProvider({
  children,
}: {
  children: any;
}) {
  const [corpComments, setCorpComments] = useState<CorpComment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <FeedbackItemsContext.Provider
      value={{
        corpComments,
        setCorpComments,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </FeedbackItemsContext.Provider>
  );
}
