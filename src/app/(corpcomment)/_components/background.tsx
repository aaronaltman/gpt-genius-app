export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center bg-primary min-h-screen">
      {children}
    </div>
  );
}
