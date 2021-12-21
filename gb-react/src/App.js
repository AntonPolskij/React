import React, { useState, useEffect} from 'react';
import './App.scss';
import ChatList from './components/ChatList/ChatList';
import Form from './components/Form/Form';
import MessageList from './components/MessageList/MessageList';

function App() {
  const [messageList, setMessageList] = useState([]);
  const handleAddMessage = (text) => {
    const newMessage = { text, author: 'Human', id: `msg-${Date.now()}` };
    setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
  }
  useEffect(() => {
    if (messageList[messageList.length - 1]?.author === 'Human') {
      setTimeout(() => {
        const newMessage = { text: "Сообщение отправлено", author: 'Bot', id: `msg-${Date.now()}` };
        setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
      }, 2000);
    }
  }, [messageList])
  const [chatList, setChatList] = useState([{ id: `chat-1`, name: "chat-1" }, { id: `chat-2`, name: "chat-2" }, { id: `chat-3`, name: "chat-3" }, { id: `chat-4`, name: "chat-4" }]);

  return (
    <div className="App">
      <div className="container">
        <div className="chatList__container">
        <ChatList list={chatList}/>
        </div>
        <div className="msg__container">
          <div className="msg-list">
            <MessageList messages={messageList} />
          </div>
          <div className="msg-form>">
            <Form list={messageList} onSubmit={handleAddMessage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
