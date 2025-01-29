import { GiDrippingHoney } from "react-icons/gi";
import { ArrowRightOutlined } from "@ant-design/icons";
import Title from "../ui/title";

const HomeServices = () => {
  return (
    <>
      <div className="container max-w-7xl  mx-auto py-12">
        <Title position="center" title="services" subtitle="What We Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            // Service data
            Array.from({ length: 3 }, (_, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div>
                  <GiDrippingHoney className="size-20 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fresh Vegetables</h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna.
                </p>
                <div className="flex justify-end">
                  <button className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md">
                    <ArrowRightOutlined className="size-4 font-bold" />
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default HomeServices;
