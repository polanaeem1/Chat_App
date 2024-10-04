import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../images/image.png";
import "./style.css";
import { FaArrowRight } from "react-icons/fa";
import { Logo } from "../SignUp/SignUp";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="header">
        <Logo/>
      </div>
      <div class="Container">
        {/* left side */}

        <div class="text-info container-fluid col-md-6 p-5 d-flex flex-column justify-content-center position-relative">
          <h2 class="cta-text">Start connecting in seconds!</h2>
          <div class="img-text">
            <img src={image} alt="" />
          </div>
        </div>
        {/* right side */}
        
      </div>
    </>
  );
};

export default SignIn;
