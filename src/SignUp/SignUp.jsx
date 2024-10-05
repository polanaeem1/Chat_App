
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import thunder from "../images/image.png";
import "./style.css";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

export function Logo() {
  return (
    <div className="SignUp-logo">
      <FontAwesomeIcon icon={faBolt} size="3x" color="yellow" />
      <h1>Passenger</h1>
    </div>
  );
}

function Error({ msg }) {
  return <p className="error">{msg}</p>;
}

function SignupSection(props) {
  const auth = getAuth(app);
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userPass2, setUserPass2] = useState("");
  const [msg, setMsg] = useState("");

  const [finalUserName, setFinalUserName] = useState("");
  const [finalUserEmail, setFinalUserEmail] = useState("");
  const [finalUserPass, setFinalUserPass] = useState("");
  const handleUser = (e) => {
    const userReg = /^(?=.*?[A-Za-z]).{8,32}$/;
    if (e !== "") {
      if (userReg.test(e)) {
        setFinalUserName(e);
      } else {
        setMsg("Username: between 6 and 16 characters, alpha only");
        return;
      }
    } else {
      setMsg("Username is Empty!");
      return;
    }
  };
  const handleEmail = (e) => {
    const emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (e !== "") {
      if (emailReg.test(e)) {
        setFinalUserEmail(e);
      } else {
        setMsg("Invalid Email");
        return;
      }
    } else {
      setMsg("Email is Empty!");
      return;
    }
  };
  const handlePass = () => {
    const passwordReg =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
    if (userPass === userPass2) {
      if (passwordReg.test(userPass)) {
        setFinalUserPass(userPass);
      } else {
        setMsg(
          "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long."
        );
      }
    } else {
      setMsg("Password doesn't match");
      return;
    }
  };
  const handleSubmit = () => {
    if (finalUserName !== "" && finalUserEmail !== "" && finalUserPass !== "") {
      setMsg("");
      createUserWithEmailAndPassword(auth, finalUserEmail, finalUserPass);
    } else {
      setMsg("Please fill all the fields");
    }
  };
  return (
    <div className="SignupSection">
      <h1 className="signup-title">{props.title}</h1>
      <input
        className="signup-button"
        type="text"
        name="uName"
        placeholder="Username"
        onBlur={(e) => {
          handleUser(e.target.value);
        }}
      />
      <br />
      <input
        className="signup-button"
        type="email"
        name="uEmail"
        placeholder="Email"
        onBlur={(e) => {
          handleEmail(e.target.value);
        }}
      />
      <br />
      <input
        className="signup-button"
        type="password"
        name="upassword"
        placeholder="Password"
        onChange={(e) => {
          setUserPass(e.target.value);
        }}
        onBlur={() => handlePass()}
      />
      <br />
      <input
        className="signup-button"
        type="password"
        name="upassword2"
        placeholder="Confirm Password"
        onChange={(e) => {
          setUserPass2(e.target.value);
        }}
        onBlur={() => handlePass()}
      />
      <Error msg={msg} />
      <input
        className="signup-button"
        type="submit"
        value="Sign Up"
        onClick={() => {
          handleSubmit();
        }}
      />
      <div className="login">
        <p className="not-guest">Already Have An Account?</p>
        <div className="login-container">
          <a className="login-href" href="#">
            Login
          </a>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="white" />
        </div>
      </div>
    </div>
  );
}

function Herosection() {
  return (
    <div className="hero-section">
      <h2>Start connecting in seconds!</h2>
      <img src={thunder} alt="thunder-bolt" />
    </div>
  );
}


function SignUp() {
  return (
    <div className="signup-container">
      <Logo />
      <div className="signup-content">
        <Herosection />
        <SignupSection title="Sign Up" />
      </div>
    </div>
  );
}

export default SignUp;
