import React from "react";
// import {useState, useEffect} from "react"
import {Link} from "react-router-dom";
import HomeIcon from "../icons/home.svg";
import SearchIcon from "../icons/search.svg";
import AdminIcon from "../icons/admin-panel.svg";
import SignupIcon from "../icons/signup.svg";
import LoginIcon from "../icons/login.svg";

const Header = () => {

    // const [DarkMode, setDarkMode] = useState(false)

    // useEffect(() => {
    //     if(DarkMode === 'false') {
    //     document.body.classList.add("bg-light")
    //     } else {
    //     document.body.classList.add("bg-dark")
    //     }
    // }, [DarkMode])

    return (
        <>
        <nav className="navbar sticky-top navbar-dark bg-light d-flex shadow">
            <div className="flex-column m-auto">
                <div className="container">
                    <h1>Compatibility Friend</h1>
                    {/* <p className="text-center">Toggle Dark Mode<input onChange={setDarkMode(true)} className="mx-1" type="checkbox" /></p> */}
                </div>
            </div>
            <div className="container-fluid border-top border-secondary m-5 mt-0 mb-0 pt-2 justify-content-evenly">
                <Link className="px-1 text-decoration-none" to="/compatibility-friend"><p>Home<img src={HomeIcon} alt="homeicon" /></p></Link>
                <Link className="px-1 text-decoration-none" to="/Searchboard"><p>Search A Board<img src={SearchIcon} alt="searchicon" /></p></Link>
                <Link className="px-1 text-decoration-none" to="/Adminpanel"><p>Admin Panel<img src={AdminIcon} alt="adminicon" /></p></Link>
                <Link className="px-1 text-decoration-none" to="/Signup"><p>Sign Up<img src={SignupIcon} alt="singupicon" /></p></Link>
                <Link className="px-1 text-decoration-none" to="/Login"><p>Login<img src={LoginIcon} alt="loginicon" /></p></Link>
            </div>
        </nav>
        </>
    )
}

export default Header;