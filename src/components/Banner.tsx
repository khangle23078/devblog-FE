import React from 'react'
import Badge from './Badge'
import { Post } from '../interfaces/post'

interface BannerProps {
  post: Post
}

const Banner: React.FC<BannerProps> = ({ post }) => {
  return (
    <div className='relative my-2'>
      <img
        src={post.thumbnail}
        className='w-full h-[450px] object-cover rounded-xl'
      />
      <div className='absolute bottom-0 p-[40px]'>
        <Badge name={post.category.name} color='bg-primary' />
        <h2 className='text-4xl max-w-[720px] text-white py-4 font-semibold'>
          {post.title}
        </h2>
        <p className='text-white'>{post.description}</p>
      </div>
    </div>
  )
}

export default Banner