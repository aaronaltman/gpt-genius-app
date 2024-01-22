"use client";

import { db } from "@/db/index";
import { useState } from "react";

export default async function TaskList() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const allTasks = await db.note.findMany();
  if (!allTasks) return <h2>Add a task or something</h2>;
  return (
    <>
      <h2>Tasks</h2>
      <form
        onSubmit={() => {
          db.note.create({
            data:
              title === "" || content === ""
                ? { title: "no title", content: "no content" }
                : {
                    title,
                    content,
                  },
          });
        }}
        className="flex flex-col max-w-lg mx-auto"
      >
        <label htmlFor="title">Title</label>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          name="title"
          id="title"
          type="text"
          placeholder="add a title"
          value={title}
        />
        <label htmlFor="content">Content</label>
        <textarea
          onChange={(e) => {
            setContent(e.target.value);
          }}
          name="content"
          id="content"
          placeholder="add content"
          value={content}
        />
        <button>add</button>
      </form>
      <ul className="flex flex-col">
        {allTasks.map((task) => (
          <li
            className="flex p-4 bg-primary text-white space-x-6"
            key={task.id}
          >
            <h1>{task.title}</h1>
            <button
              onClick={(event) => {
                event.preventDefault();
                db.note.update({
                  where: { id: task.id },
                  data: { title: "updated" },
                });
              }}
            >
              edit
            </button>
            <button
              onClick={() => {
                db.note.delete({ where: { id: task.id } });
              }}
              className="text-white bg-secondary rounded-lg"
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
