import React from "react";
import NoteCard from "./note-card";

export default function NotesGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
    </div>
  );
}
