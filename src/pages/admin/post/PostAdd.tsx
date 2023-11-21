import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Form,
  Input,
  Select,
  Typography,
  Upload,
  message,
} from "antd";
import { useState } from "react";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import { useGetCategoriesQuery } from "../../../app/services/category";
import { useCreatePostMutation } from "../../../app/services/post";
import { editor } from "../../../config/editor";
import { Category } from "../../../interfaces/category";
import { useDeleteFileMutation } from "../../../app/services/upload";
import { useAppSelector } from "../../../app/store";
import { Post } from "../../../interfaces/post";
import TextArea from "antd/es/input/TextArea";

const { Title } = Typography;

const PostAdd = () => {
  const { token } = useAppSelector((state) => state.auth)
  const { data: response } = useGetCategoriesQuery();
  const [createPost, { isLoading, isSuccess, isError }] = useCreatePostMutation();
  const [deleteFile] = useDeleteFileMutation();
  const navigate = useNavigate();

  const [imageUrl, setImageUrl] = useState<{
    url: string;
    public_id: string;
  } | null>(null);

  const categories = response?.data.map((category: Category) => {
    return {
      value: category._id,
      label: category.name,
    };
  });

  const handlePostAdd = async (data: Partial<Post>) => {
    console.log(data);

    await createPost(data);
    if (isSuccess) {
      message.success("Tạo bài viết thành công");
      navigate("/admin/post");
    }

    if (isError) {
      message.error("Có lỗi xảy ra khi thêm mới bài viết");
    }
  };

  const handleDeleteImage = async (image: any) => {
    try {
      await deleteFile(image?.public_id as any);
      console.log(image);

      message.success("Xóa ảnh thành công!");
      setImageUrl(null);
    } catch (email) {
      message.error("có lỗi xảy ra khi xóa ảnh");
    }
  };

  return (
    <Card>
      <Title level={4}>Thêm mới bài viết</Title>
      <Form name="postAdd" onFinish={handlePostAdd} layout="vertical">
        <Form.Item
          label="Tiêu đề"
          name="title"
          rules={[{ required: true, message: "Vuil lòng nhập tiêu đề" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Nội dung" name="content">
          <ReactQuill
            theme="snow"
            modules={editor.modules}
            formats={editor.formats}
          />
        </Form.Item>
        <Form.Item label="Mô tả" name="description">
          <TextArea rows={4} placeholder="Nhập mô tả" />
        </Form.Item>
        <Form.Item
          label="Thể loại"
          name="category"
          rules={[{ required: true, message: "Vuil lòng chọn thể loại" }]}>
          <Select options={categories} />
        </Form.Item>
        <Form.Item
          label="Hình ảnh"
          name="thumbnail"
          getValueFromEvent={(event) => {
            const image = event?.fileList[0]?.response?.file;
            setImageUrl(image);
            console.log(image?.url);

            return image?.url;
          }}>
          <Upload
            action={"https://new-esport-be.onrender.com/api/file/upload"}
            name="image"
            headers={{
              authorization: `Bearer ${token}`,
            }}
            onRemove={() => handleDeleteImage(imageUrl?.public_id)}
          >
            <Button icon={<UploadOutlined />}>Chọn ảnh để tải lên</Button>
          </Upload>
        </Form.Item>
        {imageUrl ? (
          <img
            src={imageUrl ? imageUrl?.url : ""}
            className="object-cover w-full"
          />
        ) : null}
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Thêm mới
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default PostAdd;
