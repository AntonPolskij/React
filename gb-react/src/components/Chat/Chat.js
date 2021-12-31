import React, { useState, useEffect } from 'react';
import './Chat.scss';
import { useParams, Navigate } from 'react-router';
import Form from '../Form/Form';
import MessageList from '../MessageList/MessageList';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../store/messages/actions';
import { selectMessage } from '../../store/messages/selectors';

function Chat() {
    const { chatId } = useParams();
    const messages = useSelector(selectMessage);
    const dispatch = useDispatch();
    const handleAddMessage = (text) => {
        const newMessage = { text, author: 'Human', id: `msg-${Date.now()}` };
        dispatch(addMessage(newMessage, chatId));
    }
    useEffect(() => {
        if (messages[chatId]?.[messages[chatId].length - 1]?.author === 'Human') {
            setTimeout(() => {
                const newMessage = { text: "Сообщение отправлено", author: 'Bot', id: `msg-${Date.now()}` };
                dispatch(addMessage(newMessage, chatId));
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
