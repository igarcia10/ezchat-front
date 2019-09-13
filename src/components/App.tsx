import React, { useState } from 'react';
import styled from 'styled-components';
import socket from 'socket.io-client';

interface IMessage {
    id: string,
    text: string
};

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

const client = socket.connect('http://localhost:8080');

export const App: React.FC = () => {
    let [message, setMessage] = useState<string>('');
    let [messages, setMessages] = useState<IMessage[]>([]);

    const sendMessage = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        client.emit('chat_message', message);
        setMessage('');
    };

    const handleChange = (message: string) => {
        setMessage(message);
    };

    client.emit('username', 'Iván');
    client.on('chat_message', (m: IMessage) => setMessages([...messages, m]));

    return (
        <div>
            <MessagesUl>
                {messages.map(m => <li key={m.id}>{m.text}</li>)}
            </MessagesUl>
            <StyledForm>
                <input type="text" value={message} onChange={e => handleChange(e.target.value)} onKeyPress={e => {
                    if (e.keyCode === 13) {
                        handleChange(message);
                    }
                }} /><button onClick={sendMessage}>Send</button>
            </StyledForm>
        </div>
    );
};