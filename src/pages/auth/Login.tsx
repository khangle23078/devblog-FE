import React from "react";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Card, Form, Input} from "antd";
import {useLoginMutation} from "../../app/services/auth";
import toast from "react-hot-toast/headless";
import {useDispatch} from "react-redux";
import {setCredentials} from "../../features/authSlice";
import {useNavigate} from "react-router-dom";

interface FormTypes {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const distpatch = useDispatch();
  const [login] = useLoginMutation();

  const onFinish = async (values: FormTypes) => {
    try {
      const res = await login(values);
      toast.success("Đăng nhập thành công");
      distpatch(setCredentials(res));
      navigate("/admin/category");
    } catch (error: unknown) {
      toast.error(error as string);
    }
  };

  return (
    <div style={{backgroundColor: "#0093E9", backgroundImage: ""}}>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-cyan-400 to blue-500">
        <Card style={{minWidth: "500px"}}>
          <h2 className="text-center py-4">Đăng nhập</h2>
          <Form name="normal_login" className="login-form" onFinish={onFinish}>
            <Form.Item
              name="email"
              rules={[{required: true, message: "Vui lòng nhập email"}]}>
              <Input
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{required: true, message: "Vui lòng nhập mật khẩu"}]}>
              <Input
                size="large"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Mật khẩu"
              />
            </Form.Item>

            <Form.Item>
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                className="login-form-button block w-full">
                Đăng nhập
              </Button>
              Or
              <a href="" className="">
                Đăng ký
              </a>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
