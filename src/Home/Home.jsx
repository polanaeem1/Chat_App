import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from "@fortawesome/free-solid-svg-icons";

export function Logo() {
  return (
    <div className="SignUp-logo">
      <FontAwesomeIcon icon={faBolt} size="x" color="yellow" />
      <h1>Passenger</h1>
    </div>
  );
}


const Home = () => {
  return (
    <div className='home-page'>
      <nav className='home-nav'>
        <Logo />
      </nav>
      <div className='section-container'>
      <div className='home-c1'>Connect <br /><span className='home-grid'> Easily with</span> <br /> Anyone</div>
      <div className='home-c2'>
        <p>Stay connected with your friends,family effortlessly.
          <br /> Our messaging app allows you to send instant <br />
          messages, and create group conversations <br /> sign up now and start connecting, or log in to <br /> continue your conversation!
        </p>
        <br />
        <div className='home-btns'>
        <button className='home-log'>Log in   →</button>
        <button className='home-sign'>Sign up   →</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home;