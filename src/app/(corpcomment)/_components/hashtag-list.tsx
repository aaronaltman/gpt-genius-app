import styles from "@/_styles/index.module.css";

export default function HashtagList() {
  return (
    <div>
      <h2 className="text-white py-10 px-4">Filter List Items</h2>
      <ul className="space-y-6 px-4 hashtags">
        <li>
          <button className="btn btn-ghost bg-white/50">#hashtag Item</button>
        </li>
        <li>
          <button className="btn btn-ghost bg-white/50">#Nike</button>
        </li>
        <li>
          <button className="btn btn-ghost bg-white/50">#ADIDAS</button>
        </li>
      </ul>
    </div>
  );
}
