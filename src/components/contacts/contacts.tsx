import React, {useEffect, useRef} from "react";
import {YMaps} from '@pbe/react-yandex-maps';
import Wrapper from "./contacts-styles";
import CustomMap from "../custom-map/custom-map";

const Contacts = () => {

    return (
        <Wrapper className="contacts">
            <div className="contacts__left-block">
                <h1 style={{color: '#ffffff', marginTop: 0}}>Контакты</h1>
                <p>Адрес: Там то там-то</p>
                <p>Телефон директора: <a href="tel:+7 (999) 999-99-99">+7 (999) 999-99-99</a></p>
                <p>Телефон канцелярии: <a href="tel:+7 (999) 999-99-99">+7 (999) 999-99-99</a></p>
                <p>E-mail: <a href="mailto:mail@mail.ru">mail@mail.ru</a></p>
                <p>Сайт: <a href="http://www.site.ru">www.site.ru</a></p>
                <p>Режим работы: Пн-Сб: 9:00-18:00</p>
            </div>
            <YMaps >
                <CustomMap/>
            </YMaps>
        </Wrapper>
    )
        ;
    }

    export default Contacts;




