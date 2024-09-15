import React, {useState} from 'react';
import {Button, Modal, Form, Input, Upload} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {PredmetsDataType} from "../../../types/types";

type Props = {
    item: PredmetsDataType | null;
    isModalOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;
}


const ModalApp: React.FC<Props> = ({item, isModalOpen, handleOk, handleCancel}) => {
    const [formPrepod] = Form.useForm();

    const layout = {
        labelCol: {span: 8},
        wrapperCol: {span: 26},
    };

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    const onFinish = (values: any) => {
        console.log(values);
        handleOk();
        formPrepod.resetFields();
    };

    const normFile = (e: any) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    return (
        <>
            <Modal footer={false} title={`Cообщение преподавателю по предмету ${item?.title}`} open={isModalOpen}
                   onOk={handleOk} onCancel={handleCancel}>
                <p>Чтобы написать сообщение преподавателю заполните текствое поле</p>
                <Form
                    form={formPrepod}
                    clearOnDestroy={true}
                    {...layout}
                    name="messages-prepod"
                    onFinish={onFinish}
                    style={{maxWidth: 600}}
                    validateMessages={validateMessages}
                >
                    <Form.Item
                        name={['user', 'introduction']}
                        label=""
                        rules={[{required: true, message: 'Введите текст'}]}
                    >
                        <Input.TextArea/>
                    </Form.Item>
                    <Form.Item
                        name="upload"
                        label=""
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        extra=""
                    >
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button icon={<UploadOutlined />}>Загрузить файл</Button>
                        </Upload>
                    </Form.Item>
                    <p>{item?.curatorName} ответит Вам в ближайшее время. Спасибо</p>

                    <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                        <Button type="primary" htmlType="submit">
                            Отправить
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default ModalApp;
