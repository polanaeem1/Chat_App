import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { LuSendHorizonal } from "react-icons/lu";
import { MdAttachFile, MdOutlineEmojiEmotions } from "react-icons/md";
import { TiMicrophoneOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { auth, db } from "../../firebase";
import { addUser, lastMsgEdit } from "../../slices/userSlice";

const CreateMsg = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleSendMsg = async () => {
    if (text === "") {
      return;
    }
    try {
      dispatch(lastMsgEdit(text));
      await updateDoc(doc(db, "chats", user.userChat.chatId), {
        messages: arrayUnion({
          senderId: auth.currentUser.uid,
          text,
          createdAt: new Date(),
        }),
      });
      setText(""); 
    } catch (error) {}
  
  };

  return (
    <div className="createMsg-container">
      <div className="createMsg-left">
      
      </div>
      <div className="Msg-content">
        <input
          type="text"
          className="Msg-input"
          placeholder="Type a message"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className="createMsg-right">
        <LuSendHorizonal
          color="#808074"
          size={25}
          cursor="pointer"
          onClick={handleSendMsg}
        />
      </div>
    </div>
  );
};

export default CreateMsg;
