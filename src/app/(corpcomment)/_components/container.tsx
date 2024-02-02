import Header from "./header";
import ListItems from "./list-items";

export default function Container() {
  return (
    <div className="flex flex-col items-center text-white bg-zinc-900 my-10 max-w-2xl rounded-lg min-h-screen">
      <Header />
      <ListItems />
    </div>
  );
}
