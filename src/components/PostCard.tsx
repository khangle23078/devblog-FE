import React from 'react'
import { Post } from '../interfaces/post'
import { Link } from 'react-router-dom'

type PostCardProps = {
  post: Post
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {

  return (
    <Link to={`/post/${post._id}`} className='text-black no-underline'>
      <img src={post.thumbnail} loading='lazy' alt={post.thumbnail} width={384} height={240} />
      <p className="text-2xl font-semibold">{post.title}</p>
      <p className='truncate'>{post.description}</p>
    </Link>
  )
}

export default PostCard