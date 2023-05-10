import {  Col, Divider, Row, Form, Modal, Input, Button, Avatar, Upload, message, UploadFile  } from "antd";
import styles from './profile.module.css';
import { useState } from "react";
import {USER_DATA, USER_STAT_DATA, TAIL_LAYOUT, LAYOUT} from "./const"
import { UploadChangeParam } from "antd/es/upload";

export const UserDataBlock = () => {
    const [isModalOpenChangeProfile, setIsModalOpenChangeProfile] = useState(false);
    const showModalChangeProfile = () => {
      setIsModalOpenChangeProfile(true);
    };
    const handleCancelChangeProfile = () => {
      setIsModalOpenChangeProfile(false);
    };

    const onFinishChangeProfile = (values: unknown) => {
      console.log(values);
    };
    const [formChangeProfile] = Form.useForm();
    const [isModalOpenChangePassword, setIsModalOpenChangePassword] = useState(false);
    const showModalChangePassword = () => {
      setIsModalOpenChangePassword(true);
    };
    const handleCancelChangePassword = () => {
      setIsModalOpenChangePassword(false);
    };
    const onFinishChangePassword = (values: unknown) => {
      console.log(values);
    };
    const [formChangePassword] = Form.useForm();
    const uploadProps = {
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info: UploadChangeParam<UploadFile<any>>) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };

return (<div className={styles.block}>
    <>
        <Avatar size={128} src={USER_DATA.avatar} />
        <Divider orientation="left"></Divider>
        <Row justify="space-around">
            <Col span={4}>Почта</Col>
            <Col span={4}>{USER_DATA.email}</Col>
        </Row>
        <Divider orientation="left"></Divider>
        <Row justify="space-around">
            <Col span={4}>Логин</Col>
            <Col span={4}>{USER_DATA.login}</Col>
        </Row>
        <Divider orientation="left"></Divider>
        <Row justify="space-around">
            <Col span={4}>Никнейм</Col>
            <Col span={4}>{USER_DATA.display_name}</Col>
        </Row>
        <Divider orientation="left"></Divider>
        <Row justify="space-around">
            <Col span={4}>Имя</Col>
            <Col span={4}>{USER_DATA.first_name}</Col>
        </Row>
        <Divider orientation="left"></Divider>
        <Row justify="space-around">
            <Col span={4}>Телефон</Col>
            <Col span={4}>{USER_DATA.phone}</Col>
        </Row>
    <div className={styles.buttonblock}>
        <Button
        className={styles.button}
        block
        type="primary"
        htmlType="submit"
        onClick={showModalChangeProfile}
        >
        Pедактировать
        </Button>
        <Button
            className={styles.button}
            block
            type="primary"
            htmlType="submit"
            onClick={showModalChangePassword}
            >
            Изменить пароль
        </Button>
    </div>
    
    <Modal title="Изменить данные"
        open={isModalOpenChangeProfile}
        onCancel={handleCancelChangeProfile}
        width={650}
        footer={[
        <Button key="back" onClick={handleCancelChangeProfile}>
            Отмена
        </Button>,
        ]}>
        <Form
            {...LAYOUT}
            form={formChangeProfile}
            name="change-profile"
            onFinish={onFinishChangeProfile}
            style={{
                maxWidth: 600,
            }}
        >
            <Form.Item
                name="email"
                label="Почта"
                // type="password"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input defaultValue={USER_DATA.email} />
            </Form.Item>
            <Form.Item              
                name="login"
                label="Логин"
                rules={[
                    {
                    required: true,
                    },
                ]}
            >
                <Input defaultValue={USER_DATA.login} />
            </Form.Item>
            <Form.Item
                name="display_name"
                label="Никнейм"
                rules={[
                {
                    required: true,
                },
                ]}>
                <Input  defaultValue={USER_DATA.display_name} />
            </Form.Item>
            <Form.Item
                name="first_name"
                label="Имя"
                rules={[
                {
                    required: true,
                },
                ]}>
                <Input  defaultValue={USER_DATA.first_name} />
            </Form.Item>
            <Form.Item
                name="phone"
                label="Телефон"
                rules={[
                {
                    required: true,
                },
                ]}>
                <Input  defaultValue={USER_DATA.phone} />
            </Form.Item>
            <Form.Item {...TAIL_LAYOUT}>
                <Upload {...uploadProps}>
                    <Button >Изменить аватар</Button>
                </Upload>
                <Button type="primary" htmlType="submit">
                    Сохранить
                </Button>
            </Form.Item>
        </Form>
    </Modal>

    <Modal title="Изменить пароль"
        open={isModalOpenChangePassword}
        onCancel={handleCancelChangePassword}
        width={650}
        footer={[
        <Button key="back" onClick={handleCancelChangePassword}>
            Отмена
        </Button>,
        ]}>
    <Form
        {...LAYOUT}
        form={formChangePassword}
        name="change-password"
        onFinish={onFinishChangePassword}
        style={{
            maxWidth: 600,
        }}
    >

        <Form.Item
            name="old-pasword"
            label="Старый пароль"
            // type="password"
            rules={[
            {
                required: true,
            },
            ]}
            >
            <Input />
            </Form.Item>
            <Form.Item
                name="new-pasword"
                label="Новый пароль"
                
                rules={[
                {
                    required: true,
                },
                ]}
            >
            <Input />
        </Form.Item>
        <Form.Item
            name="confirm-new-pasword"
            label="Повторите новый пароль"
            rules={[
                {
                required: true,
                },
            ]}>
            <Input />
            </Form.Item>
            <Form.Item {...TAIL_LAYOUT}>
                <Button type="primary" htmlType="submit">
                    Сохранить
                </Button>
            </Form.Item>
        </Form>
    </Modal>
    </>    
    </div>
    
)};