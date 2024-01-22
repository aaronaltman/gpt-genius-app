"use client";

import Navbar from "@/components/navbar";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  return (
    <div className="bg-primary min-h-screen">
      <div className="max-w-6xl mx-auto bg-white min-h-screen">
        <section className="flex flex-col justify-center items-center">
          <Navbar />
          <div className="p-10 text-3xl">{count}</div>
          <main className="space-x-6">
            <button
              onClick={(e) => {
                e.preventDefault();
                increaseCount();
              }}
              className="btn btn-primary"
            >
              Plus +
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                decreaseCount();
              }}
              className="btn btn-secondary"
            >
              Minus -
            </button>
          </main>
        </section>
      </div>
    </div>
  );
}
