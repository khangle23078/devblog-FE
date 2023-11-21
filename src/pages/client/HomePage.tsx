import { Skeleton, message } from "antd";
import { useGetPostsQuery } from "../../app/services/post"
import PostCard from "../../components/PostCard";
import { Post } from "../../interfaces/post";

const HomePage: React.FC = () => {
  const { data: posts, isError } = useGetPostsQuery();


  if (isError) {
    message.error('Có lỗi xảy ra khi hiển thị dữ liệu')
  }

  return (
    <div className="max-w-[1140px] mx-auto mt-[30px]">
      <h3 className="py-4">Danh sách các bài viết</h3>
      <div className="grid gap-8 grid-cols md:grid-cols-2 lg:grid-cols-3">
        {posts?.data ? posts.data.map((post: Post) => {
          return <PostCard post={post} key={post._id} />
        })
          : <Skeleton avatar paragraph={{ rows: 3 }} />
        }
      </div>

    </div>
  )
}

export default HomePage