import React from "react";
import { useState } from "react";
import Axios from "axios";

const Edituser = () => {

    const [username, setUsername] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [preference, setPreference] = useState("")
    const [password, setPassword] = useState("")

    const submitEdit = () => {
        Axios.post('http://localhost:3001/api/edituser', {
            username: username,
            firstName: firstName,
            lastName: lastName,
            email: email,
            preference: preference,
            password: password
        })
        .then((response) => {
            console.log(response)
        })
    }

    return (
        <>
        <div id="buttons" className="container-fluid w-50 mt-5 border border-secondary rounded bg-light shadow">
            <h2 className="text-center">Sign Up</h2>
            <section className="login-clean">
                <form>
                    <h2 className="visually-hidden">Login Form</h2>
                    <div className="mb-3"><input onChange={(e) => {setUsername(e.target.value)}} className="form-control" type="text" name="username" placeholder="Username" /></div>
                    <div className="mb-3"><input onChange={(e) => {setFirstName(e.target.value)}} className="form-control" type="text" name="firstName" placeholder="First Name" /></div>
                    <div className="mb-3"><input onChange={(e) => {setLastName(e.target.value)}} className="form-control" type="text" name="lastName" placeholder="Last Name" /></div>
                    <div className="mb-3"><input onChange={(e) => {setEmail(e.target.value)}} className="form-control" type="email" name="email" placeholder="Email" /></div>
                    <div className="my-3">
                        <div>
                            <label className="mb-3 mx-1">Preference</label>
                        </div>
                        <div className="mx-1">
                            <select onChange={(e) => {setPreference(e.target.value)}}>
                                <option>AMD</option>
                                <option>Intel</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-3 my-3"><input onChange={(e) => {setPassword(e.target.value)}} className="form-control" type="password" name="password" placeholder="Password" /></div>
                    <div className="mb-3"><input className="form-control" type="password" name="password" placeholder="Confirm Password" /></div>
                    <div className="mb-3"><button onClick={submitEdit()} className="btn btn-primary d-block w-100" type="button">Register</button></div>
                </form>
            </section>
        </div>
        </>
    )
}

export default Edituser;