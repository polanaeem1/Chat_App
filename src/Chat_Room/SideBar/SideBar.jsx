import React from 'react'
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <div className='sidebar-container'>
      <aside>
        <div className="mainlogo">
        <FontAwesomeIcon icon={faBolt} size="3x" color="yellow" />
        </div>
        <div className="icon-container">
        <FontAwesomeIcon className='icon' icon={faBars} size="2x" color="#eee" />
        <FontAwesomeIcon className='icon' icon={faComments} size="2x" color="#eee" />
        <FontAwesomeIcon className='icon' icon={faUserGroup} size="2x" color="#eee" />
        <FontAwesomeIcon className='icon' icon={faThumbTack} size="2x" color="#eee" />
        </div>
        <div className="settings">
        <FontAwesomeIcon className='icon' icon={faGear} size="2x" color="#eee" />
        <FontAwesomeIcon className='icon' icon={faArrowRightFromBracket} flip="horizontal" size="2x" color="red" />
        </div>
      </aside>
    </div>
  )
}

export default SideBar