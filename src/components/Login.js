import React from "react";

const Login = () => {
    return (
        <>
        <div id="buttons" class="container-fluid w-50 mt-5 border border-secondary rounded bg-light shadow">
            <h2 className="text-center">Login</h2>
            <section class="login-clean">
                <form>
                    <h2 class="visually-hidden">Login Form</h2>
                    <div class="mb-3"><input class="form-control" type="email" name="email" placeholder="Email" /></div>
                    <div class="mb-3"><input class="form-control" type="password" name="password" placeholder="Password" /></div>
                    <div class="mb-3"><button class="btn btn-primary d-block w-100" type="submit">Register</button></div>
                </form>
            </section>
        </div>
        </>
    )
}

export default Login;