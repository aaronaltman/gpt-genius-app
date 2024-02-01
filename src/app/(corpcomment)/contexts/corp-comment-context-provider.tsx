import { useState, createContext } from "react";
import { CorpComment } from "@prisma/client";

type TfeedbackItemsContext = {
  corpComments: CorpComment[];
  setCorpComments: (corpComments: CorpComment[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  selectedCompany: string;
  setSelectedCompany: (company: string) => void;
};

export const FeedbackItemsContext = createContext<TfeedbackItemsContext | null>(
  null
);

export default function CorpCommentContextProvider({
  children,
}: {
  children: any;
}) {
  const [corpComments, setCorpComments] = useState<CorpComment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedCompany, setSelectedCompany] = useState<string>("");

  return (
    <FeedbackItemsContext.Provider
      value={{
        corpComments,
        setCorpComments,
        isLoading,
        setIsLoading,
        selectedCompany,
        setSelectedCompany,
      }}
    >
      {children}
    </FeedbackItemsContext.Provider>
  );
}
