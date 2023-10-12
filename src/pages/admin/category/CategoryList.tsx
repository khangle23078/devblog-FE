import React from "react";
import {Button, Card, Space, Table, Typography} from "antd";
import {useGetCategoriesQuery} from "../../../app/services/category";
import {Category} from "../../../interfaces/category";

const {Column} = Table;
const {Title} = Typography;

const CategoryList: React.FC = () => {
  const {isLoading, data: categories} = useGetCategoriesQuery();

  const dataSource = categories?.data.map(
    (category: Category, index: number) => {
      return {
        index: index + 1,
        _id: category._id,
        name: category.name,
      };
    }
  );

  console.log(dataSource);

  return (
    <Card>
      <Title level={4}>Danh sách danh mục</Title>
      <Button
        type="primary"
        size="middle"
        href="/admin/category/add"
        className="my-3">
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
              <Button href={`/admin/category/${category._id}`}>Sửa</Button>
              <Button
                type="primary"
                danger
                href={`/admin/category/${category._id}`}>
                Xóa
              </Button>
            </Space>
          )}
        />
      </Table>
    </Card>
  );
};

export default CategoryList;
