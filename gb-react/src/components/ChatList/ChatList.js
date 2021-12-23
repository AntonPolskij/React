import React from 'react';
import { List, ListItem } from '@mui/material';
import { Link, Outlet } from "react-router-dom";

const ChatList = ({ chats }) => {
    return (
        <>
            <div className="chatList__container">
            <List>
                {chats.map((chat) => <ListItem alignItems="center" key={chat.id}><Link to={`${chat.id}`}>{chat.name}</Link> </ListItem>)}
            </List>
            <Outlet />
            </div>
        </>
    );
}


export default ChatList;