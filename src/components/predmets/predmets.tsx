import React from "react";
import {Card, List} from 'antd';
import predmetsData from "../../mocks/predmets-data";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks";
import {setPredmets} from "../../redux/predmets-slice";


const Predmets = () => {

    const dispatch = useAppDispatch();

    return (
        <>
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 4,
                    xxl: 3,
                }}
                dataSource={predmetsData}
                renderItem={(item) => (
                    <List.Item>
                        <Link to={`detail/${item.path}`}
                        onClick={() => dispatch(setPredmets(item.path))}
                        >
                            <Card title={item.title}>
                                Средний балл: {item.avg}
                                <br/>
                                Всего часов: {item.hours}
                            </Card>
                        </Link>
                    </List.Item>
                )}
            />
        </>
    )
}

export default Predmets;
