import { getAllNotes } from "@/actions";
import DeleteButton from "@/app/prisma-example/_components/delete-button";
import UpdateButton from "@/app/prisma-example/_components/update-button";
import React from "react";

export default async function TaskList() {
  const allNotes = await getAllNotes();
  return (
    <>
      {allNotes.map((note) => {
        return (
          <div className="flex gap-10" key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <DeleteButton id={note.id} />
            <UpdateButton
              id={note.id}
              title={note.title}
              content={note.content}
            />
          </div>
        );
      })}
    </>
  );
}
