import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Axios from "axios"

const Userdetailedview = () => {
    // useState for users
    const [Users, setUsers] = useState([])
    const {id} = useParams()

    // get requests for users
    useEffect(() => {
        Axios.get('http://localhost:3001/api/getuser')
        .then((response) => {
            setUsers(response.data)
        })
    }, [])

    return(
        <>
        {Users.filter(user => Number(user.userId) === Number(id)).map(user => (
                <div className="card-body bg-light m-3 shadow border border-secondary rounded" key={user.userId}>
                    <h4 className="card-title"><strong>Username: </strong>{user.userName}</h4>
                    <p className="card-text"><strong>User ID: </strong>{user.userId}</p>
                    <p className="card-text"><strong>First Name: </strong>{user.firstName}</p>
                    <p className="card-text"><strong>Last Name: </strong>{user.lastName}</p>
                    <p className="card-text"><strong>Email: </strong>{user.email}</p>
                    <p className="card-text"><strong>Privelages: </strong>{user.privelages}</p>
                    <p className="card-text"><strong>Preference: </strong>{user.preference}</p>
                    <div className="d-flex flex-row">
                        <Link className="px-2 text-danger" to="/Edituser">
                            <p className="card-text ">Edit</p>
                        </Link>
                        <Link className="px-2 text-danger" to="/Deleteuser">
                            <p className="card-text ">Delete</p>
                        </Link> 
                    </div>
                </div>
            ))}
        </>
    )
}

export default Userdetailedview;