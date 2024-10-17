import React, { useState } from "react";
import Searchicon from "../../../src/images/searchIcon.png";
import "./style.css";

const ChatSearch = ({ searchQuery, setSearchQuery }) => {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="Search-Box">
      <input
        type="text"
        placeholder="Search a chat"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <img
        src={Searchicon}
        alt="Search Icon"
        className="search-icon"
      />
    </div>
  );
};
export default ChatSearch;
