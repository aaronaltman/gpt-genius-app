import Link from "next/link";
import EditForm from "../_components/edit-form";

export default async function Page({ params }: any) {
  const note = await prisma?.note.findMany({
    where: { id: params.id, content: params.content, title: params.title },
  });

  return (
    <div>
      <Link href="/prisma-example">back to notes</Link>
      <h1>edit note</h1>
      <EditForm title={params.title} content={params.content} id={params.id} />
    </div>
  );
}
