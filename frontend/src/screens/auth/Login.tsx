import { Link } from 'react-router-dom'
import { Card, Checkbox, Form, Input, Space, Typography } from 'antd';
import { useState } from 'react';
import SocialLogin from './components/SocialLogin.tsx';


const { Title, Paragraph, Text } = Typography;


const Login = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isRemember, setIsRemember] = useState(false)
    const [form] = Form.useForm();

    const handleLogin = (values: { email: string, password: string }) => {
        console.log(values)
    }


    return (
        <>
            <Card style={{ width: "50%" }}>


                <Title level={2}>Log in to your account</Title>
                <Paragraph type={"secondary"}>
                    Welcome back! Please enter your details.
                </Paragraph>

                <Form layout="vertical" form={form} disabled={isLoading} onFinish={handleLogin}>
                    <Form.Item
                        name={"email"}
                        label="Email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input type="email" placeholder="Enter your email" maxLenght={100} allowClear />
                    </Form.Item>
                </Form>



                <Form layout="vertical" form={form} disabled={isLoading} onFinish={handleLogin}>
                    <Form.Item
                        name={"password"}
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder="Enter your password" type="password" maxLength={100} />
                    </Form.Item>
                </Form>
                <div className="row">
                    <div className="col">
                        <Checkbox value={isRemember} onChange={() => setIsRemember(!isRemember)}>Remember for 30 days</Checkbox>
                    </div>
                    <div className="col text-right">
                        <Link to={"/"}>Forgot Password?</Link>
                    </div>
                </div>

                <div className="mt-4 mb-3">
                    <button type={"primary"} className="btn btn-primary" style={{ width: "100%", height: "30px" }} onClick={() => form.submit()}>Submit</button>
                </div>

                <SocialLogin />

                <div className="mt-4 text-center">
                    <Space>
                        <Text type={"secondary"}>Don't have an account?</Text>
                        <Link to={"/sign-up"}>Sign up</Link>
                    </Space>
                </div>
            </Card>
        </>

    )
}

export default Login