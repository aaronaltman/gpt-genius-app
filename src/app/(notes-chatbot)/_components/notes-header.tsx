import { ChatBubbleIcon, Pencil1Icon } from "@radix-ui/react-icons";

export default function NotesHeader() {
  return (
    <header className="mb-14">
      <nav>
        <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
          <li>
            <a>
              <Pencil1Icon className="h-5 w-5" />
              NOTES
              <span className="badge badge-sm">99+</span>
            </a>
          </li>
          <li>
            <a>
              <ChatBubbleIcon className="h-5 w-5" />
              CHAT
              <span className="badge badge-sm badge-warning">AI Chat Bot</span>
            </a>
          </li>
          <li>
            <a>
              Account
              <span className="badge badge-xs badge-info"></span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
