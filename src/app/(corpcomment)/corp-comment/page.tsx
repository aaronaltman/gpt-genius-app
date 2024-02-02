import React from "react";
import Background from "../_components/background";
import Container from "../_components/container";
import Footer from "../_components/footer";
import HashtagList from "../_components/hashtag-list";
import CorpCommentContextProvider from "../contexts/corp-comment-context-provider";

export default function Page() {
  return (
    <CorpCommentContextProvider>
      <Background>
        <div className="flex justify-center items-center flex-wrap lg:-ml-28">
          <div className="flex mx-auto p-4">
            <Footer />
            <div className="flex justify-center">
              <Container />
              <div className="flex flex-col md:flex-row basis-1/4">
                <HashtagList />
              </div>
            </div>
          </div>
        </div>
      </Background>
    </CorpCommentContextProvider>
  );
}
