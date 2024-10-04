import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../images/image.png";
import "./style.css";
import { FaArrowRight } from "react-icons/fa";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <svg
            width="33"
            height="53"
            viewBox="0 0 33 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 26.5L2.44922 2.89844C2.62109 1.24219 3.78984 0 5.18203 0H19.6711C20.9602 0 22 1.25254 22 2.80527C22 3.13652 21.9484 3.47813 21.8539 3.78867L17.875 16.5625H29.8461C31.582 16.5625 33 18.2602 33 20.3615C33 21.1275 32.8109 21.8729 32.45 22.5043L15.9328 51.5922C15.4258 52.4824 14.5922 53.0104 13.707 53.0104H13.4578C12.1086 53.0104 11.0086 51.6854 11.0086 50.0602C11.0086 49.8221 11.0344 49.584 11.0859 49.3459L15.125 29.8125H2.75C1.22891 29.8125 0 28.3322 0 26.5Z"
              fill="#E4EE1C"
            />
          </svg>
          <h1 className="logo-text">Passenger</h1>
        </div>
      </div>
      <div class="Container ">
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
