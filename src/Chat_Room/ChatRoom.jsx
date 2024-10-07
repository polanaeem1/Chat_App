import React from 'react'
import SideBar from './SideBar/SideBar'
import './style.css'
import ChatsContainer from './ChatsContainer/ChatsContainer'
import ChatDetails from './ChatDetails/ChatDetails'
import MainChat from './MainChat/MainChat'
const ChatRoom = () => {
  return (
    <div className='chatroom-container'>
        <SideBar/>
        <ChatsContainer/>
        <MainChat/>
        <ChatDetails/>
    </div>
  )
}

export default ChatRoom