import Post from "@/components/post/post";
import RightSideContent from "@/components/sideContent/rightSideContent";
import SideContent from "@/components/sideContent/sideContent";
import Locomotive from "@/lib/LocomotiveProvider";
import React from "react";

const NewsFeed = () => {
  return (
    <div className="grid grid-cols-12 gap-x-3 relative">
      {/* left side box */}
      <div className=" hidden md:flex col-span-3 bg-white h-fit sticky top-16 border-2 border-gray-300 rounded-md shadow-2xl">
        <SideContent />
      </div>
      {/* center box */}
      <div className="col-span-full md:col-span-6 px-4  h-full">
        <Locomotive>
          <Post />
        </Locomotive>
      </div>
      {/* right side box */}
      <div className="hidden md:flex col-span-3 h-fit sticky top-16  border-2 border-gray-300 rounded-md shadow-2xl">
        <div className="pt-10  p-4">
          <RightSideContent />
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
