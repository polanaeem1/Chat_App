import React, { useEffect, useState } from 'react';
import './style.css';
import ChatType from './ChatType';
import ChatSearch from './ChatSearch';
import ChatBox from './ChatBox';




const ChatsContainer = () => {


  return (
    <div className='main'>
    <div className='chats-container'>
      <header>
        <h2>Messages (16)</h2>
        <ChatType/>
        <ChatSearch />
      </header>
      <div className='chat-list'>
        <ChatBox />
      </div>
    </div>
    
  </div>
  )
}

export default ChatsContainer;
