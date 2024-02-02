"use client";

import { useState, createContext, useEffect } from "react";
import { CorpComment } from "@prisma/client";
import { getAllCorpComments } from "../_actions";

type TfeedbackItemsContext = {
  corpComments: CorpComment[];
  setCorpComments: (corpComments: CorpComment[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  sortBy: string;
  setSortBy: (company: string) => void;
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
  const [sortBy, setSortBy] = useState<string>("");

  useEffect(() => {
    setIsLoading(true);
    const fetchCorpComments = async () => {
      const response = await getAllCorpComments();
      setCorpComments(response);
      setIsLoading(false);
    };
    fetchCorpComments();
  }, [corpComments]);

  return (
    <FeedbackItemsContext.Provider
      value={{
        corpComments,
        setCorpComments,
        isLoading,
        setIsLoading,
        sortBy,
        setSortBy,
      }}
    >
      {children}
    </FeedbackItemsContext.Provider>
  );
}
