import { Route, Routes } from "react-router";
import "./App.css";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SingIn/SignIn";
import Home from "./Home/Home";
import ChatRoom from "./Chat_Room/ChatRoom";
import ChatsContainer from "./Chat_Room/ChatsContainer/ChatsContainer";
import { useUserStore } from "./userStore";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
const {currentUser,isLoading,fetchUserInfo} =useUserStore()

useEffect(()=>{
  const unSub =onAuthStateChanged(auth,(user)=>{
    fetchUserInfo(user?.uid)
  })
  return ()=>unSub();
},[fetchUserInfo])


if(isLoading) return <div className="loading">Loading......</div>

  return (
    <div className="App">
      
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/ChatRoom" element={<ChatRoom/>} />
      </Routes> 
    </div>
  );
}

export default App;
