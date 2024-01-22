import { updateNote } from "@/actions";

export default function EditForm({ title, content, id }: any) {
  return (
    <form action={updateNote}>
      <input type="hidden" name="id" value={id} />
      <input
        type="text"
        name="title"
        defaultValue={title}
        className="input input-bordered"
      />
      <textarea
        name="content"
        defaultValue={content}
        className="textarea textarea-bordered h-24"
      />
      <button className="btn btn-primary">update</button>
    </form>
  );
}
