import React from "react";

const Signup = () => {
    return (
        <>
        <div id="buttons" className="container-fluid w-50 mt-5 border border-secondary rounded bg-light shadow">
            <h2 className="text-center">Sign Up</h2>
            <section className="login-clean">
                <form>
                    <h2 className="visually-hidden">Login Form</h2>
                    <div className="mb-3"><input className="form-control" type="email" name="email" placeholder="Email" /></div>
                    <div className="mb-3"><input className="form-control" type="password" name="password" placeholder="Password" /></div>
                    <div className="mb-3"><input className="form-control" type="password" name="password" placeholder="Confirm Password" /></div>
                    <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit">Register</button></div>
                </form>
            </section>
        </div>
        </>
    )
}

export default Signup;