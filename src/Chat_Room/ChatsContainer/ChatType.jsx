import React, { useState } from 'react';
import Chaticon from "../../../src/images/chatIcon.png";
import './style.css';

const ChatType = () => {
  const [icon, setIcon] = useState(Chaticon); 
  const [chatText, setChatText] = useState("Chats");


  return (
    <div className='Chat-Type'>
      <img src={icon} alt="Chat Icon" className="chat-icon" />
      <p className="chat-text">{chatText}</p>
    </div>
  );
}

export default ChatType;
