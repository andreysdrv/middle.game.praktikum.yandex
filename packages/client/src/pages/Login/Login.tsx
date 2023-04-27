import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import type { FC } from 'react';
import { Form, Input, Button, Typography } from 'antd';
import styles from './login.module.css';



const Login = () => {
    const [form] = Form.useForm();

    useEffect(() => {
        console.log('component did mount');
        return () => {
            console.log('component will unmount')
        }
    }, []);

    return (
            <main className={styles.main}>
                <Form
                    form={form}
                    name='login'
                    size='large'
                    className={styles.form}
                    onFinish={
                        () => {
                            console.log(form.getFieldsValue())
                        }
                    }
                >
                    <Typography.Title
                        className={styles.title}
                        level={2}
                    >
                        Войти
                    </Typography.Title>

                    <Form.Item
                        name="login"
                        validateFirst={true}
                        rules={[
                            { 
                                required: true, 
                                message: 'Введите логин' 
                            },
                            { 
                                whitespace: true,
                                message: 'Поле не может быть пустым'
                            },
                            { 
                                min: 3,
                                message: 'Введите минимум 3 символа'
                            },
                            { 
                                max: 16,
                                message: 'Введите не более 16 символов'
                            },
                            ({getFieldValue}) => ({
                                validator(_, value) {
                                   return /^(?![\W_|-]{1})(?!.*_-)(?!.*-_)(?!.*--)(?!.*__).[\w-]*(?<!.-|_)$/gi.test(value) ? 
                                    Promise.resolve()
                                    : 
                                    Promise.reject('Непрвильный формат логина')
                                }
                            })
                        ]}
                        hasFeedback
                    >
                        <Input 
                            placeholder="Логин"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        validateFirst={true}
                        rules={[
                            {
                                required: true, 
                                message: 'Введите пароль'
                            },
                            { 
                                whitespace: true,
                                message: 'Поле не может быть пустым'
                            },
                            { 
                                min: 8,
                                message: 'Введите минимум 8 символов'
                            },
                            { 
                                max: 40,
                                message: 'Введите не более 40 символов'
                            },
                            ({getFieldValue}) => ({
                                validator(_, value) {
                                   return /^(?=.*?[0-9])(?=.*?[A-Z]).*$/.test(value) ? 
                                    Promise.resolve()
                                    : 
                                    Promise.reject('Непрвильный формат пароля')
                                }
                            })
                        ]}
                        hasFeedback
                    >
                        <Input.Password
                            type="password"
                            placeholder="Пароль"
                        />
                    </Form.Item>

                    <Form.Item shouldUpdate>
                        {() => (
                            <>
                            <Button
                                className={styles.button}
                                block
                                type="primary"
                                htmlType="submit"
                                disabled={
                                    !form.isFieldsTouched(true) ||
                                    form.getFieldsError().filter(({ errors }) => errors.length)
                                    .length > 0
                                }
                            >
                            Войти
                            </Button>
                            или <a href="">зарегистрироваться</a>
                            </>
                        )}
                    </Form.Item>
                </Form>
            </main>

    );
}

export default Login;