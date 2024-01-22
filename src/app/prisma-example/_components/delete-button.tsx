import { deleteNoteById } from "@/actions";

export default function DeleteButton({ id }: any) {
  return (
    <form action={deleteNoteById}>
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-error">delete</button>
    </form>
  );
}
