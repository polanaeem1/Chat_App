import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, clearUser } from "../../slices/userSlice";
const SideBar = ({ setActive }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="sidebar-container">
      <aside>
        <div className="mainlogo">
          <FontAwesomeIcon icon={faBolt} size="3x" color="yellow" />
        </div>
        <div className="icon-container">
          <FontAwesomeIcon
            className="icon"
            icon={faBars}
            size="2x"
            color="#eee"
          />
          <FontAwesomeIcon
            className="icon"
            icon={faComments}
            size="2x"
            color="#eee"
            onClick={() => {
              setActive(false);
            }}
          />
          <FontAwesomeIcon
            className="icon"
            icon={faUserGroup}
            size="2x"
            color="#eee"
            onClick={() => {
              setActive(true);
            }}
          />
          <FontAwesomeIcon
            className="icon"
            icon={faThumbTack}
            size="2x"
            color="#eee"
          />
        </div>
        <div className="settings">
          <FontAwesomeIcon
            className="icon"
            icon={faGear}
            size="2x"
            color="#eee"
          />
          <FontAwesomeIcon
            className="icon"
            icon={faArrowRightFromBracket}
            flip="horizontal"
            size="2x"
            color="red"
            onClick={() => {
              auth.signOut().then(() => navigate("/"));
              dispatch(clearUser());
            }}
          />
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
