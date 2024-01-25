export async function getNotes() {
  const notes = await fetch("http://127.0.0.1:8000/api/todo/todos/?format=json")
    .then((res) => res.json())
    .then((data) => data);
  return notes;
}
