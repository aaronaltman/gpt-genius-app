import TaskForm from "@/components/task-form";
import TaskList from "@/components/task-list";

export default async function Page() {
  return (
    <div>
      <h1>Prisma Example</h1>
      <p>Check your console to see the results of the Prisma queries.</p>

      <TaskList />
      <TaskForm />
    </div>
  );
}
