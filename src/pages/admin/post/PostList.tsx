import { Button, Card, Image, Popconfirm, Space, Table, Tag, Typography, message } from "antd";
import { useDeletePostMutation, useGetPostsQuery } from "../../../app/services/post";
import { Post } from "../../../interfaces/post";
import { NavLink } from "react-router-dom";

const { Title } = Typography;


const PostList = () => {
  const { data: response } = useGetPostsQuery();
  const [deletePost, { isLoading, isSuccess, isError }] = useDeletePostMutation()
  const handleDeletePost = async (id: string) => {
    await deletePost(id)
    if (isLoading) {
      message.loading('Vui lòng chờ')
    }
    if (isSuccess) {
      message.success('Xóa bài viết thành công')
    }
    if (isError) {
      message.error('Có lỗi xảy ra khi xóa bài viết')
    }
  }

  const posts = response?.data.map((post: Post, index: number) => {
    return {
      id: index + 1,
      _id: post._id,
      title: post.title,
      thumbnail: post.thumbnail?.url,
      category: post.category?.name,
      action: post._id
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
      render: (id: string) => {
        return <>
          <Space>
            <Button type="dashed">
              <NavLink to={`/post/edit/${id}`}>Sửa</NavLink>
            </Button>
            <Popconfirm
              title="Xóa bài viết"
              description="Bạn có chắc muốn xóa không?"
              onConfirm={() => handleDeletePost(id)}
              okText="Xóa"
              cancelText="Không">
              <Button danger type="primary">
                Xóa
              </Button>
            </Popconfirm>
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
