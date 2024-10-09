import React from "react";
import "./style.css";
import CreateMsg from "./CreateMsg";
import ChatHero from "./ChatHero";
import UserData from "./UserData";
const MainChat = () => {
  return (
    <div className="main-chat-container">
      <UserData />
      <ChatHero />
      <CreateMsg />
    </div>
  );
};

export default MainChat;
