import Background from "../_components/background";
import Container from "../_components/container";
import Footer from "../_components/footer";
import HashtagList from "../_components/hashtag-list";

export default function Page() {
  return (
    <>
      <Background>
        <Footer />
        <Container />
        <HashtagList />
      </Background>
    </>
  );
}
