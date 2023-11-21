import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetPostQuery } from '../../app/services/post'


const PostDetail: React.FC = () => {
  const { id } = useParams()
  const { data: response } = useGetPostQuery(id);
  const post = response?.data;

  return (
    <main className='pt-[30px]'>
      <h3 className='py-4 text-2xl font-semibold'>Chi tiết bài viết</h3>
      <p>{post?.title}</p>
      <p dangerouslySetInnerHTML={{ __html: `${post?.content}` }}></p>
    </main>
  )
}

export default PostDetail