import React from "react";
import {Link} from "react-router-dom";
// import { Users } from "../data/users";

const Header = () => {
    return (
        <>
        <nav className="navbar sticky-top navbar-dark bg-light d-flex shadow-sm">
            <div className="flex-column m-auto">
                <div className="container p-2">
                    <h1>Compatibility Friend</h1>
                </div>
                <div className="container text-center">
                    <p>Welcome Back (Username)</p>
                </div>
            </div>
            <div className="container-fluid border-top border-secondary m-5 mt-0 mb-0 pt-2 justify-content-around">
                <Link to="/"><p>Home</p></Link>
                <Link to="/Searchboard"><p>Search A Board</p></Link>
                <Link to="/Adminpanel"><p>Admin Panel</p></Link>
                <Link to="/Signup"><p>Sign Up</p></Link>
                <Link to="/Login"><p>Login</p></Link>
            </div>
        </nav>
        </>
    )
}

export default Header;