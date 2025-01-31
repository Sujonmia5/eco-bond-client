"use client";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { votePost, addComment } from "../store/postSlice";
import { FaRegThumbsUp, FaComment } from "react-icons/fa";
import { TPostCard } from "@/interface/PropsTypes";
import Image from "next/image";
import { Card, Divider } from "antd";

const PostCard = ({ post }: TPostCard) => {
  const [readMore, setReadMore] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [replyComment, setReplyComment] = useState("");
  //   const dispatch = useDispatch();

  const handleVote = () => {
    // dispatch(votePost(post.id));
  };

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      //   dispatch(addComment({ postId: post.id, comment: commentText }));
      setCommentText("");
      setShowCommentInput(false);
    }
  };
  // console.log(post?.content.slice(0, 200).length);

  return (
    <Card className="bg-white h-fit  shadow  rounded-md mb-4">
      <div>
        <div className="flex space-x-2">
          <div>
            <img
              src="https://tinypng.com/images/social/website.jpg"
              alt=""
              className="object-cover object-center size-10 w-12 h-12 rounded-full dark:bg-gray-500"
            />
          </div>
          <div>
            <h4 className="font-medium">Leroy Jenkins</h4>
          </div>
        </div>
      </div>
      <Divider className=" h-1 my-2 border-gray-500/70" />

      <>
        {post?.imageUrl && (
          <Image
            src={post?.imageUrl}
            alt="Post"
            width={300}
            height={200}
            className="w-full rounded-md"
          />
        )}

        <div className="mt-2">
          {post.content && (
            <p className="text-gray-800 text-justify text-xl">
              {readMore ? post.content : post.content.slice(0, 300)}
              {post.content.length > 300 && (
                <span
                  onClick={() => setReadMore((prev) => !prev)}
                  className="ml-2 text-base font-medium hover:text-green-500 text-blue-500 cursor-pointer"
                >
                  Read {readMore ? "Less" : "More"}...
                </span>
              )}
            </p>
          )}
        </div>
      </>

      {/* Actions */}
      <div className="flex justify-between mt-3 text-gray-600">
        <button onClick={handleVote} className="flex items-center gap-2">
          <FaRegThumbsUp /> {post.totalVote} Likes
        </button>
        <button
          onClick={() => setShowCommentInput(!showCommentInput)}
          className="flex items-center gap-2"
        >
          <FaComment /> Comment
        </button>
      </div>

      {/* Comment Input */}
      {showCommentInput && (
        <div className="mt-3">
          <input
            type="text"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write a comment..."
            className="w-full border p-2 rounded-md"
          />
          <button
            onClick={handleCommentSubmit}
            className="mt-2 bg-blue-500 text-white px-4 py-1 rounded-md"
          >
            Comment
          </button>
        </div>
      )}

      {/* Comments List */}
      {post?.comments?.length > 0 && (
        <div className="mt-3 border-t pt-2">
          {post.comments.map((comment, index) => (
            <div key={index}>
              <div className="flex items-center space-x-2 rounded-full py-2">
                <img
                  src="https://placehold.co/40x40"
                  alt="Profile picture"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-semibold ">Mohammad Saidul Islam</div>
                  <p className="text-gray-700">{comment.comment}</p>
                  <div>
                    <button
                      onClick={() => setShowReplyInput((prev) => !prev)}
                      className="ml-2 text-gray-500"
                    >
                      Reply
                    </button>
                  </div>
                </div>
              </div>
              {showReplyInput && (
                <div className="mt-2">
                  <input
                    type="text"
                    value={replyComment}
                    onChange={(e) => setReplyComment(e.target.value)}
                    placeholder="Write a reply..."
                    className="w-full border p-2 rounded-md"
                  />
                  <button
                    onClick={() => {
                      // dispatch(addComment({ postId: post.id, comment: replyComment }));
                      setReplyComment("");
                      setShowReplyInput(false);
                    }}
                    className="mt-2 bg-blue-500 text-white px-4 py-1 rounded-md"
                  >
                    Reply
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

export default PostCard;
