"use client";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { votePost, addComment } from "../store/postSlice";
import { FaRegThumbsUp, FaComment } from "react-icons/fa";
import { TPostCard } from "@/interface/PropsTypes";

const PostCard = ({ post }: TPostCard) => {
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentText, setCommentText] = useState("");
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

  console.log(post);
  return (
    <div className="bg-white h-96  shadow p-4 rounded-md mb-4">
      {/* Post Content */}
      {post.imageUrl ? (
        <img src={post.image} alt="Post" className="w-full rounded-md" />
      ) : (
        <p className="text-gray-800">{post.content}</p>
      )}

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
            Post
          </button>
        </div>
      )}

      {/* Comments List */}
      {post?.comments?.length > 0 && (
        <div className="mt-3 border-t pt-2">
          {post.comments.map((comment, index) => (
            <p key={index} className="text-gray-700">
              {comment}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostCard;
