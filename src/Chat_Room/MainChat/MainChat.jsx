import React, { useState } from "react";
import "./style.css";
import CreateMsg from "./CreateMsg";
import ChatHero from "./ChatHero";
import UserData from "./UserData";
const MainChat = ({ active }) => {
  const [send, setSend] = useState(false)
  return (
    <div
      className={active ? "main-chat-container-active" : "main-chat-container"}
    >
      <UserData />
      <ChatHero send={send} />
      <CreateMsg setSend={setSend} send={send} />
    </div>
  );
};

export default MainChat;
