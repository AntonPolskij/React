import React, { useMemo } from "react";
import { Navigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Form from "../Form/Form";
import MessageList from "../MessageList/MessageList";
import { AUTHORS } from "../../utils/constants";
import {
    addMsgWithFb,
} from "../../store/messages/actions";
import {
    selectMessage,
    selectMessagesByChatId,
} from "../../store/messages/selectors";

import "./Chat.scss";

function Chats() {
    const { chatId } = useParams();
    const messages = useSelector(selectMessage);
    const getMessagesByChatId = useMemo(
        () => selectMessagesByChatId(chatId),
        [chatId]
    );

    const messagesForCurrentChat = useSelector(getMessagesByChatId);
    const dispatch = useDispatch();

    const onAddMessage = (newMessage, chatId) => {
        dispatch(addMsgWithFb(newMessage, chatId));
    };

    const handleSubmit = (text) => {
        const newMessage = { text, author: AUTHORS.HUMAN , id: `msg-${Date.now()}` };
        onAddMessage(newMessage, chatId);
    };

    if (!messages[chatId]) {
        return <Navigate to="/chatList" replace />;
    }

    return (
        <>
            <h3>HEADER</h3>
            <div className="chat-wrap">
                <div className="App">
                    <Form focusOnChange={chatId} onSubmit={handleSubmit} />
                    <MessageList messages={messagesForCurrentChat} />
                </div>
            </div>
        </>
    );
}

export default Chats;
