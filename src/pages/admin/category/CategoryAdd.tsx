import {Button, Card, Form, Input, message} from "antd";
import {useCreateCategoryMutation} from "../../../app/services/category";
import {Category} from "../../../interfaces/category";
import {useNavigate} from "react-router-dom";

const CategoryAdd = () => {
  const navigate = useNavigate();
  const [addCategory, {isSuccess}] = useCreateCategoryMutation();

  const onSubmit = async (values: Omit<Category, "id">) => {
    try {
      await addCategory(values);
      if (isSuccess) {
        message.success("Thêm mới danh mục thành công!");
        navigate("/admin/category");
      }
    } catch (error: unknown) {
      message.error("Có lỗi xảy ra khi thêm mới!");
    }
  };

  return (
    <Card>
      <Form layout="vertical" onFinish={onSubmit} initialValues={{name: ""}}>
        <Form.Item
          name="name"
          label="Tên Danh mục"
          rules={[{required: true, message: "Vui lòng nhập tên danh mục"}]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Thêm mới
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CategoryAdd;
