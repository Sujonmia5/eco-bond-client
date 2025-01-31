"use client";
import { useAppSelector } from "@/redux/hook";
import React from "react";
import PostCard from "./postCard";
import PostForm from "../form/formPost";

const Post = () => {
  const posts = useAppSelector((state) => state.posts.posts);
  return (
    <div>
      <div>
        <PostForm />
      </div>
      <div></div>
      {posts.map((post) => (
        <PostCard post={post} key={post._id} />
      ))}
    </div>
  );
};

export default Post;
