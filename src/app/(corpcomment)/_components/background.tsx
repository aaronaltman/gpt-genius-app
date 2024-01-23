export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row bg-primary min-h-screen justify-center">
      {children}
    </div>
  );
}
