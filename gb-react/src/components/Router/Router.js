import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import ChatList from '../ChatList/ChatList';
import './Router.scss';
import Chat from '../Chat/Chat';
import { News } from '../News/News';

const Router = () => {
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
                <li>
                    <NavLink to="news">
                        News
                    </NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="profile" element={<Profile />} />
                <Route path="chatList" element={<ChatList />}>
                    <Route
                        path=":chatId"
                        element={
                            <Chat />
                        }
                    />
                </Route>
                <Route path="news" element={<News />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;