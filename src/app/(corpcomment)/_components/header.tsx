export default function Header() {
  return (
    <>
      <header className="flex flex-col items-center text-white w-[80vh] bg-black h-[80vh] pt-10 space-y-6">
        <h1 className="text-3xl">Corp Comment</h1>
        <h2 className="text-4xl">Give Feedback Publicly</h2>
        <form>
          <textarea className="border-2 border-black" />
          <button className="bg-accent text-white">Submit</button>
        </form>
      </header>
    </>
  );
}
