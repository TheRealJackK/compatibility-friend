import React from "react";
import Axios from "axios";
import { useState } from "react";

const Login = () => {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [loginMessage, setLoginMessage] = useState("")

    const login = (event) => {
        event.preventDefault();
        Axios.post("http://localhost:3001/api/loginuser", {
            userName: userName,
            password: password,
        })
        .then((response) => {
            if (response.data.message) {
                setLoginMessage(response.data.message)
            } else {
                setLoginMessage("Hello " + response.data[0].userName + "! Redirecting you now.")
            }
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            window.location.href = "/"
        })
    }

    return (
        <>
        <div id="buttons" className="container-fluid w-50 mt-5 border border-secondary rounded bg-light shadow">
            <h2 className="text-center">Login</h2>
            <section className="login-clean">
                <form>
                    <h2 className="visually-hidden">Login Form</h2>
                    <div className="mb-3"><input onChange={(e) => {setUserName(e.target.value)}} className="form-control" type="text" name="userName" placeholder="Username" /></div>
                    <div className="mb-3"><input onChange={(e) => {setPassword(e.target.value)}} className="form-control" type="password" name="password" placeholder="Password" /></div>
                    <div className="mb-3"><button to ="/" onClick={login} className="btn btn-primary d-block w-100" type ="submit">Login</button></div>
                    <div className="mb-3">{loginMessage}</div>
                </form>
            </section>
        </div>
        </>
    )
}

export default Login;