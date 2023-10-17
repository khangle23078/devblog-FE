import {Button, Card, Form, Input} from "antd";
import {useCreateCategoryMutation} from "../../../app/services/category";
import toast from "react-hot-toast";
import {Category} from "../../../interfaces/category";
import {useNavigate} from "react-router-dom";

const CategoryAdd = () => {
  const navigate = useNavigate();
  const [addCategory, {isSuccess}] = useCreateCategoryMutation();

  const onSubmit = async (values: Omit<Category, "id">) => {
    try {
      await addCategory(values);
      if (isSuccess) {
        toast.success("Thêm mới thành công");
        navigate("/admin/category");
      }
    } catch (error: unknown) {
      toast.error(error as string);
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
