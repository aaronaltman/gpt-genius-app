const copyRight = "Big Boss Enterprises";

export default function Footer() {
  return (
    <footer className="hidden lg:flex justify-center items-center h-16 -mr-28 mt-[50%]">
      {" "}
      {/* Ensure footer has height and margin */}
      <div className="-rotate-90">
        <p className="text-zinc-300 text-sm whitespace-nowrap">
          {" "}
          {/* Prevent text wrapping */}
          &copy; {copyRight}. 2024 and beyond...
        </p>
      </div>
    </footer>
  );
}
