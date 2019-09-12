import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
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
        width: 9%; 
        background: rgb(130, 224, 255); 
        border: none; 
        padding: 10px; 
    }
`;

const MessagesUl = styled.ul`
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

export const App: React.FC = () => (
    <div>
        <MessagesUl></MessagesUl>
        <StyledForm>
            <input /><button>Send</button>
        </StyledForm>
    </div>
);