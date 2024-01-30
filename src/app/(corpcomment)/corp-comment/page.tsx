"use client";

import { useEffect, useState } from "react";
import Background from "../_components/background";

import Container from "../_components/container";
import Footer from "../_components/footer";
import HashtagList from "../_components/hashtag-list";
import { getAllCorpComments } from "../_actions";
import { CorpComment } from "@prisma/client";

export default function Page() {
  const [feedbacks, setFeedbacks] = useState<CorpComment[]>([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const response = await getAllCorpComments();
      setFeedbacks(response);
    };
    fetchFeedbacks();
  }, []);

  return (
    <>
      <Background>
        <div className="flex justify-center items-center flex-wrap lg:-ml-28">
          <div className="flex flex-wrap mx-auto p-4">
            <Footer />
            <Container feedbacks={feedbacks} />
            <HashtagList feedbacks={feedbacks} setFeedbacks={setFeedbacks} />
          </div>
        </div>
      </Background>
    </>
  );
}
