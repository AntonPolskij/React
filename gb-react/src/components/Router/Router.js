import React, { useState} from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import ChatList from '../ChatList/ChatList';
import './Router.scss';
import Chat from '../Chat/Chat';


const initialChats = [
    {
        id: "chat1",
        name: "Chat 1",
    },
    {
        id: "chat2",
        name: "Chat 2",
    },
    {
        id: "chat3",
        name: "Chat 3",
    },
    {
        id: "chat4",
        name: "Chat 4",
    },
];

const initialMessages = initialChats.reduce((acc, chat) => {
    acc[chat.id] = [];
    return acc;
}, {});

const Router = () => {
    const [chats, setChats] = useState(initialChats);
    const [messages, setMessages] = useState(initialMessages);
    const handleAddMessage = (newMessage, chatId) => {
        setMessages((prevMessages) => ({
            ...prevMessages,
            [chatId]: [...prevMessages[chatId], newMessage],
        }));
    };
    return (
        <BrowserRouter>
            <ul className='navigation'>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="profile">
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink to="chatList">
                        Chats
                    </NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home  />} />
                <Route path="profile" element={<Profile/>} />
                <Route path="chatList" element={<ChatList chats={chats}/>}>
                    <Route
                        path=":chatId"
                        element={
                            <Chat messages={messages} onAddMessage={handleAddMessage} />
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;