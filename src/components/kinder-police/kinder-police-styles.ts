import styled from'styled-components';

export const Wrapper = styled.div`

    .kinder-police__content {
        display: flex;
        gap: 10px;
    }

    .kinder-police__text {
        max-width: 60%;
        color: #ffffff;
        font-size: 16px;
    }

    a {
        color: #ffffff;
        text-decoration: underline;
        text-underline-offset: 4px;
        font-weight: 600;
    }

    @media (max-width: 768px) {
        .kinder-police__content {
            flex-direction: column;
            gap: 10px;
        }

        .kinder-police__text {
            max-width: 100%;
        }
        
        .ant-image {
            align-self: center;
        }
    }



`;

export default Wrapper;
