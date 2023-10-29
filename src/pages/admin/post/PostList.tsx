import {Button, Card, Image, Space, Tag, Typography} from "antd";
import {useGetPostsQuery} from "../../../app/services/post";
import {Post} from "../../../interfaces/post";
import {Category} from "../../../interfaces/category";

const {Title} = Typography;

const PostList = () => {
  const {data: response} = useGetPostsQuery();

  const post = response?.data;

  return (
    <Card>
      <Title level={4}>Danh sách bài viết</Title>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Tiêu đề
              </th>
              <th scope="col" className="px-6 py-3">
                Hình ảnh
              </th>
              <th scope="col" className="px-6 py-3">
                Thể loại
              </th>
              <th scope="col" className="px-6 py-3">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody>
            {post?.map((post: Post) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {post._id}
                  </td>
                  <td className="px-6 py-4">{post.title}</td>

                  <td>
                    <Image width={70} height={70} src={post?.thumbnail?.url} />
                  </td>
                  <td>
                    {post?.category.map((category: Category) => {
                      return <Tag>{category.name}</Tag>;
                    })}
                  </td>
                  <td>
                    <Space>
                      <Button type="dashed" href={`/admin/category/${post._id}/edit`}>
                        Sửa
                      </Button>
                      <Button type="primary" danger>
                        Xóa
                      </Button>
                    </Space>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default PostList;
