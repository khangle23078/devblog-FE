import { message } from "antd";
import { useGetPostsQuery } from "../../app/services/post"
import PostCard from "../../components/PostCard";
import { Post } from "../../interfaces/post";
import PostSekeleton from "../../components/PostSekeleton";
import Carousel from "../../components/Carousel";

const HomePage: React.FC = () => {
  const { data: posts, isError } = useGetPostsQuery();

  if (isError) {
    message.error('Có lỗi xảy ra khi hiển thị dữ liệu')
  }

  return (
    <div className="max-w-[1216px] mx-auto my-4">
      <Carousel data={posts} />
      <h2 className="py-4">Danh sách các bài viết</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts?.data ? posts.data.map((post: Post) => {
          return <PostCard post={post} key={post._id} />
        })
          : <PostSekeleton />
        }
      </div>

    </div>
  )
}

export default HomePage