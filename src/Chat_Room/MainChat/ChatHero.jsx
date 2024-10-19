import React, { useEffect, useState, useRef } from "react";
import Message from "./Message";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useSelector } from "react-redux";

const ChatHero = ({send}) => {
  const user = useSelector((state) => state.user);
  const [msg, setMsg] = useState([]);
  const [sender, setSender] = useState("");
  const chatContainerRef = useRef(null);
  const endOfMessagesRef = useRef(null);
  useEffect(() => {
    const getDataFromDocument = async (collectionName, documentId) => {
      const docRef = doc(db, collectionName, documentId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setSender(docSnap.data().senderId);
        setMsg(docSnap.data().messages);
      }
    };
    if (user.userChat.chatId !== "") {
      getDataFromDocument("chats", user.userChat.chatId);
    }
  });
  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [send]);

  return (
    <div className="chatHero-container" ref={chatContainerRef}>
      {msg.map((message, index) => (
        <Message
          key={index}
          text={message.text}
          createdAt={message.createdAt}
          senderId={message.senderId}
        />
      ))}
      <div ref={endOfMessagesRef} />
    </div>
  );
};

export default ChatHero;
