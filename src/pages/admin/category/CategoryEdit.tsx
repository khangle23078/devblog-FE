import { Button, Card, Form, Input, message } from "antd";
import { useEditCategoryMutation, useGetCategoryQuery } from "../../../app/services/category";
import { useNavigate, useParams } from "react-router-dom";
import { Category } from "../../../interfaces/category";

const CategoryEdit = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const { data: response } = useGetCategoryQuery(id);
  const [editCategory] = useEditCategoryMutation();
  const navigate = useNavigate();

  console.log(id);
  if (response) {
    const category = response.data;
    form.setFieldsValue({ name: category.name });
  }

  const onSubmit = async (data: Partial<Category>) => {
    if (id) {
      await editCategory({ id, data });
      message.success("Sửa danh mục thành công!");
      navigate("/admin/category");
    }
  };

  return (
    <Card>
      <Form layout="vertical" form={form} onFinish={onSubmit}>
        <Form.Item
          name="name"
          label="Tên Danh mục"
          rules={[{ required: true, message: "Vui lòng nhập tên danh mục" }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sửa danh mục
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CategoryEdit;
