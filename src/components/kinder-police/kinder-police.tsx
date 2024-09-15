import React from "react";
import {Image} from 'antd';
import Wrapper from "./kinder-police-styles";


const KinderPolice = () => {
    return (
        <Wrapper className="kinder-police">
            <h1 style={{color: '#ffffff', marginTop: 0}}>Ваш сотрудник ПДН</h1>
            <div className="kinder-police__content">
                <Image
                    width={200}
                    src="/img/police.png"
                />
                <div className="kinder-police__text">
                    Профилактика правонарушений - важнейшая часть в воспитании здорового общества. В случае, если Вы
                    обладаете инфармацией о несовершеннолетних правонарушителях, о совершенных, совершаемых или
                    подготавливаемых преступлениях, просим незамедлительно связаться с лейтенантом полиции Правильной
                    Фемидой Степановной по телефону <a href="tel:+7(000)-999-99-99">+7(000)-999-99-99</a>.
                    <br/>
                    Гарантируется конфиденциальность ваших персональных данных.
                </div>

            </div>
        </Wrapper>
    )
}

export default KinderPolice;
