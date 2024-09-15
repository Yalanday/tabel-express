import styled from'styled-components';

const Wrapper= styled.div`

    .ant-list-item{
        cursor: pointer;
        transition: all 0.3s;
        
        &:hover{
            scale: 1.1;
        }
    }

    img{
        width: 100%;
        height: 100px;
    }
`
export default Wrapper;
