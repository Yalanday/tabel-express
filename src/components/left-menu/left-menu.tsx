import React from 'react';
import {LeftMenuStyled} from "./left-menu-styles";
import {useNavigate} from "react-router-dom";
import {log} from "node:util";

const menuItems = [
    {label: 'Расписание', path: '/'},
    {label: 'Предметы', path: '/predmets/'},
    {label: 'Домашнее задание', path: '/home-tasks/'},
    {label: 'Учитель онлайн', path: '/prepod-online/'},
    {label: 'Родительский комитет', path: '/father-commitet/'},
    {label: 'Кружки и секции', path: '/sections/'},
    {label: 'Отзыва и предложения', path: '/reviews-and-suggestions/'},
    {label: 'Ваш сотрудник ПДН', path: '/kinder-police/'},
    {label: 'Контакты', path: '/contacts/'},
]
const items = menuItems.map(
    (item, index) => ({
        key: String(item.path),
        label: item.label,
        path: item.path,
    }),
);
const LeftMenu = () => {
    const navigate = useNavigate();

    return (
        <LeftMenuStyled
            onClick={
                (e) => {
                    const key = e.key;
                    if (key) {
                        navigate(key);
                    }
                }}

            style={{background: 'rgba(255, 255, 255, 0)'}}
            theme="dark"
            mode='vertical'
            defaultSelectedKeys={['1']}
            items={items}
        />
    )
}

export default LeftMenu;
