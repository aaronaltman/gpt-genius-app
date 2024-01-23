export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row  justify-center bg-primary min-h-screen rounded-sm">
      {children}
    </div>
  );
}
