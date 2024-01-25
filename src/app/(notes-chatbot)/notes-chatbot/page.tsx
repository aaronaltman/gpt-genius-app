import React from "react";
import NotesHeader from "../_components/notes-header";
import NotesGrid from "../_components/notes-grid";

export default async function Page() {
  return (
    <div className="container mx-auto">
      <NotesGrid />
      <NotesHeader />
    </div>
  );
}
