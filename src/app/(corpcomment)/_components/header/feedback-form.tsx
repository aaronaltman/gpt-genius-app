"use client";

import { useState } from "react";
import { MAX_CHARS } from "../../_lib/constants";
import createCorpComment from "@/app/(corpcomment)/_actions/index";
import { set } from "zod";

export default function FeedbackForm() {
  // Set State and Variables ------
  const [feedback, setFeedback] = useState("");
  const wordcount = MAX_CHARS - feedback.length;

  const handleFormSubmit = (e: any) => {
    const hasScript = /<script>/i.test(feedback);
    e.preventDefault();
    if (
      feedback.length > MAX_CHARS ||
      feedback.length < 1 ||
      !feedback.includes("#")
    ) {
      alert("Feedback must be between 1 and 500 characters and include a #");
      setFeedback("");
    } else if (hasScript) {
      alert("No scripts allowed");
      setFeedback("");
    } else {
      const formData = new FormData(e.currentTarget);
      createCorpComment(formData);
      setFeedback("Form Submitted!");
      setTimeout(() => {
        setFeedback("");
      }, 2500);
    }
  };

  // Feedback Form ------

  return (
    <form
      action={createCorpComment}
      className="flex flex-col  bg-slate-900 my-12 rounded-lg px-10 border border-white shadow-lg w-3/4"
      onSubmit={handleFormSubmit}
    >
      <label hidden htmlFor="feedback">
        Feedback
      </label>
      <textarea
        className="input text-white w-full h-full resize-none p-4 bg-slate-900 my-6"
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
