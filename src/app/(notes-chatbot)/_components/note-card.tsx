"use client";

import React, { useEffect, useState } from "react";
import { getNotes } from "../_actions/actions";

export default function NoteCard() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      const fetchedNotes = await getNotes();
      console.log(fetchedNotes);
      setNotes(fetchedNotes);
    }

    fetchNotes();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="card w-[300px] bg-base-100 shadow-xl mb-10">
      <div className="card-body">
        {notes.map((note) => (
          <>
            <p key={note.id}>{note.title}</p>
            <p>{note.content}</p>
          </>
        ))}

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
