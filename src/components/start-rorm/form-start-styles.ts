import styled from'styled-components';


export const Wrapper = styled.div`
    border: 1px solid lightcyan;
    border-radius: 10px;
    display: flex;
    width: max-content;
    min-width: 320px;
    margin: 5% auto 0;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        margin: 0 0 1rem;
        text-align: center;
        color: lightcyan;
        font-weight: 600;
    }

    Form {
        background-color: #fff;
        padding: 1.5rem 1rem 0;
        border-radius: 0.5rem;
        width: 100%;
    }

    img {
        display: block;
        margin: 0 auto;
        width: 250px;
        height: 300px;
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

    @media screen and (max-width: 768px) {
        padding: 10px;
        min-width: 260px;
        
        h2 {
            font-size: 1rem;
        }
        
        Form {
            padding: 1rem 0.5rem 0;
        }

        img {
            width: 200px;
            height: 250px;
        }
    }
`
