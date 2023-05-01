import {  Col, Divider, Row, Form, Modal, Input, Button, Avatar, Upload, message  } from "antd";
import styles from './profile.module.css';
import { useState } from "react";
import {userData, userStatData} from "./const"


export const Profile = () => {
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
    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };
    const tailLayout = {
      wrapperCol: {
        offset: 8,
        span: 16,
      },
    };
    const uploadProps = {
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info: unknown) {
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
    
  return ( <main className={styles.main}>
          <div className={styles.block}>
            <>
              <Avatar size={128} src={userData.avatar} />
              <Divider orientation="left"></Divider>
              <Row justify="space-around">
                <Col span={4}>Почта</Col>
                <Col span={4}>{userData.email}</Col>
              </Row>
              <Divider orientation="left"></Divider>
              <Row justify="space-around">
                <Col span={4}>Логин</Col>
                <Col span={4}>{userData.login}</Col>
              </Row>
              <Divider orientation="left"></Divider>
              <Row justify="space-around">
                <Col span={4}>Никнейм</Col>
                <Col span={4}>{userData.display_name}</Col>
              </Row>
              <Divider orientation="left"></Divider>
              <Row justify="space-around">
                <Col span={4}>Имя</Col>
                <Col span={4}>{userData.first_name}</Col>
              </Row>
              <Divider orientation="left"></Divider>
              <Row justify="space-around">
                <Col span={4}>Телефон</Col>
                <Col span={4}>{userData.phone}</Col>
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
            </>
          </div>
          <div className={styles.block}>
            <>
              <span className={styles.label1}>Статистика</span>
              <Divider orientation="left"></Divider>
              <Row justify="space-around">
                <Col span={10}>Всего очков</Col>
                <Col span={4}>{userStatData.totalScore}</Col>
              </Row>
              <Divider orientation="left"></Divider>
              <Row justify="space-around">
                <Col span={10}>Лучшая игра</Col>
                <Col span={4}>{userStatData.bestGame}</Col>
              </Row>
              <Divider orientation="left"></Divider>
              <Row justify="space-around">
                <Col span={10}>Побед</Col>
                <Col span={4}>{userStatData.winnerCount}</Col>
              </Row>
              <Divider orientation="left"></Divider>
              <Row justify="space-around">
                <Col span={10}>Поражений</Col>
                <Col span={4}>{userStatData.defeatCount}</Col>
              </Row>
              <Divider orientation="left"></Divider>
              <Row justify="space-around">
                <Col span={10}>Винрейт</Col>
                <Col span={4}>{userStatData.winRate}</Col>
              </Row>
            </>
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
              {...layout}
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
          <Input defaultValue={userData.email} />
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
          <Input defaultValue={userData.login} />
          </Form.Item>
          <Form.Item
              name="display_name"
              label="Никнейм"
              rules={[
                {
                  required: true,
                },
              ]}>
              <Input  defaultValue={userData.display_name} />
            </Form.Item>
            <Form.Item
              name="first_name"
              label="Имя"
              rules={[
                {
                  required: true,
                },
              ]}>
              <Input  defaultValue={userData.first_name} />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Телефон"
              rules={[
                {
                  required: true,
                },
              ]}>
              <Input  defaultValue={userData.phone} />
            </Form.Item>
            <Form.Item {...tailLayout}>
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
              {...layout}
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
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Сохранить
                </Button>
            </Form.Item>
          </Form>
          </Modal>
    </main>    
  )  

};



