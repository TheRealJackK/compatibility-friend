import React from "react";
import {Link} from "react-router-dom";
import Logo from "../images/compatibility-friend-logo.png";

const Header = () => {
    return (
        <>
        <nav className="navbar navbar-dark bg-light d-flex justify-content-around shadow-sm">
            <div className="container pb-4">
                <h1>Compatibility Friend</h1>
                <img src={Logo} alt="Logo"></img>
            </div>
            <div className="container-fluid border-top m-5 mt-0 mb-0">
                <Link to="/Choosepreference"><p>Choose Your Preference</p></Link>
                <p>Link Placeholder</p>
                <p>Link Placeholder</p>
                <p>Link Placeholder</p>
            </div>
        </nav>
        </>
    )
}

export default Header;