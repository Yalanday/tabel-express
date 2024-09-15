import styled from "styled-components";
import {Menu as BaseMenu} from 'antd';

export const LeftMenuStyled = styled(BaseMenu)`

    .ant-menu-item {
        color: white;
        background-color: rgba(0, 0, 0, .6);
    }
    
    .ant-menu-item:hover {
        background-color: rgba(255, 255, 255, .5) !important;
        color: black !important;
    }

    .ant-menu-item-selected {
        background-color: white;
        color: black;
    }
`
