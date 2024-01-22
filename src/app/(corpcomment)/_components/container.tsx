import React from "react";
import Header from "./header";
import ListItems from "./list-items";

export default function Container() {
  return (
    <div className="flex flex-col items-center text-white  bg-black">
      <Header />
      <ListItems />
    </div>
  );
}
