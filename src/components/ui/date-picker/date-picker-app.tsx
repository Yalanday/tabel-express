import * as React from'react';
import {ConfigProvider, DatePicker, type DatePickerProps} from 'antd';
import ru_RU from "antd/lib/locale/ru_RU";
import type {Dayjs} from "dayjs";

const onChange: DatePickerProps<Dayjs[]>['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

const DatePickerApp: React.FC = () => {

    return (
        <ConfigProvider locale={ru_RU}>
            <DatePicker format="DD-MM-YYYY" onChange={onChange}/>
        </ConfigProvider>
    );
};

export default DatePickerApp;
