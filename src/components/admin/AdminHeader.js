import React from "react";
// import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";
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

    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
        <Link to="/" class="navbar-brand text-secondary px-2"><h2>Compatibility Friend</h2></Link>
        <button class="navbar-toggler px-2" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <Link to="/" class="nav-link"><p>Home <img src={HomeIcon} alt="home"/></p></Link>
                </li>
                <li class="nav-item">
                    <Link to="/Searchboard" class="nav-link"><p>Search a board <img src={SearchIcon} alt="search"/></p></Link>
                </li>
                <li class="nav-item">
                    <Link to="/Adminpanel" class="nav-link"><p>Admin Panel <img src={AdminIcon} alt="admin"/></p></Link>
                </li>
                <li class="nav-item active">
                    <Link to="/Signup" class="nav-link"><p>Signup <img src={SignupIcon} alt="signup"/></p></Link>
                </li>
                <li class="nav-item active">
                    <Link to="/Login" class="nav-link"><p>Login <img src={LoginIcon} alt="login"/></p></Link>
                </li>
                </ul>
            </div>
        </nav>
        </>
    )

    // return(
    //     <>
    //     <nav className="navbar navbar-light sticky-top d-flex shadow">
    //         <div className="flex-column m-auto">
    //             <div className="container">
    //                 <h1>Compatibility Friend</h1>
    //                 {/* <p className="text-center">Toggle Dark Mode<input onChange={setDarkMode(true)} className="mx-1" type="checkbox" /></p> */}
    //             </div>
    //         </div>
    //         <div className="collapse navbar-collapse">
    //             <ul className="navbar-nav container-fluid border-top border-secondary m-5 mt-0 mb-0 pt-2 justify-content-evenly">
    //                 <li className="nav-item"><Link className="nav-link px-1 text-decoration-none" to="/"><p>Home<img src={HomeIcon} alt="homeicon" /></p></Link></li>
    //                 <li className="nav-item"><Link className="nav-link px-1 text-decoration-none" to="/Searchboard"><p>Search A Board<img src={SearchIcon} alt="searchicon" /></p></Link></li>
    //                 <li className="nav-item"><Link className="nav-link px-1 text-decoration-none" to="/Adminpanel"><p>Admin Panel<img src={AdminIcon} alt="adminicon" /></p></Link></li>
    //                 <li className="nav-item"><Link className="nav-link px-1 text-decoration-none" to="/Signup"><p>Sign Up<img src={SignupIcon} alt="singupicon" /></p></Link></li>
    //                 <li className="nav-item"><Link className="nav-link px-1 text-decoration-none" to="/Login"><p>Login<img src={LoginIcon} alt="loginicon" /></p></Link></li>
    //             </ul>
    //         </div>
    //     </nav>
    //     </>
    // )
}

export default AdminHeader;