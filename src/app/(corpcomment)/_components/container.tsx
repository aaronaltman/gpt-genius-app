import React from "react";
import Header from "./header";
import ListItems from "./list-items";

export default function Container() {
  return (
    <div className="flex flex-col items-center text-white w-[80vh] bg-black h-[80vh] space-y-6">
      <Header />
      <ListItems />
    </div>
  );
}
