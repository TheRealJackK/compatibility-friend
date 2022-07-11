import React from "react";
import { useState } from "react";
import Axios from "axios";

const Signup = () => {

    const [username, setUsername] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [preference, setPreference] = useState("AMD")
    const [password, setPassword] = useState("")

    const submitUser = (event) => {
        event.preventDefault();
        Axios.post("http://localhost:3001/api/insertuser", {
            username: username,
            firstName: firstName,
            lastName: lastName,
            email: email,
            preference: preference,
            password: password,
        })
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <>
        <span className="page">
            <h2>Sign Up</h2>
            <form>
                <div>
                    <h3>Sign Up</h3>
                    <label>Username</label>
                    <input onChange={(e) => {setUsername(e.target.value)}} type="text" name="username" placeholder="Username" />
                    <label>First Name</label>
                    <input onChange={(e) => {setFirstName(e.target.value)}} type="text" name="firstName" placeholder="First Name" />
                    <label>Last Name</label>
                    <input onChange={(e) => {setLastName(e.target.value)}} type="text" name="lastName" placeholder="Last Name" />
                    <label>Email</label>
                    <input onChange={(e) => {setEmail(e.target.value)}} type="text" name="email" placeholder="Email" />
                    <label>Preference</label>
                    <select onChange={(e) => {setPreference(e.target.value)}}>
                        <option>AMD</option>
                        <option>Intel</option>
                    </select>
                    <label>Password</label>
                    <input onChange={(e) => {setPassword(e.target.value)}} type="password" name="password" placeholder="Password" />
                    <label>Confirm Password</label>
                    <input className="form-control" type="password" name="password" placeholder="Confirm Password" />
                    <button id="submit" onClick={submitUser} type="button">Register</button>
                </div>
            </form>
        </span>
        </>
    )
}

export default Signup;