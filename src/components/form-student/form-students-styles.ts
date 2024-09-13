import styled from'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100%;

    h2 {
        margin: 0 0 1rem;
        text-align: center;
    }

    Form {
        display: flex;
        flex-direction: column;
        min-width: 320px;
        background-color: #fff;
        padding: 1rem;
        border-radius: 0.5rem;
    }
    
    img {
        display: block;
        margin: 0 auto;
        width: 205px;
        height: 200px;
        margin-bottom: 1rem;
    }
    
    p {
        margin: 0 0 1rem;
        text-align: center;
    }

    Button {
        display: block;
        margin: 0 auto;
        transform: translateX(40%);
    }
`
