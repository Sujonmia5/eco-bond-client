import AboutHero from "@/components/aboutHero/aboutHero";
import HomeBlog from "@/components/homeBlog/homeBlog";
import HomeServices from "@/components/homeServices/homeServices";
import HomeSlider from "@/components/homeSlider/slider";

const page = () => {
  return (
    <div>
      <HomeSlider />
      <AboutHero />
      <HomeServices />
      <HomeBlog />
    </div>
  );
};

export default page;
