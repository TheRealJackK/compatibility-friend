import React from "react";
import {Link} from "react-router-dom";
import Logo from "../images/compatibility-friend-logo.png";

const Header = () => {
    return (
        <>
        <nav className="navbar navbar-dark bg-white d-flex justify-content-around shadow-sm">
            <div className="container">
                <h1>Compatibility Friend</h1>
                <img id="app-logo" src={Logo} alt="Logo"></img>
            </div>
            <div className="container-fluid border-top border-secondary m-5 mt-0 mb-0 pt-2">
                <Link to="/"><p>Home</p></Link>
                <Link to="/Choosepreference"><p>Choose Your Preference</p></Link>
                <Link to="/Signup"><p>Sign Up</p></Link>
                <Link to="/Login"><p>Login</p></Link>
            </div>
        </nav>
        </>
    )
}

export default Header;