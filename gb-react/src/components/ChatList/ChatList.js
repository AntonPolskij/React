import React from 'react';
import Form from '../Form/Form';
import { useDispatch, useSelector } from "react-redux";
import { List, ListItem } from '@mui/material';
import { Link, Outlet } from "react-router-dom";
import { addChat } from "../../store/chats/actions.js"
import { selectChats } from '../../store/chats/selectors';

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
    return (
        <>
            <div className="chatList__container">
                <List>
                    {chats.map((chat) => <ListItem alignItems="center" key={chat.id}><Link to={`${chat.id}`}>{chat.name}</Link> </ListItem>)}
                </List>
                <Outlet />
            </div>
            <Form onSubmit={addNewChat} />
        </>
    );
}


export default ChatList;