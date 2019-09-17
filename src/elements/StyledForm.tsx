import styled from 'styled-components';

export const StyledForm = styled.form`
    background: #000; 
    padding: 3px; 
    position: fixed; 
    bottom: 0; 
    width: 100%;
    & input { 
        border: 0; 
        padding: 10px; 
        width: 90%; 
        margin-right: .5%; 
    }
    & button { 
        cursor: pointer;
        width: 9%; 
        background: rgb(130, 224, 255); 
        border: none; 
        padding: 10px; 
    }
    & button:hover {
        background: rgb(244, 255, 255); 
    }
    & button:disabled {
        cursor: auto;
        background: rgb(255, 255, 255); 
    }
`;