import AboutHero from "@/components/aboutHero/aboutHero";
import BreadcrumbHero from "@/components/breadcrumb/breadcrumb";
import FAQAbout from "@/components/faq/faq";
import HomeServices from "@/components/homeServices/homeServices";

const About = () => {
  return (
    <div>
      <BreadcrumbHero />
      <AboutHero />
      <FAQAbout />
      <HomeServices />
    </div>
  );
};

export default About;
