import React from "react";
import {Link} from "react-router-dom";
import CDE from "../images/cde-logo-svg.svg";

const Footer = () => {
    return (
        <>
        <footer className="footer py-3 mt-4 bg-light">
            <div className="nav justify-content-around border-bottom border-secondary pb-3 m-5 mt-0 mb-0">
                <Link to="/"><p>Home</p></Link>
                <Link to="/Searchboard"><p>Search A Board</p></Link>
                <Link to="/Adminpanel"><p>Admin Panel</p></Link>
                <Link to="/Signup"><p>Sign Up</p></Link>
                <Link to="/Login"><p>Login</p></Link>
            </div>
            <p className="text-center text-muted">Developed By - Casa de EZZ</p>
            <div className="d-flex justify-content-center">
                <img id="company-logo" src={CDE} alt="Company Logo"/>
            </div>
        </footer>
        </>
    )
}

export default Footer;