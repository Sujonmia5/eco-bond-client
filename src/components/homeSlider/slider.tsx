"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "antd";
import Image from "next/image";

const HomeSlider = () => {
  return (
    <div className="relative w-full">
      {/* Main Slider */}
      <div className="h-fit max-h-screen md:-mt-16 overflow-hidden">
        <Slider arrows={false} autoplay={true} autoplaySpeed={3000}>
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="relative w-screen h-fit">
              <Image
                layout="responsive"
                width={19}
                height={9}
                className="object-cover bg-no-repeat object-center"
                src={`https://res.cloudinary.com/dwvt17wew/image/upload/v1738059554/slide-1_j7hauc.jpg`}
                alt={`Image`}
              />
              <div className="absolute top-1/2 -translate-y-1/2 left-5 md:left-20">
                <div className="space-y-4 md:space-y-10">
                  {/* Responsive Subtitle */}
                  <h2 className="!text-green-500 font-bold !m-0 text-base sm:text-lg md:!text-2xl lg:!text-3xl">
                    Discover the Future of <span>Eco-Bond</span>
                  </h2>
                  <div className="space-y-4 md:space-y-8">
                    {/* Responsive Main Title */}
                    <h2 className="!text-white !capitalize font-bold !m-0 text-lg sm:text-2xl md:!text-4xl lg:!text-6xl leading-snug">
                      We are providing <br />
                      authentic tips and <br />
                      eco-friendly{" "}
                      <span className="text-primary">products.</span>
                    </h2>
                    {/* Button */}
                    <Button
                      type="primary"
                      size="large"
                      variant="solid"
                      className="px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg lg:px-8 lg:py-5 lg:text-xl"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeSlider;
