import ShowcaseSlider from "../components/pages/home/Slider";
import HomeFeatures from "../components/pages/home/Features";
import HomeServices from "../components/pages/home/Services";
import HomeLatestPosts from "../components/pages/home/Posts";
import HomeInfo from "../components/pages/home/Info";

const Home = () => {
  return (
    <div>
      <ShowcaseSlider />
      <HomeFeatures />
      <HomeServices />
      <HomeLatestPosts />
      <HomeInfo />
    </div>
  );
};

export default Home;
