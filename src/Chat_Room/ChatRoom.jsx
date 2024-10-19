import React, { useState } from 'react'
import SideBar from './SideBar/SideBar'
import './style.css'
import ChatsContainer from './ChatsContainer/ChatsContainer'
import ChatDetails from './ChatDetails/ChatDetails'
import MainChat from './MainChat/MainChat'
const ChatRoom = () => {
  const [active, setActive] = useState(false)
  return (
    <div className='chatroom-container'>
        <SideBar setActive={setActive} />
        <ChatsContainer active={active} setActive={setActive}/>
        <MainChat active={active}/>
        <ChatDetails />
    </div>
  )
}

export default ChatRoom