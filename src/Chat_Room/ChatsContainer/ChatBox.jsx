import React, { useState } from 'react';
import UserImg from '../../images/user.png';
import './style.css';

const ChatBox = () => {
  const [chatName, setChatName] = useState("Barone LLC.");
  const [chatBio, setChatBio] = useState("Hello what’s up");
  const [messageTime, setMessageTime] = useState("5m");
  const [messageNum, setMessageNum] = useState(2);


  return (
    <div className='chat-box'>
      <div className='chat-img'>
        <img src={UserImg} alt="User" />
      </div>
      <div className='chat-info'>
        <div className='chat-name'>{chatName}</div>
        <div className='chat-bio'>{chatBio}</div>
      </div>
      <div className='chat-times'>
        <div className='message-time'>{messageTime}</div>
        <div className='message-num'>
          <div className='num'>{messageNum}</div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
