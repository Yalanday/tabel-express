import React from 'react';
import {useAppSelector} from "../../hooks/redux-hooks";
import predmetsData from "../../mocks/predmets-data";
import Wrapper from "./predmets-detail-style";
import {Button} from 'antd'
import {Link} from "react-router-dom";

const PredmetDetail = () => {
    const {predmets} = useAppSelector(state => state.predmets);
    const currentPredmet = predmetsData.find(predmet => predmet.path === predmets);
    console.log(currentPredmet);

    return (
        <Wrapper className="predmet">
            <h1>{currentPredmet?.title}</h1>
            <div className="predmet__container">
                <img src={currentPredmet?.img} alt={currentPredmet?.title}/>
                <div className="predmet__text-container">
                    <p>{currentPredmet?.curatorName}</p>
                    <p>{currentPredmet?.description}</p>
                </div>
            </div>
            <div className="predmet__buttons-container">
                <Link to={`/home-tasks/${currentPredmet?.path}`}  >
                    <Button type="primary" size="large">Узнать домашнее задание</Button>
                </Link>
                <Link to="/prepod-online/">
                    <Button type="primary" size="large">Связаться с учителем</Button>
                </Link>
            </div>
        </Wrapper>
    )
}

export default PredmetDetail;
