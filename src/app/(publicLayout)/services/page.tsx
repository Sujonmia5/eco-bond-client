import { Row } from "antd";
import BreadcrumbHero from "@/components/breadcrumb/breadcrumb";
import ServiceCard from "@/components/servicesCard/serviceCard";
import Title from "@/components/ui/title";

const Service = () => {
  const blogPosts = [
    {
      _id: 1,
      imageSrc:
        "https://img.freepik.com/premium-photo/black-beauty-bird-paradise-dark-background_636537-20712.jpg", // Replace with your image paths
      date: "April 21, 2020",
      category: "Agriculture, Tips",
      title: "Choosing Plants for Water Conservation",
      excerpt: "A short excerpt from the blog post...",
      link: "/blog/choosing-plants", // Replace with your actual links
    },
    {
      _id: 2,
      imageSrc:
        "https://img.freepik.com/premium-photo/black-beauty-bird-paradise-dark-background_636537-20712.jpg", // Replace with your image paths
      date: "April 21, 2020",
      category: "Agriculture, Tips",
      title: "Choosing Plants for Water Conservation",
      excerpt: "A short excerpt from the blog post...",
      link: "/blog/choosing-plants", // Replace with your actual links
    },
    {
      _id: 3,
      imageSrc:
        "https://img.freepik.com/premium-photo/black-beauty-bird-paradise-dark-background_636537-20712.jpg", // Replace with your image paths
      date: "April 21, 2020",
      category: "Agriculture, Tips",
      title: "Choosing Plants for Water Conservation",
      excerpt: "A short excerpt from the blog post...",
      link: "/blog/choosing-plants", // Replace with your actual links
    },
  ];
  return (
    <div>
      <BreadcrumbHero />
      <section className="py-12 max-w-7xl mx-auto">
        <div className="container mx-auto">
          <Title
            position="center"
            title="Our Providing Services"
            subtitle="What We Do"
          />

          <Row gutter={[16, 16]}>
            {" "}
            {/* Use Ant Design Row for grid layout */}
            {blogPosts.map((blog, index) => (
              <ServiceCard blog={blog} key={index} />
            ))}
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Service;
