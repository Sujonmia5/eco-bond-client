import { Card } from "antd";
import Image from "next/image";
import Title from "../ui/title";

const HomeBlog = () => {
  const articles = [
    {
      id: 1,
      title: "Choosing Plants for Water Conservation",
      category: "Agriculture, Tips",
      date: "April 21, 2020",
      image: "https://th.bing.com/th/id/OIG2._JJ7jEND0UMuzHjwBeTh",
      link: "#",
    },
    {
      id: 2,
      title: "Maintaining Your Yard This Year",
      category: "Agriculture, Planting",
      date: "April 19, 2019",
      image: "https://th.bing.com/th/id/OIG2._JJ7jEND0UMuzHjwBeTh",
      link: "#",
    },
    {
      id: 3,
      title: "Tips for Managing Your Irrigation System",
      category: "Agriculture, Tips",
      date: "April 19, 2019",
      image: "https://th.bing.com/th/id/OIG2._JJ7jEND0UMuzHjwBeTh",
      link: "#",
    },
  ];
  return (
    <>
      <div className="py-10 max-w-7xl mx-auto">
        <Title
          position="center"
          title="News & Articles"
          subtitle="What We Do"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              bodyStyle={{ padding: 0 }}
            >
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                />
                <span className="absolute bottom-2 left-2 bg-green-500 text-white text-sm px-2 py-1 rounded">
                  {article.date}
                </span>
              </div>
              <div className="p-4">
                <p className="text-sm text-green-500 mb-1">
                  {article.category}
                </p>
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <a
                  href={article.link}
                  className="text-green-500 text-sm font-medium hover:underline"
                >
                  Read More
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeBlog;
