"use client";
import { useAppSelector } from "@/redux/hook";
import React from "react";
import PostCard from "./postCard";

const Post = () => {
  const posts = useAppSelector((state) => state.posts.posts);
  return (
    <div>
      {posts.map((post) => (
        <PostCard post={post} key={post._id} />
      ))}
    </div>
  );
};

export default Post;
