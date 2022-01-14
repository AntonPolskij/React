import React from 'react';
import { Link } from "react-router-dom";
import './Home.scss';

const Home = () => {
    return (<>
        <div className='home-container'>
            <h1>Home Page</h1>
            <Link to="chatList">Chats</Link>
            <Link to="profile">Profile</Link>
            <Link to="news">News</Link>
        </div>
    </>);
}
export default Home;