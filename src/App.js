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
import { Provider } from "react-redux";
import { store } from "./store";
// import {socket} from './socketIO'

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
    <Provider store={store}>
      <div className="App">
        <ChatRoom />
        {/* <ChatsContainer/> */}
        {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes> */}
      </div>
    </Provider>
  );
}

export default App;
