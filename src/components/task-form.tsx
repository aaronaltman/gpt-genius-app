import createNote from "@/actions";

export default async function TaskForm() {
  return (
    <form action={createNote}>
      <div className="join w-full">
        <label htmlFor="title">title</label>
        <input
          name="title"
          className="input input-bordered join-item"
          type="text"
          placeholder="title"
          spellCheck="false"
        />
        <label htmlFor="content">Content</label>
        <input
          name="content"
          className="input input-bordered join-item"
          type="text"
          placeholder="content"
          spellCheck="false"
        />
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
}
