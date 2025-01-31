import React from "react";
import { Avatar, Divider } from "antd";

const Profile = () => {
  const profileData = {
    name: "John Doe",
    username: "@johndoe",
    bio: "Software Engineer | Tech Enthusiast",
    profilePhoto: "https://randomuser.me/api/portraits/men/45.jpg",
    posts: [
      {
        id: 1,
        title: "First Post",
        content: "This is my first post on this platform!",
      },
      {
        id: 2,
        title: "Second Post",
        content: "Sharing my thoughts on web development trends.",
      },
      {
        id: 3,
        title: "Third Post",
        content: "Excited to be part of this community!",
      },
    ],
  };
  return (
    <>
      <div className="min-h-screen relative w-full shadow-xl border-2 overflow-hidden">
        <div className=" w-full h-full">
          <div className=" h-72 w-[1280px] bg-gradient-to-r from-blue-400 to-purple-600" />

          <div className="flex  items-center space-x-6 p-8">
            <Avatar
              size={128}
              src={profileData.profilePhoto}
              className="border-4 border-white shadow-lg"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                {profileData.name}
              </h1>
              <p className="text-lg text-gray-600">{profileData.username}</p>
              <p className="text-gray-700 mt-2">{profileData.bio}</p>
              <p className="text-gray-700 mt-2">125 Following</p>
            </div>
          </div>
        </div>
        <Divider className="border-gray-300" />
        <div className="flex items-center justify-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Latest Posts</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
