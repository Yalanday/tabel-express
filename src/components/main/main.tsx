import React from 'react';
import {Routes, Route} from "react-router-dom";
//STYLES
import MainStyled from "./main-styles";
import {Layout} from 'antd';
//COMPONENTS
import LeftMenu from "../left-menu/left-menu";
import Calendar from "../calendar/calendar";
import Predmets from "../predmets/predmets";
import HomeTasks from "../home-tasks/home-tasks";
import PrepodOnline from "../prepod-online/prepod-online";
import FatherCommitet from "../father-commitet/father-commitet";
import Sections from "../sections/sections";
import ReviewsAndSuggestions from "../reviews-and-suggestions/reviews-and-suggestions";
import KinderPolice from "../kinder-police/kinder-police";
import Contacts from "../contacts/contacts";
import PredmetDetail from "../predmets/predmet-detail";
import HomeTasksDetail from "../home-tasks/home-task-detail";



const {Content, Sider} = Layout;

const Main: React.FC = () => {

    return (
        <MainStyled>
            <Layout className="left-menu-layout">
                <Sider className="left-menu-sider" breakpoint="lg" collapsedWidth="0">
                    <LeftMenu/>
                </Sider>
                <Layout className="main-layout">
                    <Content className="main-content-wrapper">
                        <div className="main-content">
                            <Routes>
                                <Route path="/" element={<Calendar/>}/>
                                <Route path="/predmets" element={<Predmets/>}/>
                                <Route path="/home-tasks" element={<HomeTasks/>}/>
                                <Route path="/prepod-online" element={<PrepodOnline/>}/>
                                <Route path="/father-commitet" element={<FatherCommitet/>}/>
                                <Route path="/sections" element={<Sections/>}/>
                                <Route path="/reviews-and-suggestions" element={<ReviewsAndSuggestions/>}/>
                                <Route path="/kinder-police" element={<KinderPolice/>}/>
                                <Route path="/contacts" element={<Contacts/>}/>
                                <Route path="/predmets/detail/*" element={<PredmetDetail/>}/>
                                <Route path="/home-tasks/*" element={<HomeTasksDetail/>}/>
                            </Routes>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </MainStyled>
    );
};

export default Main;
