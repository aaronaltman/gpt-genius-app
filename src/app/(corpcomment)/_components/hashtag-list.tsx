import HashtagListButton from "./hashtag-list-button";

export default function HashtagList() {
  return (
    <div className="flex flex-col flex-wrap">
      <h2 className="text-white pt-10 pb-2 pl-4 font-bold">Filter Companies</h2>
      <ul className="flex lg:flex-col space-y-4 px-4">
        <li>
          <HashtagListButton />
        </li>
      </ul>
    </div>
  );
}
