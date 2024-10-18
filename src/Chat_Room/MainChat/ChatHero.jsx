import React, { useEffect, useState } from "react";
import Message from "./Message";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useSelector } from "react-redux";

const ChatHero = () => {
  const user = useSelector((state) => state.user);
  const [msg, setMsg] = useState([]);
  const [sender, setSender] = useState("");
  useEffect(() => {
    const getDataFromDocument = async (collectionName, documentId) => {
      const docRef = doc(db, collectionName, documentId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setSender(docSnap.data().senderId);
        setMsg(docSnap.data().messages);
        console.log(msg);
      }
    };
    if (user.userChat.chatId !== "") {
      getDataFromDocument("chats", user.userChat.chatId);
    }
  }, [user]);
  return (
    <div className="chatHero-container">
      {msg.map((message) => {
        return <Message text={message.text} createdAt={message.createdAt} senderId={message.senderId} />;
      })}
    </div>
  );
};

export default ChatHero;
