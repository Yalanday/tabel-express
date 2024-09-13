import React from 'react';
import {Button, Form, Input} from 'antd';
import {Wrapper} from "./form-registration-styles";
import {useAppDispatch} from "../../hooks/redux-hooks";
import {setAuthenticated} from "../../redux/authenticated-slice";
import {setScholl} from "../../redux/scholl-slice";

const layout = {
    labelCol: {span: 5},
    wrapperCol: {span: 18},
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} является обязательным',
    types: {
        email: 'Неверно указан email',
    },
};
/* eslint-enable no-template-curly-in-string */

type FormRegistrationTypes = {
    isAuthenticated: boolean;
}

const FormRegistration: React.FC<FormRegistrationTypes> = ({isAuthenticated}) => {

        const dispatch = useAppDispatch();

        const onChangeAuth = () => {
            dispatch(setAuthenticated(!isAuthenticated));
            dispatch(setScholl(false));
        }

        const onFinish = (values: any) => {
            console.log(values);
            onChangeAuth();
        };

        return (<Wrapper>
            <h2>Добро пожаловать в сервис <br/>"Электронный дневник"</h2>
            <Form
                {...layout}
                name="registration-form"
                onFinish={onFinish}
                validateMessages={validateMessages}
            >
                <Form.Item name={['user', 'name']} label="Имя" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name={['user', 'email']} label="Email" rules={[{type: 'email', required: true}]}>
                    <Input placeholder="email@example.com"/>
                </Form.Item>
                <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                    <Button type="primary" htmlType="submit">
                        Регистрация
                    </Button>
                </Form.Item>
            </Form>
        </Wrapper>)

    }
;

export default FormRegistration;
