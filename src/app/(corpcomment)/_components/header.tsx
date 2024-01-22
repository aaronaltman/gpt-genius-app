export default function Header() {
  return (
    <>
      <header className="">
        <h1 className="text-3xl">Corp Comment</h1>
        <h2 className="text-4xl">Give Feedback Publicly</h2>
        <form className="flex flex-col">
          <label htmlFor="companyName">Company Name</label>
          <input
            name="companyName"
            id="companyName"
            className="border-2 border-black text-slate-950"
          />
          <label htmlFor="comment">Comment</label>
          <textarea
            name="comment"
            id="comment"
            className="border-2 border-black"
          />
          <button className="bg-accent text-white">Submit</button>
        </form>
      </header>
    </>
  );
}
