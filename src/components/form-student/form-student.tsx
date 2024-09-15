import React from "react";
import {Wrapper} from "../start-rorm/form-start-styles";
import {Select, Form, Button} from 'antd';
import studentsValues from "../../mocks/students";

const layout = {
    labelCol: {span: 7},
    wrapperCol: {span: 18},
};


const validateMessages = {
    required: 'Поле является обязательным',
};


const onSearch = (value: string) => {
    console.log('search:', value);
};

type StudentType = {
    value: string,
    label: string,
    img: string
}

type Props = {
    autnStatusToggle: (authState: boolean) => void
}

const FormStudent: React.FC<Props> = ({autnStatusToggle}) => {

    const [student, setStudent] = React.useState<StudentType | null>(null);
    const findStudent = (val: string) => {
        studentsValues.forEach(student => {
            if (student.value === val) {
                setStudent(student);
            }
        })
    }

    const onChange = (value: string) => {
        console.log(`selected ${value}`);
        findStudent(value);
    };

    const onFinish = (values: any) => {
        console.log(values);
        autnStatusToggle(true)
    };

    return (
        <Wrapper>
            <h2>Выберите ученика</h2>
            <Form
                name="students-select-form"
                validateMessages={validateMessages}
                {...layout}
                onFinish={onFinish}
            >
                <Form.Item
                    name={['user-students', 'student']}
                    label="Ученик:"
                    rules={[{required: true}]}>
                    <Select
                        showSearch
                        placeholder="Выберите ученика"
                        optionFilterProp="label"
                        onChange={onChange}
                        onSearch={onSearch}
                        options={studentsValues}
                    />
                </Form.Item>

                {student && <img src={`./img/${student?.img}`} alt={student?.label}/>}
                {student === null && <img src={'./img/placeholder-img.jpg'} alt={''}/>}
                <p>{student?.label || 'Имя'}</p>

                <Form.Item >
                    <Button type="primary" htmlType="submit">Выбрать</Button>
                </Form.Item>
            </Form>
        </Wrapper>
  );
}

export default FormStudent;
