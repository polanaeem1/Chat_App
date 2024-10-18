import React, { useEffect, useState } from "react";
import "./style.css";
import ChatType from "./ChatType";
import ChatSearch from "./ChatSearch";
import ChatBox from "./ChatBox";
import "./style.css";
import { auth, db } from "../../firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

const ChatsContainer = () => {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const docRef = collection(db, "users");
      const docSnap = await getDocs(docRef);
      const usersData = [];
      docSnap.forEach((doc) => {
        usersData.push({ ...doc.data(), id: doc.id });
      });
      return usersData;
    };
    getData().then((data) => {
      setUsersData(
        data.filter((user) => {
          return user.id !== auth.currentUser.uid;
        })
      );
    });
  }, []);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="main">
      <div className="chats-container">
        <header>
          <h2>Messages</h2>
          <ChatSearch
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
          />
          <ChatType />
        </header>
        <div className="chat-list">
          {usersData
            .filter((user) => {
              if (searchQuery === "") {
                return true;
              } else {
                return user.finalUserName.toLowerCase() === searchQuery.toLowerCase();
              }
            })
            .map((user) => {
              return (
                <ChatBox name={user.finalUserName} key={user.id} id={user.id} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ChatsContainer;
