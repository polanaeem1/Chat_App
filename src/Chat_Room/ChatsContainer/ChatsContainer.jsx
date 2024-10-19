import React, { useEffect, useState } from "react";
import "./style.css";
import ChatType from "./ChatType";
import ChatSearch from "./ChatSearch";
import ChatBox from "./ChatBox";
import "./style.css";
import { auth, db } from "../../firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router";

const ChatsContainer = ({active,setActive}) => {
  const [usersData, setUsersData] = useState([]);
  const navigate = useNavigate();
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
    if (!auth.currentUser) {
      navigate("/SignIn");
    } else {
      getData().then((data) => {
        setUsersData(
          data.filter((user) => {
            return user.id !== auth.currentUser.uid;
          })
        );
      });
    }
  }, []);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className={active?"main-active":"main"}>
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
                return (
                  user.finalUserName.toLowerCase() === searchQuery.toLowerCase()
                );
              }
            })
            .map((user) => {
              return (
                <ChatBox name={user.finalUserName} key={user.id} id={user.id} setActive={setActive}  active={active}/>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ChatsContainer;
