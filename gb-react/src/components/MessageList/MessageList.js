import React from 'react';
import './MessageList.scss';

const MessageList = ({messages}) => {
    return (
        messages.map((message) => <p>{message.author} : {message.text}</p>)
    );
}


export default MessageList;