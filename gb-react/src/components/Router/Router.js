import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Home } from '../Home/Home';
import Profile from '../Profile/Profile';
import ChatList from '../ChatList/ChatList';
import './Router.scss';
import Chat from '../Chat/Chat';
import { News } from '../News/News';
import { PublicOutlet } from '../PublicOutlet/PublicOutlet';
import { PrivateOutlet } from '../PrivateOutlet/PrivateOutlet';
import { initAuthTracking } from '../../store/profile/actions';
import { useDispatch } from 'react-redux';

const Router = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initAuthTracking());
    }, []);
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
                <Route path="/" element={<PublicOutlet />}>
                    <Route path="" element={<Home />} />
                    <Route path="signup" element={<Home isSignUp />} />
                </Route>
                <Route path="profile" element={<PrivateOutlet />}>
                    <Route path="" element={<Profile />} />
                </Route>
                <Route path="chatList" element={<PrivateOutlet />}>
                    <Route path="" element={<ChatList />}>
                        <Route
                            path=":chatId"
                            element={
                                <Chat />
                            }
                        />
                    </Route>
                </Route>
                <Route path="news" element={<News />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;