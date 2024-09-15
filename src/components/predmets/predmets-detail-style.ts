import styled from'styled-components';

const Wrapper = styled.div`

    h1 {
        color: white;
    }
    
    .predmet__container {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        margin-bottom: 20px;
    }
    
    .predmet__text-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 10px;
        
    }

    img {
        width: 350px;
        height: 250px;
        border-radius: 10px;
    }
    
    p {
        font-size: 18px;
        font-weight: 500;
        color: #fff;
        margin: 0;
    }
    
    .predmet__buttons-container {
        display: flex;
        gap: 10px;
    }
`

export default Wrapper;
