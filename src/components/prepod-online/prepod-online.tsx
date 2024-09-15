import React, {useState} from "react";
import {Card, List} from "antd";
import predmetsData from "../../mocks/predmets-data";
import Wrapper from "./prepod-online-style";
import ModalApp from "../ui/modal/modal";
import {PredmetsDataType} from "../../types/types";

const PrepodOnline = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [itemForModal, setItemForModal] = useState({} as PredmetsDataType);

    return (
        <Wrapper>
            <h1 style={{color: '#ffffff', marginTop: 0}}>Учитель онлайн</h1>
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
                    <List.Item
                        onClick={() => {
                            showModal();
                            setItemForModal(item);
                        }}
                    >
                        <Card title={item.title}>
                            <img src={item.img} alt={item.title}/>
                            <br/>
                            <h2>{item.curatorName}</h2>
                        </Card>
                    </List.Item>
                )}
            />
            <ModalApp item={itemForModal} isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}/>
        </Wrapper>
    )
}

export default PrepodOnline;
