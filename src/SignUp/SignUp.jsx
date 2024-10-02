import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import thunder from "../images/thunderbolt.png";
import "./style.css";
import { useState } from "react";

function Logo() {
  return (
    <div className="logo">
      <FontAwesomeIcon icon={faBolt} size="3x" color="yellow" />
      <h1>Passenger</h1>
    </div>
  );
}

function Error({ msg }) {
  return <p className="error">{msg}</p>;
}

function SignupSection(props) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userPass2, setUserPass2] = useState("");
  const [msg, setMsg] = useState("");

  const [user, setUser] = useState({
    userName: "",
    userEmail: "",
    userPass: "",
  });
  const handleSubmit = () => {
    const userReg = /^(?=.*?[A-Za-z]).{8,32}$/;
    const emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const passwordReg =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
    if (userName !== "") {
      if (userReg.test(userName)) {
        setUser({ ...user, userName: userName });
      } else {
        setMsg("Username: between 6 and 16 characters, alpha only");
        return;
      }
    } else {
      setMsg("Username is Empty!");
      return;
    }
    if (userEmail !== "") {
      if (userReg.test(userEmail)) {
        setUser({ ...user, userEmail: userEmail });
      } else {
        setMsg("Invalid Email");
        return;
      }
    } else {
      setMsg("Email is Empty!");
      return;
    }
    if (userPass === userPass2) {
      if (passwordReg.test(userPass)) {
        setUser({ ...user, userPass: userPass });
      } else {
        setMsg(
          "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long."
        );
        return;
      }
    } else {
      setMsg("Password doesn't match");
      return;
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
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <br />
      <input
        className="signup-button"
        type="email"
        name="uEmail"
        placeholder="Email"
        onChange={(e) => {
          setUserEmail(e.target.value);
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
    <>
      <Logo />
      <div className="signup-content">
        <Herosection />
        <SignupSection title="Sign Up" />
      </div>
    </>
  );
}

export default SignUp;
