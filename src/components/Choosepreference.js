import React from "react";

const Choosepreference = () => {
    return (
        <>
            <div className="container d-flex justify-content-center mt-5 mb-5">
                <h2>Chip Preference</h2>
            </div>
            <div className="container d-flex justify-content-evenly mb-5">
                <div className="form-check"><input className="form-check-input" type="radio" /><label className="form-check-label">AMD</label></div>
                <div className="form-check"><input className="form-check-input" type="radio" /><label className="form-check-label">INTEL</label></div>
            </div>
        </>
    )
}

export default Choosepreference;