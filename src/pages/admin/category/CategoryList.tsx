import React from "react";
import {Button, Card, Popconfirm, Space, Table, Typography, message} from "antd";
import {useDeleteCategoryMutation, useGetCategoriesQuery} from "../../../app/services/category";
import {Category} from "../../../interfaces/category";

const {Column} = Table;
const {Title} = Typography;

const CategoryList: React.FC = () => {
  const {isLoading, data: categories} = useGetCategoriesQuery();
  const [deleteCategory, {isSuccess}] = useDeleteCategoryMutation();
  const dataSource = categories?.data.map((category: Category, index: number) => {
    return {
      index: index + 1,
      _id: category._id,
      name: category.name,
    };
  });

  const handleDeleteCategory = async (id: string) => {
    await deleteCategory(id);
    if (isSuccess) {
      message.success("Xóa danh mục thành công!");
    }
  };

  console.log(dataSource);

  return (
    <Card>
      <Title level={4}>Danh sách danh mục</Title>
      <Button type="primary" size="middle" href="/admin/category/add" className="my-3">
        Thêm mới
      </Button>
      <Table dataSource={dataSource} loading={isLoading}>
        <Column title="Id" dataIndex="index" key="index" />
        <Column title="Tên Danh mục" dataIndex="name" key="name" />
        <Column
          title="Thao tác"
          key="action"
          render={(category: Category) => (
            <Space size="middle">
              <Button href={`/admin/category/edit/${category._id}`}>Sửa</Button>
              <Popconfirm
                title="Xóa danh mục"
                description="Bạn có chắc muốn xóa không?"
                onConfirm={() => handleDeleteCategory(category._id)}
                okText="Xóa"
                cancelText="Không">
                <Button danger type="primary">
                  Xóa
                </Button>
              </Popconfirm>
            </Space>
          )}
        />
      </Table>
    </Card>
  );
};

export default CategoryList;
