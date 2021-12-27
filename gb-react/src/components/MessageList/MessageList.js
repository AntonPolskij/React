import React from 'react';
import './MessageList.scss';
import {Message} from './Message/Message'

const MessageList = ({messages}) => {
    return (
        messages.map((message) => <Message key={message.id} text={message.text} author={message.author} />)
    );
}


export default MessageList;