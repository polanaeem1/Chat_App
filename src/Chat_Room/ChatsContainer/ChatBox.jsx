import React, { useState } from "react";
import UserImg from "../../images/user.png";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../slices/userSlice";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../../firebase";

const ChatBox = ({ name, id }) => {
  const [chatBio, setChatBio] = useState("Hello what’s up");
  const [messageTime, setMessageTime] = useState("5m");
  const [messageNum, setMessageNum] = useState(2);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleChat = async () => {
    const chatRef = collection(db, "chats");
    const userChatsRef = collection(db, "userChats");
    if (id === "") {
      console.log("hello");
    } else {
      try {
        const newChatRef = doc(chatRef);
        console.log(newChatRef);
        const chatId = newChatRef.id;
        const docRef = doc(db, "userChats", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);

        for (let index = 0; index < docSnap.data().chats.length; index++) {
          if (docSnap.data().chats[index].receiverId === id) {
            const chatId = docSnap.data().chats[index].chatId;
            dispatch(addUser({ name, id, chatId }));
            return;
          }
        }
        dispatch(addUser({ name, id, chatId }));
        await setDoc(newChatRef, {
          createdAt: serverTimestamp(),
          messages: [],
        });

        await updateDoc(doc(userChatsRef, auth.currentUser.uid), {
          chats: arrayUnion({
            chatId: newChatRef.id,
            lastMessage: "",
            receiverId: id,
            updatedAt: Date.now(),
          }),
        });
        await updateDoc(doc(userChatsRef, id), {
          chats: arrayUnion({
            chatId: newChatRef.id,
            lastMessage: "",
            receiverId: auth.currentUser.uid,
            updatedAt: Date.now(),
          }),
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="chat-box" onClick={handleChat}>
      <div className="chat-img">
        <img src={UserImg} alt="User" />
      </div>
      <div className="chat-info">
        <div className="chat-name">{name}</div>
        {/* <div className="chat-bio">{chatBio}</div> */}
      </div>
      {/* <div className="chat-times">
        <div className="message-time">{messageTime}</div>
        <div className="message-num">
          <div className="num">{messageNum}</div>
        </div>
      </div> */}
    </div>
  );
};

export default ChatBox;
