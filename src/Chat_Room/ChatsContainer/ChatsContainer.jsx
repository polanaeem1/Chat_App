import React, { useEffect, useState } from 'react';
import './style.css';
import ChatType from './ChatType';
import ChatSearch from './ChatSearch';
import ChatBox from './ChatBox';
import React, { useEffect, useState } from "react";
import "./style.css";
import ChatType from "./ChatType";
import ChatSearch from "./ChatSearch";
import ChatBox from "./ChatBox";
import { auth, db } from "../../firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";




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
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    const getData = async (uid) => {
      const docRef = collection(db, "users");
      const docSnap = await getDocs(docRef);
      const usersData = [];
      docSnap.forEach((doc) => {
        usersData.push({ ...doc.data(), id: doc.id });
      });
      return usersData;
    };
    getData().then((data) => {
      setUsersData(data);
    });    
  },[]);

  return (
    <div className="main">
      <div className="chats-container">
        <header>
          <h2>Messages</h2>
          <ChatSearch />
          <ChatType />
        </header>
        <div className="chat-list">
          {usersData.map((user) => {
            return <ChatBox name={user.finalUserName} key={user.id} id={user.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatsContainer;
