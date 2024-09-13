import React from 'react';
import {Select, Form, Button} from 'antd';
import {Wrapper} from "./form-select-school-styles";
import {schollValues, classValues} from "../../mocks/scholl-values";
import {useAppDispatch} from "../../hooks/redux-hooks";
import {setScholl} from "../../redux/scholl-slice";
import {setStudent} from "../../redux/student-slice";


const layout = {
    labelCol: {span: 7},
    wrapperCol: {span: 18},
};


const validateMessages = {
    required: 'Поле является обязательным',
};


const onChange = (value: string) => {
    console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
    console.log('search:', value);
};

type FormSelectSchoolProps = {
    scholl: boolean;
}

const FormSelectSchool: React.FC<FormSelectSchoolProps> = ({scholl}) => {
    const dispatch = useAppDispatch();
    const onFinish = (values: any) => {
        console.log(values);
        dispatch(setScholl(!scholl));
        dispatch(setStudent(false));
    };

    return (
        <Wrapper>
            <h2>Выберите школу и класс</h2>
            <Form
                name="scholl-select-form"
                validateMessages={validateMessages}
                {...layout}
                onFinish={onFinish}
            >
                <Form.Item
                    name={['user-school', 'school']}
                    label="Школа:"
                    rules={[{required: true}]}>
                    <Select
                        showSearch
                        placeholder="Выберите школу"
                        optionFilterProp="label"
                        onChange={onChange}
                        onSearch={onSearch}
                        options={schollValues}
                    />
                </Form.Item>
                <Form.Item
                    name={['user-school', 'сlass']}
                    label="Класс:"
                    rules={[{required: true}]}>
                    <Select
                        showSearch
                        placeholder="Выберите класс"
                        optionFilterProp="label"
                        onChange={onChange}
                        onSearch={onSearch}
                        options={classValues}
                    />
                </Form.Item>
                <Form.Item style={{marginBottom: '0'}}>
                    <Button type="primary" htmlType="submit">Выбрать</Button>
                </Form.Item>
            </Form>
        </Wrapper>
    )

};

export default FormSelectSchool;
