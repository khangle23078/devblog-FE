import { Button, Card, Image, Space, Table, Tag, Typography } from "antd";
import { useGetPostsQuery } from "../../../app/services/post";
import { Post } from "../../../interfaces/post";
import { NavLink } from "react-router-dom";

const { Title } = Typography;


const PostList = () => {
  const { data: response } = useGetPostsQuery();

  const posts = response?.data.map((post: Post, index: number) => {
    return {
      id: index + 1,
      _id: post._id,
      title: post.title,
      thumbnail: post.thumbnail?.url,
      category: post.category?.name
    }
  });

  console.log(posts);

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'thumbnail',
      key: 'thumbnail',
      render: (thumbnail: string) => {
        return <Image src={thumbnail} width={50} height={50} />
      }
    },
    {
      title: 'Danh mục',
      dataIndex: 'category',
      key: 'category',
      render: (category: string) => {
        return <Tag>{category}</Tag>
      }
    },
    {
      title: 'Thao tác',
      dataIndex: 'action',
      key: 'action',
      render: (post: Post) => {
        return <>
          <Space>
            <Button type="dashed">
              <NavLink to={`/post/edit/${post?._id}`}>Sửa</NavLink>
            </Button>
            <Button type="primary" danger>Xóa</Button>
          </Space>
        </>
      }
    },
  ]


  return (
    <Card>
      <Title level={4}>Danh sách bài viết</Title>
      <Table columns={columns} dataSource={posts} />
    </Card>
  );
};

export default PostList;
