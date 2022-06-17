import React from "react";
// import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";
import Logo from "../../icons/compatibility-friend-logo.png"
import HomeIcon from "../../icons/home.svg";
import SearchIcon from "../../icons/search.svg";
import AdminIcon from "../../icons/admin-panel.svg";
import SignupIcon from "../../icons/signup.svg";
import LoginIcon from "../../icons/login.svg";

const AdminHeader = () => {

    // const [DarkMode, setDarkMode] = useState(false)

    // useEffect(() => {
    //     if(DarkMode === false) {
    //     document.body.classList.add("bg-light")
    //     } else {
    //     document.body.classList.add("bg-dark")
    //     }
    // }, [DarkMode])

    return(
        <>
        <nav className="navbar navbar-light bg-light sticky-top shadow">
            <div className="flex-column m-auto">
                <div className="container">
                    <h1>Compatibility Friend</h1>
                </div>
            </div>
            <div className="navbar-nav container-fluid border-top pb-3 m-5 mt-0 mb-0 border-secondary d-flex flex-row justify-content-evenly">
                <p className="nav-item"><Link className="nav-link text-decoration-none" to="/"><p>Home<img src={HomeIcon} alt="homeicon" /></p></Link></p>
                <p className="nav-item"><Link className="nav-link text-decoration-none" to="/Searchboard"><p>Search A Board<img src={SearchIcon} alt="searchicon" /></p></Link></p>
                <p className="nav-item"><Link className="nav-link text-decoration-none" to="/Adminpanel"><p>Admin Panel<img src={AdminIcon} alt="adminicon" /></p></Link></p>
                <p className="nav-item"><Link className="nav-link text-decoration-none" to="/Signup"><p>Sign Up<img src={SignupIcon} alt="singupicon" /></p></Link></p>
                <p className="nav-item"><Link className="nav-link text-decoration-none" to="/Login"><p>Login<img src={LoginIcon} alt="loginicon" /></p></Link></p>
            </div>
        </nav>
        </>
    )
}

export default AdminHeader;