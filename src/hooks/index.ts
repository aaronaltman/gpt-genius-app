import React, { createContext, useState, ReactNode } from "react";

export const useAppContext = () => {
  const [state, setState] = useState({ name: "John Doe" });

  return { state, setState };
};
