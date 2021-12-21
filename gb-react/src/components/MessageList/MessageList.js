import React from 'react';
import './MessageList.scss';

const MessageList = ({messages}) => {
    return (
        messages.map((message) => <p key={message.id}>{message.author} : {message.text}</p>)
    );
}


export default MessageList;