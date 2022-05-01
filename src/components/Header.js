import React from "react";
import {Link} from "react-router-dom";
// import Logo from "../images/compatibility-friend-logo.png";

const Header = () => {
    return (
        <>
        <nav className="navbar sticky-top navbar-dark bg-light d-flex shadow-sm">
            <div className="flex-column m-auto">
                <div className="container p-2">
                    <h1>Compatibility Friend</h1>
                </div>
                {/* <img className="align-items-center" id="app-logo" src={Logo} alt="Logo"></img> */}
            </div>
            <div className="container-fluid border-top border-secondary m-5 mt-0 mb-0 pt-2 justify-content-around">
                <Link to="/"><p>Home</p></Link>
                <Link to="/Choosepreference"><p>Choose Your Preference</p></Link>
                <Link to="/Signup"><p>Sign Up</p></Link>
                <Link to="/Login"><p>Login</p></Link>
                <Link to="/Adminpanel"><p>Admin Panel</p></Link>
            </div>
        </nav>
        </>
    )
}

export default Header;