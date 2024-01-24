"use client";

import { useState } from "react";

export default function HashtagListButton({ companyName, companyCount }: any) {
  const [state, setState] = useState({
    companyName: companyName,
    companyCount: companyCount,
  });

  return (
    <button
      onClick={(e) => {
        console.log(e.target);
      }}
      className="btn btn-ghost bg-accent hover:scale-105 hover:bg-white"
    >
      #{companyName} ({companyCount})
    </button>
  );
}
