import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import {
    addChatWithFb,
    deleteChatWithFb,
    initChatsTracking,
} from "../../store/chats/actions";
import { initMsgsTracking } from "../../store/messages/actions";
import  Form  from "../Form/Form";
import { ChatItem } from "./ChatItem/ChatItem";

export const ChatList = () => {
    const chats = useSelector((state) => state.chats);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initChatsTracking());
        dispatch(initMsgsTracking());
    }, []);

    const onAddChat = (newChatName) => {
        addChatWithFb(newChatName);
    };

    const handleDeleteChat = (id) => {
        dispatch(deleteChatWithFb(id));
    };

    return (
        <>
            <ul>
                {chats.map((chat) => (
                    <ChatItem key={chat.id} chat={chat} onDelete={handleDeleteChat} />
                ))}
                <Form onSubmit={onAddChat} />
            </ul>
            <Outlet />
        </>
    );
};