import React, { useState, useEffect } from 'react';
import './Chat.scss';
import { useParams,Navigate } from 'react-router';
import Form from '../Form/Form';
import MessageList from '../MessageList/MessageList';

function Chat({ messages, onAddMessage }) {
    const { chatId } = useParams();
    const handleAddMessage = (text) => {
        const newMessage = { text, author: 'Human', id: `msg-${Date.now()}` };
        onAddMessage(newMessage, chatId);
    }
    useEffect(() => {
        if (messages[chatId]?.[messages[chatId].length - 1]?.author === 'Human') {
            setTimeout(() => {
                const newMessage = { text: "Сообщение отправлено", author: 'Bot', id: `msg-${Date.now()}` };
                onAddMessage(newMessage, chatId);
            }, 1000);
        }
    }, [messages[chatId]])

    if (!messages[chatId]) {
        return <Navigate to="/chatList" replace />;
    }

    return (
        <div className="App">
            <div className="container">
                <div className="msg__container">
                    <div className="msg-list">
                        <MessageList messages={messages[chatId]} />
                    </div>
                    <div className="msg-form>">
                        <Form onSubmit={handleAddMessage} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;
