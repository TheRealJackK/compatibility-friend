import React from "react";
import {Link} from "react-router-dom";
import HomeIcon from "../icons/home.svg";
import SearchIcon from "../icons/search.svg";
import AdminIcon from "../icons/admin-panel.svg";
import SignupIcon from "../icons/signup.svg";
import LoginIcon from "../icons/login.svg";
import CDE from "../icons/cde-logo-svg.svg";

const Footer = () => {
    return (
        <>
        <footer className="footer py-3 mt-4 bg-light">
            <div className="nav justify-content-evenly border-bottom border-secondary pb-3 m-5 mt-0 mb-0">
                <Link className="px-1 text-decoration-none" to="/compatibility-friend"><p>Home<img src={HomeIcon} alt="homeicon" /></p></Link>
                <Link className="px-1 text-decoration-none" to="/Searchboard"><p>Search A Board<img src={SearchIcon} alt="searchicon" /></p></Link>
                <Link className="px-1 text-decoration-none" to="/Adminpanel"><p>Admin Panel<img src={AdminIcon} alt="adminicon" /></p></Link>
                <Link className="px-1 text-decoration-none" to="/Signup"><p>Sign Up<img src={SignupIcon} alt="singupicon" /></p></Link>
                <Link className="px-1 text-decoration-none" to="/Login"><p>Login<img src={LoginIcon} alt="loginicon" /></p></Link>
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