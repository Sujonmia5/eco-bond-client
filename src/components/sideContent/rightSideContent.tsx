import React from "react";

const RightSideContent = () => {
  return (
    <>
      <div className="max-w-full mx-auto p-4  rounded-lg">
        <h1 className="text-xl font-bold mb-4">What&apos;s happening</h1>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Trending in Bangladesh</p>
              <p className="font-bold">Myanmar</p>
              <p className="text-gray-500 text-sm">10.8K posts</p>
            </div>
            <i className="fas fa-ellipsis-h text-gray-500"></i>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Trending in Bangladesh</p>
              <p className="font-bold">DeepSeek</p>
              <p className="text-gray-500 text-sm">276K posts</p>
            </div>
            <i className="fas fa-ellipsis-h text-gray-500"></i>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Trending in Bangladesh</p>
              <p className="font-bold">LOVE HANGOVER OUT NOW</p>
              <p className="text-gray-500 text-sm">202K posts</p>
            </div>
            <i className="fas fa-ellipsis-h text-gray-500"></i>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Trending in Bangladesh</p>
              <p className="font-bold">Arakan Army</p>
              <p className="text-gray-500 text-sm">Arakan Army</p>
            </div>
            <i className="fas fa-ellipsis-h text-gray-500"></i>
          </div>
        </div>
        <p className="text-blue-500 mt-4">Show more</p>
      </div>
    </>
  );
};

export default RightSideContent;
