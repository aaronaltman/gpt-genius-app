import Background from "../_components/background";
import Container from "../_components/container";
import Footer from "../_components/footer";
import HashtagList from "../_components/hashtag-list";
import FeedbackList from "../_components/list-items";

export default function Page() {
  return (
    <>
      <Background>
        <div className="flex justify-center items-center flex-wrap lg:-ml-28">
          <div className="flex flex-wrap mx-auto p-4">
            <Footer />
            <Container />
            <HashtagList />
          </div>
        </div>
      </Background>
    </>
  );
}
