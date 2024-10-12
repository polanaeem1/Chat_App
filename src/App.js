import { Route, Routes } from "react-router";
import "./App.css";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SingIn/SignIn";
import Home from "./Home/Home";
import ChatRoom from "./Chat_Room/ChatRoom";
import ChatsContainer from "./Chat_Room/ChatsContainer/ChatsContainer";
// import {socket} from './socketIO'

function App() {
  return (
    <div className="App">
      <ChatRoom/>
      {/* <ChatsContainer/> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes> */}
    </div>
  );
}

export default App;
