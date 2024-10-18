import React from 'react'
import './style.css'
import profile from "C:/Users/Infotech/chat app/Chat_App/src/images/Ellipse 2.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import {faLink} from "@fortawesome/free-solid-svg-icons";
import photo from "C:/Users/Infotech/chat app/Chat_App/src/images/profile p.png"
const ChatDetails = () => {
  return (
    <div className='chat-details-container'>
      <div className='c-d-photo'><img src={profile} alt="profile photo" /></div>
      <p className='c-d-contactname'>Ahmed Zewail</p>

      <div className='c-d-icons'>
      <FontAwesomeIcon icon= {faBell}  style={{color: "#b8babc",}} size='3x'
      className='icon'/>
      <FontAwesomeIcon className='icon' icon={faThumbTack} size="3x" color="#b8babc" />
      </div>
      <div className='c-photos'>
      <FontAwesomeIcon icon={faImages} style={{color: "#c7c7c7",}} size='2x' className='photo-i'/>
        <span className='photos'>Photos (1)</span> 
       <span className='see'>see all</span>
       <div className='allPhotos'>
        <img src={photo} alt="all photos" className='photo1'/>
       </div>
         </div>

      <div className='c-files'>
      <FontAwesomeIcon icon={faFileLines} style={{color: '#cdced0'}} size='2x' className='file-i'/> 
      <span className='files'>Files (1)</span>
      <span className='see'>see all</span>
      <div>
      <iframe
        src="./ECOM ASS.pdf"
        width="100%"
        height="50px"
        title="PDF Viewer"
      >ecom.pdf</iframe>
      </div>
      </div>

      <div className='c-links'>
      <FontAwesomeIcon icon= {faLink} style={{color: "#c7c7c7",}} size='2x'
      className='link-i'/>
       <span className='links'>Links (1)</span> 
      <span className='see'>see all</span>
      <a href="www.google.com">Google</a>
      </div>
    
    
    </div>
  )
}

export default ChatDetails