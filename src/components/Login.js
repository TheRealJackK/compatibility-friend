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
        <span className="page">
            <h2>Login</h2>
            <form>
                <div>
                    <h3>Login</h3>
                    <label>Username</label>
                    <input onChange={(e) => {setUserName(e.target.value)}} type="text" name="userName" placeholder="Username" />
                    <label>Password</label>
                    <input onChange={(e) => {setPassword(e.target.value)}} className="form-control" type="password" name="password" placeholder="Password" />
                    <button id="submit" to ="/" onClick={login} type ="submit">Login</button>
                    <div>{loginMessage}</div>
                </div>
            </form>
        </span>
        </>
    )
}

export default Login;