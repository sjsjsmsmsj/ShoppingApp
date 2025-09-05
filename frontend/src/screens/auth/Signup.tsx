
import { Link } from 'react-router-dom'
import { Card, Checkbox, Form, Input, Space, Typography } from 'antd';
import { useState } from 'react';
import SocialLogin from './components/SocialLogin.tsx';


const { Title, Paragraph, Text } = Typography;

const Signup = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [form] = Form.useForm();

    const handleLogin = (values: { email: string, password: string }) => {
        console.log(values)
    }


    return (
        <>
            <Card style={{ width: "50%" }}>
                <Title level={2}>Sign up to your account</Title>
                <Paragraph type={"secondary"}>
                    Welcome back! Please enter your details.
                </Paragraph>

                <Form layout="vertical" form={form} disabled={isLoading} onFinish={handleLogin}>
                    <Form.Item
                        name={"name"}
                        label="Name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ]}
                    >
                        <Input allowClear />
                    </Form.Item>
                </Form>


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
                        <Input type="email" maxLenght={100} allowClear />
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
                        <Input.Password type="password" maxLenght={100} />
                    </Form.Item>
                </Form>

                <div className="mt-4 mb-3">
                    <button type={"primary"} className="btn btn-primary" style={{ width: "100%", height: "30px" }} onClick={() => form.submit()}>Submit</button>
                </div>

                <SocialLogin />

                <div className="mt-4 text-center">
                    <Space>
                        <Text>Already have an account?</Text>
                        <Link to={"/"}>Login</Link>
                    </Space>
                </div>
            </Card>
        </>

    )
}

export default Signup