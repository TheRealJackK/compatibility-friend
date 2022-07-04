import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>
        <footer className="footer">
            <span>
                <h2>Compatibility Friend</h2>
                <img src="https://nceptior.sirv.com/compatibilityfriend/compatibility-friend-logo.png" alt="logo" />
            </span>
            <div></div>
            <span>
                <Link to="/"><p>Home</p></Link>
                <Link to="/Searchboard"><p>Search a Board</p></Link>
                <Link to="/Adminpanel"><p>Admin Panel</p></Link>
                <Link to="/Signup"><p>Sign Up</p></Link>
                <Link to="/Login"><p>Login</p></Link>
            </span>
            <div></div>
            <span>
                <h2>Developed by Casa de EZZ</h2>
                <img src="https://nceptior.sirv.com/casadeezz.com/cde-logo-svg.svg" alt="https://www.casa-de-ezz.com"/>
                <Link to={{pathname: "https://casa-de-ezz.com"}}><h2>https://casa-de-ezz.com</h2></Link>
            </span>
        </footer>
        </>
    )
}

export default Footer;