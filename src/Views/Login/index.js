import './index.scss'
import { Form, Input, Button, Checkbox,message } from 'antd';
import { loginData } from '../../http/api/login';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    let Navigate = useNavigate();
    const onFinish = (values) => {
        console.log('Success:', values);
        loginData('/login', { username: values.username, password: values.password }).then(res => {
            console.log(res)
            if(res.data.token){
                message.success('登录成功');
                sessionStorage.setItem('token', res.data.token)
                Navigate('/home')
            }else{
                message.info('账号或者密码输入错误！请重新输入');
            }
        })
    };
    return (
        <div id="loginBox">Login
            <div id="loginItem">
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}