import { Route, Routes } from "react-router";
import "./App.css";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SingIn/SignIn";
import Home from "./Home/Home";
import ChatRoom from "./Chat_Room/ChatRoom";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/ChatRoom" element={<ChatRoom />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
