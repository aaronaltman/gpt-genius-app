export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-primary min-h-screen">
      {children}
    </div>
  );
}
