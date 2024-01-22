import { getNoteById } from "@/actions";

export default function UpdateButton({ id }: any) {
  return (
    <form action={getNoteById}>
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-primary">update</button>
    </form>
  );
}
