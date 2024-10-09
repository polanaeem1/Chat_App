import React from "react";
import { FaSearch } from "react-icons/fa";
import { FiVideo } from "react-icons/fi";
import { VscCallOutgoing } from "react-icons/vsc";

const UserData = () => {
  return (
    <div className="userData-container">
      <div className="left-side-userData">
        <h2>Ahmed Mohammed</h2>
        <p>online 10m ago</p>
      </div>
      <div className="right-side">
        <div className="upper-side">
          <FiVideo color="#808074" size={25} />
          <VscCallOutgoing color="#808074" size={25} />
        </div>
        <div className="lower-side">
          <input
            type="text"
            className="search-input"
            placeholder="Search a message"
          />
          <FaSearch color="#808074" size={25} />
        </div>
      </div>
    </div>
  );
};

export default UserData;