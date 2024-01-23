const copyRight = "Big Boss Enterprises";

export default function Footer() {
  return (
    <footer className="mt-96 hidden md:block">
      <p className=" text-[#a6adb5] rotate-90 mt-90 text-sm">
        &copy;{copyRight}
      </p>
    </footer>
  );
}
