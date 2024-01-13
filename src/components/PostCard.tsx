import React from "react";
import { Post } from "../interfaces/post";
import { Link } from "react-router-dom";
import Badge from "./Badge";

type PostCardProps = {
  post: Post;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="p-4 bg-white border-solid border-secondary/100 
    border-1 rounded-xl max-w-[392px] flex flex-col items-center justify-center
    ">
      <Link to={`/post/${post._id}`}>
        <img
          src={post.thumbnail}
          className="w-[360px] h-[240px] rounded-md object-cover"
          loading="lazy"
          alt={post.thumbnail}
        />
      </Link>
      <div className="w-full">
        <Badge name={post.category.name} color="bg-badge" isPrimary m="my-3" />
        <Link
          to={`/post/${post._id}`}
          className="inline-block mb-3 text-2xl font-semibold no-underline text-secondary/800">
          {post.title}
        </Link>
        <p className="items-stretch truncate">{post.description}</p>
      </div>
    </div>
  );
};

export default PostCard;
