"use client";

import { useContext } from "react";
import { FeedbackItemsContext } from "../contexts/corp-comment-context-provider";

export default function TestContextProvider() {
  const context = useContext(FeedbackItemsContext);

  return (
    <div>
      <section>
        <h1>Test Context</h1>
        <p>
          {context?.corpComments.map((comment) => (
            <div key={comment.id}>{comment.comment}</div>
          ))}
        </p>
      </section>
    </div>
  );
}
