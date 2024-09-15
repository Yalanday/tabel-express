import React from "react";
import {useAppDispatch} from "../../hooks/redux-hooks";
import {Card, List} from "antd";
import predmetsData from "../../mocks/predmets-data";
import {Link} from "react-router-dom";
import {setPredmets} from "../../redux/predmets-slice";


const HomeTasks = () => {

    const dispatch = useAppDispatch();

    return (
        <>
            <h1 style={{color: '#ffffff', marginTop: 0}}>Домашнее задание</h1>
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
                        <Link to={`${item.path}`}
                              onClick={() => dispatch(setPredmets(item.path))}
                        >
                            <Card title={item.title}>
                                Всего заданий: {item.tasks.length}
                                <br/>
                            </Card>
                        </Link>
                    </List.Item>
                )}
            />
        </>
    )
}

export default HomeTasks;
