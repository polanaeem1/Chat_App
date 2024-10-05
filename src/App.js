import { Route, Routes } from "react-router";
import "./App.css";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SingIn/SignIn";
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      {/* <SignUp /> */}
      <SignIn/>
=======
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
>>>>>>> 7b2d42f1d3f9b35f19c0af6752c51d50a0777a2b
    </div>
  );
}

export default App;
