import { Skeleton } from 'antd'
import React from 'react'


const PostSekeleton: React.FC = () => {
  return Array(10).fill(0).map((_, index: number) => (
    <div key={index}>
      <Skeleton.Image active />
      <Skeleton paragraph={{ rows: 1 }} active />
    </div>
  ))
}


export default PostSekeleton