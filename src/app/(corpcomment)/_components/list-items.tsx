import { TriangleUpIcon } from "@radix-ui/react-icons";

export default function FeedbackList() {
  return (
    <div className="bg-slate-900 p-4">
      <ol className="flex">
        <li className="flex flex-col md:flex-row justify-between space-x-6 px-4">
          <button className="p-4 flex flex-col justify-center items-center">
            435
            <TriangleUpIcon className="w-6 h-6 text-center" />
          </button>
          <div className="flex justify-center items-center my-2 px-4 rounded-md bg-white">
            <p className="text-slate-950 text-2xl">B</p>
          </div>
          <div>
            <p className="text-xl">ByteGrad</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
              aspernatur pariatur veniam, amet ratione voluptatibus?
            </p>
          </div>
          <div className="flex justify-center items-center">
            <p>4d</p>
          </div>
        </li>
      </ol>
    </div>
  );
}
