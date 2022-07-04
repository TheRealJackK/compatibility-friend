import React from "react";
import {Link} from "react-router-dom";

const Header = () => {

    return(
        <>
        <header className="header">
            <div>
                <h1>Compatibility Friend</h1>
            </div>
            <span>
                <Link className="nav" to="/"><p>Home</p></Link>
                <Link className="nav" to="/Searchboard"><p>Search a Board</p></Link>
                <Link className="nav" to="/Adminpanel"><p>Admin Panel</p></Link>
                <Link className="nav" to="/Signup"><p>Sign Up</p></Link>
                <Link className="nav" to="/Login"><p>Login</p></Link>
            </span>
            <div id="hamburger-container">
            <img id="hamburger-icon" src="https://nceptior.sirv.com/casadeezz.com/hamburger.svg" alt="hamburger" />
                <ul id="hamburger-links">
                    <li><Link to="/"><p>Home</p></Link></li>
                    <li><Link to="/Searchboard"><p>Search a Board</p></Link></li>
                    <li><Link to="/Adminpanel"><p>Admin Panel</p></Link></li>
                    <li><Link to="/Signup"><p>Sign Up</p></Link></li>
                    <li><Link to="/Login"><p>Login</p></Link></li>
                </ul>
            </div>
        </header>
        </>
    )
}

export default Header;