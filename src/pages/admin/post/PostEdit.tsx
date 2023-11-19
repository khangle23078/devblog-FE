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
import ReactQuill from "react-quill";
import { useNavigate, useParams } from "react-router-dom";
import { useEditPostMutation, useGetPostQuery } from "../../../app/services/post";
import { useAppSelector } from "../../../app/store";
import { editor } from "../../../config/editor";
import { Post } from "../../../interfaces/post";
import { useForm } from "antd/es/form/Form";
import { useGetCategoriesQuery } from "../../../app/services/category";
import { Category } from "../../../interfaces/category";

const { Title } = Typography;

const PostEdit = () => {
  const { id } = useParams()
  const { token } = useAppSelector((state) => state.auth)
  const { data: response } = useGetPostQuery(id);
  const { data: categories } = useGetCategoriesQuery();
  const [editPost, { isLoading }] = useEditPostMutation()
  const [form] = useForm()
  const navigate = useNavigate()
  const category = categories?.data.map((category: Category) => {
    return {
      value: category._id,
      label: category.name
    }
  })

  if (response) {
    const post = response.data;
    form.setFieldsValue({
      title: post.title,
      content: post.content,
      category: post.category,
      thumbnail: post.thumbnail
    })
  }

  const handlePostEdit = async (data: Partial<Post>) => {
    console.log(id);
    if (id) {
      await editPost({ id, data })
      message.success('Sửa bài viết thành công')
      navigate("/admin/post")
    }
  };

  return (
    <Card>
      <Title level={4}>Thêm mới bài viết</Title>
      <Form name="postAdd" onFinish={handlePostEdit} form={form} layout="vertical">
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
        <Form.Item
          label="Thể loại"
          name="category"
          rules={[{ required: true, message: "Vuil lòng chọn thể loại" }]}>
          <Select options={category} />
        </Form.Item>
        <Form.Item
          label="Hình ảnh"
          name="thumbnail"
          getValueFromEvent={(event) => {
            const image = event?.fileList[0]?.response?.file;
            return image?.url;
          }}>
          <Upload
            action={"https://new-esport-be.onrender.com/api/file/upload"}
            name="image"
            headers={{
              authorization: `Bearer ${token}`,
            }}
          >
            <Button icon={<UploadOutlined />}>Chọn ảnh để tải lên</Button>
          </Upload>
        </Form.Item>
        {form.getFieldValue('thumbnail') ? (
          <img
            src={form.getFieldValue('thumbnail') ? form.getFieldValue('thumbnail') : ""}
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

export default PostEdit;
