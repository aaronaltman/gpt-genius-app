import Background from "../_components/background";
import Container from "../_components/container";
import Footer from "../_components/footer";
import HashtagList from "../_components/hashtag-list";
import FeedbackList from "../_components/list-items";

export default function Page() {
  return (
    <>
      <Background>
        <div className="flex justify-center items-center ">
          <div className="flex mt-96 -mr-32">
            <Footer />
          </div>
          <div className="flex mx-auto">
            <Container />
            <HashtagList />
          </div>
        </div>
      </Background>
    </>
  );
}
