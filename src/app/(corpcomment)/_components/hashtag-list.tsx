import { HASHTAG_LIST_ITEMS } from "@/app/(corpcomment)/_lib/constants";
export default function HashtagList() {
  return (
    <div>
      <h2 className="text-white pt-10 pb-2 pl-4 font-bold">Filter Companies</h2>
      <ul className="space-y-4 px-4 hashtags">
        {HASHTAG_LIST_ITEMS.map((item) => (
          <li key={item.id}>
            <button className="btn btn-ghost bg-accent">{item.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
