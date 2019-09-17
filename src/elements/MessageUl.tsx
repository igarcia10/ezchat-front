import styled from 'styled-components';

export const MessagesUl = styled.ul`
    list-style-type: none; 
    margin: 0; 
    padding: 0;
    & li { 
        padding: 5px 10px; 
    }
    & li:nth-child(odd) { 
        background: #eee; 
    }
`;