import {Button, Card, Form, Input} from "antd";
import {useGetCategoryQuery} from "../../../app/services/category";
import {useParams} from "react-router-dom";
import {Category} from "../../../interfaces/category";

const CategoryEdit = () => {
  const {id} = useParams();
  const {data: response} = useGetCategoryQuery(id);
  const [form] = Form.useForm();

  if (response) {
    const category = response.data;
    console.log(category);

    form.setFieldsValue({name: category.name});
  }

  const onSubmit = (values: Omit<Category, "id">) => {
    console.log(values);
  };

  return (
    <Card>
      <Form layout="vertical" form={form} onFinish={onSubmit}>
        <Form.Item
          name="name"
          label="Tên Danh mục"
          rules={[{required: true, message: "Vui lòng nhập tên danh mục"}]}>
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
