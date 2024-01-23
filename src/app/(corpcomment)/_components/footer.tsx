const copyRight = "Big Boss Enterprises";
const copyReversed = copyRight.split("").reverse().join("");

export default function Footer() {
  return (
    <footer className="flex justify-center items-center">
      <div className="-rotate-90">
        <p className="text-zinc-300 text-sm">
          &copy; Big Boss Enterprises. 2024 and beyond...
        </p>
      </div>
    </footer>
  );
}
