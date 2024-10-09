import React from "react";
import { LuSendHorizonal } from "react-icons/lu";
import { MdAttachFile, MdOutlineEmojiEmotions } from "react-icons/md";
import { TiMicrophoneOutline } from "react-icons/ti";

const CreateMsg = () => {
  return (
    <div className="createMsg-container">
      <div className="createMsg-left">
        <TiMicrophoneOutline color="#808074" size={25} />
        <MdOutlineEmojiEmotions color="#808074" size={25} />
      </div>
      <div className="Msg-content">
        <input type="text" className="Msg-input" placeholder="Type a message" />
      </div>
      <div className="createMsg-right">
        <MdAttachFile color="#808074" size={25} />
        <LuSendHorizonal color="#808074" size={25} />
      </div>
    </div>
  );
};

export default CreateMsg;
