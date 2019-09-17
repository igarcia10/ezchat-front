import React, { useState, useEffect } from 'react';
import { MessagesUl, StyledForm } from '../elements';
import { Message } from '../models';
import socket from 'socket.io-client';

interface Props {
    name: string
}

const client = socket.connect('http://localhost:8080');

export const Chat: React.FC<Props> = ({ name }) => {
    let [message, setMessage] = useState<string>('');
    let [messages, setMessages] = useState<Message[]>([]);

    const sendMessage = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        client.emit('chat_message', message);
        setMessage('');
    };

    const handleKeyPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 13) {
            setMessage(message);
        }
    };

    useEffect(() => {
        client.emit('username', name);
    }, []);

    client.on('system_message', (m: Message) => setMessages([...messages, m]));
    client.on('chat_message', (m: Message) => setMessages([...messages, m]));

    useEffect(() => {
        return () => {
            client.emit('disconnect', name);
        }
    }, []);

    return (
        <div>
            <MessagesUl>
                {messages.map(m => <div key={m.id} dangerouslySetInnerHTML={{ __html: m.text }} />)}
            </MessagesUl>
            <StyledForm>
                <input type="text"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    onKeyPress={e => handleKeyPressed(e)} />
                <button onClick={sendMessage} disabled={!message.length}>Send</button>
            </StyledForm>
        </div>
    );
}