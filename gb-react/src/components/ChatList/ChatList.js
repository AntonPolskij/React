import React, { useState } from 'react';
import Form from '../Form/Form';
import { useDispatch, useSelector } from "react-redux";
import { List } from '@mui/material';
import { Outlet } from "react-router-dom";
import { addChat, deleteChat } from "../../store/chats/actions.js"
import { selectChats } from '../../store/chats/selectors';
import { ChatItem } from './ChatItem/ChatItem';

const ChatList = () => {
    const chats = useSelector(selectChats);
    const dispatch = useDispatch();


    const addNewChat = (newChatName) => {
        const newId = `chat${Date.now()}`;
        const newChat = {
            id: newId,
            name: newChatName,
        };
        dispatch(addChat(newChat))
    };
    const handleDeleteChat = (id) =>{
        dispatch(deleteChat(id));
    }
    return (
        <>
            <div className="chatList__container">
                <List>
                    {chats.map((chat) => <ChatItem key={chat.id} chat={chat} onDelete={handleDeleteChat} />)}
                </List>
                <Outlet />
            </div>
            <Form onSubmit={addNewChat} />
        </>
    );
}


export default ChatList;