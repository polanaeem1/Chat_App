import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import thunder from '../images/thunderbolt.png'
import './style.css' ;
import { useState } from 'react';

function Logo(){
    return (
        <div className="logo">
            <FontAwesomeIcon icon={faBolt} size='3x' color='yellow'/>
            <h1>Passenger</h1>
        </div>
    )
}

function Button(props){
    return <input className='signup-button' type={props.type} value={props.value} name={props.name} placeholder={props.placeholder} onChange={(e) => {
        if (props.name == 'uName')
        {
            props.setUser({...props.user, userName:e.target.value})
        }
        else if (props.name == 'uEmail')
        {
            props.setUser({...props.user, userEmail:e.target.value})
        }
        else if (props.name == 'upassword')
        {
            props.setUser({...props.user, userPass:e.target.value})
        }
    }} />;
}
function SignupSection(props){
    const [user,setUser] = useState({
        userName: '',
        userEmail: '',
        userPass: ''
    })
    return (
        <div className="SignupSection">
            <h1 className='signup-title'>{props.title}</h1>
            <Button user={user} setUser={setUser} type="text" name="uName" placeholder="Username"/>
            <br />
            <Button user={user} setUser={setUser} type="email" name="uEmail" placeholder="Email"/>
            <br />
            <Button user={user} setUser={setUser} type="password" name="upassword" placeholder="Password"/>
            <br />
            <Button type="password" name="upassword2" placeholder="Confirm Password"/>
            <br />
            <Button type="submit" value="Sign Up"/>
            <div className="login">
            <p className='not-guest'>Already Have An Account?</p>
            <div className='login-container'>
            <a className='login-href' href="#">Login</a>
            <FontAwesomeIcon icon={faArrowRight} size='1x' color='white'/>
            </div>
            </div>
        </div>
    )
}

function Herosection(){
    return (
        <div className='hero-section'>
            <h2>Start connecting in seconds!</h2>
            <img src={thunder} alt="thunder-bolt"/>
        </div>
    )
}

function SignUp(){
    return (
        <>
        <Logo />
        <div className='signup-content'>
        <Herosection />
        <SignupSection title="Sign Up"/>
        </div>
        </>
    )
}

export default SignUp;