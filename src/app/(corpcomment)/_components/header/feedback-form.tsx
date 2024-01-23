"use client";
import { useState } from "react";
import { MAX_CHARS } from "../../_lib/constants";
import createCorpComment from "@/app/(corpcomment)/_actions/index";

export default function FeedbackForm() {
  // Set State and Variables ------

  const [feedback, setFeedback] = useState("");
  const wordcount = MAX_CHARS - feedback.length;

  // Feedback Form ------

  return (
    <form
      action={createCorpComment}
      className="flex flex-col  bg-slate-900 my-12 rounded-lg px-10 border border-white shadow-lg w-3/4"
    >
      <label hidden htmlFor="feedback">
        Feedback
      </label>
      <textarea
        className=" input text-white w-full h-full resize-none p-4 bg-slate-900 my-6"
        placeholder="Enter Feedback for CorpComment. include a # in front of companyName"
        id="feedback"
        name="feedback"
        spellCheck="false"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />
      <div className="flex justify-between mb-4">
        <p className="text-accent font-bold">{wordcount}</p>
        <button className="btn btn-secondary">Submit</button>
      </div>
    </form>
  );
}
