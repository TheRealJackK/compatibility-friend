import React from "react";
import Logo from "../images/compatibility-friend-logo.png";

const Header = () => {
    return (
        <>
        <nav className="navbar navbar-dark bg-dark d-flex justify-content-around shadow">
            <div className="container pb-4">
                <h1 className="text-white">Compatibility Friend</h1>
                <img src={Logo} alt="Logo"></img>
            </div>
            <div className="container-fluid border-top m-5 mt-0 mb-0">
                <p className="text-white">Link Placeholder</p>
                <p className="text-white">Link Placeholder</p>
                <p className="text-white">Link Placeholder</p>
                <p className="text-white">Link Placeholder</p>
            </div>
        </nav>
        </>
    )
}

export default Header;