import styled from'styled-components';

const Wrapper = styled.div`
    display: flex;
    gap: 15px;
    
    p {
        color: white;
    }
    
    a {
        color: white;
        text-decoration: underline;
        text-underline-offset: 4px;
    }
    
    .custom-map {
        width: 60%;
        height: 240px;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        
        .custom-map {
            width: 100%;
            height: 100%;
        }
    }
`;

export default Wrapper;
