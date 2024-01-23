import FeedbackForm from "./header/feedback-form";
import Logo from "./header/logo";
import PageHeading from "./header/page-heading";
import Pattern from "./header/pattern";

export default function Header() {
  return (
    <>
      <header className="flex flex-col justify-center items-center">
        <Pattern />
        <div className="flex flex-col w-full justify-center items-center -mt-8">
          <Logo />
          <PageHeading />
          <FeedbackForm />
        </div>
      </header>
    </>
  );
}
