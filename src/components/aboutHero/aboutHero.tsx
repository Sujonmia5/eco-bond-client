/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Title from "../ui/title";

type TOurSuccess = {
  title: string;
  count: number;
};
const AboutHero = () => {
  const OurSuccess: TOurSuccess[] = [
    {
      title: "Total Products",
      count: 1570,
    },
    {
      title: "Satisfied Clients",
      count: 3462,
    },
    {
      title: "Projects Completed",
      count: 4923,
    },
  ];
  return (
    <>
      <section className="bg-white py-10 px-5 md:px-20">
        <div className="max-w-7xl mx-auto ">
          <div className="text-center md:flex items-center justify-between gap-x-5 w-full md:text-left">
            <div className="flex items-center justify-center gap-x-2">
              <Image
                width={200}
                height={150}
                className="hidden sm:flex w-full object-cover"
                src="https://res.cloudinary.com/dwvt17wew/image/upload/v1738081946/side-3_djk4y2.jpg"
                alt="Hero"
              />
              <div className="flex h-fit flex-col gap-y-5">
                <Image
                  width={200}
                  height={150}
                  src={
                    "https://res.cloudinary.com/dwvt17wew/image/upload/v1738081946/side-3_djk4y2.jpg"
                  }
                  alt={""}
                />
                <div className="size-44 bg-primary rounded-lg flex flex-col justify-center items-center">
                  <h4 className="text-2xl font-bold text-white">25 years</h4>
                  <p className="text-2xl font-bold text-white">Experience</p>
                </div>
              </div>
            </div>
            <div className="sm:w-1/2 my-6">
              <Title
                subtitle="About Us"
                title=" We're Providing The Best Solution"
                position="start"
              />

              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              {/* Checkpoints */}
              <ul className="space-y-3 text-left">
                <li className="flex items-center">
                  <span className="text-green-500 text-xl mr-2">✔</span>
                  <p>There are many variations of passages of Lorem Ipsum</p>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 text-xl mr-2">✔</span>
                  <p>Sed ut perspiciatis unde omnis iste natus error</p>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 text-xl mr-2">✔</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </li>
              </ul>
              {/* Button */}
              <div className="mt-6">
                <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-5 rounded-lg">
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className="mt-20 sm:flex justify-start items-center bg-green-500 text-white   rounded-lg">
            <div className="hidden sm:flex">
              <Image
                width={384}
                height={208}
                className=" w-96 h-52 object-cover object-center"
                src="https://res.cloudinary.com/dwvt17wew/image/upload/v1738082753/about-1-img-1_bymmgv.jpg"
                alt="Hero"
              />
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 py-10 px-5 gap-8 text-center">
              {OurSuccess.map((success, index) => (
                <div key={index}>
                  <h3 className="text-4xl font-bold">{success.count}+</h3>
                  <p className="text-lg mt-2">{success.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
