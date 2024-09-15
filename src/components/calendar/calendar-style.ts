import styled from'styled-components';

const Wrapper = styled.div`

    .ui-buttons {   
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    
    .ui-buttons--toggle {
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }
    
    
    Button.ui-button {
        color: white;
        background-color: rgba(0, 0, 0,.6);
    }

    Button.ui-button:hover {
        background-color: rgba(255, 255, 255,.4);
    }
    
    .revers-arrow {
        transform: rotate(180deg);
    }
`
export default Wrapper;
