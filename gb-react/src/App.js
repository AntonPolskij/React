import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import Message from './components/Message/Message'
import Form from './components/Form/Form';
import MessageList from './components/MessageList/MessageList';

const myName='Anton';
const helloMsg='Hello, my name is ';
function App() {
  const [messageList, setMessageList] = useState([]);
  const handleAddMessage = (text) => {
    const newMessage = { text, author: 'Human'};
    setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
  }
  useEffect(() => {
    if (messageList[messageList.length - 1]?.author === 'Human') {
      setTimeout(() => {
        const newMessage = { text: "Сообщение отправлено", author: 'Bot' };
        setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
      },2000);
    }
   }, [messageList])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message name={myName} msg={helloMsg} />
        <Form onSubmit={handleAddMessage}/>
        <MessageList messages={messageList}/>
      </header>
    </div>
  );
}

export default App;
