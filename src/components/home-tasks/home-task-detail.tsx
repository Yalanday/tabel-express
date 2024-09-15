import React from 'react';
import {useAppSelector} from "../../hooks/redux-hooks";
import predmetsData from "../../mocks/predmets-data";
import Wrapper from "./home-task-detail-style";

const HomeTaskDetail = () => {
    const {predmets} = useAppSelector(state => state.predmets);
    const currentPredmet = predmetsData.find(predmet => predmet.path === predmets);
    const tasks = currentPredmet?.tasks;
    console.log(tasks?.length)
    return (
        <Wrapper className="predmet">
            <h1>{currentPredmet?.title}</h1>
            {tasks && tasks.map(task => (
                <div key={task.id}>
                    <h3>{task.title} {task.id}</h3>
                </div>
            ))}
            {tasks && tasks.length === 0 && (
                <div>
                    <h3>Ничего не задали</h3>
                </div>
            )}
        </Wrapper>
    )
}

export default HomeTaskDetail;
