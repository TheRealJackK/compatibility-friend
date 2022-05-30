import Axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"

const Adminpanel = () => {
    // useState for motherboards
    const [Motherboards, setMotherboards] = useState([])
    // useState for cpus
    const [Cpus, setCpus] = useState([])
    // useState for users
    const [Users, setUsers] = useState([])
    // loadingBoards spinner
    const [loadingBoards, setLoadingBoards] = useState(false)
    // loadingCpus spinner
    const [loadingCpus, setLoadingCpus] = useState(false)
    // LoadingUsers spinner
    const [loadingUsers, setLoadingUsers] = useState(false)
 
    // get request for motherboards
    useEffect(() => {
        setLoadingBoards(true)
        Axios.get('http://localhost:3001/api/getmotherboard')
        .then((response) => {
            setMotherboards(response.data)
            setLoadingBoards(false)
        })
    }, [])

    // get requests for cpus
    useEffect(() => {
        setLoadingCpus(true)
        Axios.get('http://localhost:3001/api/getcpu')
        .then((response) => {
            setCpus(response.data)
            setLoadingCpus(false)
        })
    }, [])

    // get requests for users
    useEffect(() => {
        setLoadingUsers(true)
        Axios.get('http://localhost:3001/api/getuser')
        .then((response) => {
            setUsers(response.data)
            setLoadingUsers(false)
        })
    }, [])

    if(loadingBoards && loadingCpus && loadingUsers === true) {
        return (
            <>
            <div class="d-flex justify-content-center py-5">
                <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            </>
        ) 
    } else {
        return (
            <>
            <div className="d-flex justify-content-center">
                <div className="bg-light my-5 mx-1 p-1 border border-dark rounded">
                    <Link className="text-decoration-none" to="/Createcpu">
                        Add a new CPU
                    </Link>
                </div>
                <div className="bg-light my-5 mx-1 p-1 border border-dark rounded">
                    <Link className="text-decoration-none" to="/Createboard">
                        Add a new Motherboard
                    </Link>
                </div>
            </div>
            <h1 className="text-center">List of Users</h1>
            <div className="card-group">
                {Users.map(user => (
                    <div className="card-body bg-light m-3 shadow border border-secondary rounded" key={user.userId}>
                        <h4 className="card-title"><strong>Username: </strong>{user.userName}</h4>
                        <p className="card-text"><strong>User ID: </strong>{user.userId}</p>
                        <p className="card-text"><strong>First Name: </strong>{user.firstName}</p>
                        <p className="card-text"><strong>Last Name: </strong>{user.lastName}</p>
                        <p className="card-text"><strong>Email: </strong>{user.email}</p>
                        <p className="card-text"><strong>Privelages: </strong>{user.privelages}</p>
                        <p className="card-text"><strong>Preference: </strong>{user.preference}</p>
                        <div className="d-flex flex-row">
                            <Link className="text-danger" to={`Userdetailedview/${user.userId}`}>
                                <p className="card-text text-danger p-1">Manage User</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <h1 className="text-center">List of Boards</h1>
            <div className="card-group">
                {Motherboards.map(motherboard => (
                    <div className="card-body bg-light m-3 shadow border border-secondary rounded" key={motherboard.boardId}>
                        <img className="card-img-top" src={motherboard.boardImgPath} alt={motherboard.productName}/>
                        <h4 className="card-title"><strong>Product Name: </strong>{motherboard.productName}</h4>
                        <p className="card-text"><strong>Series: </strong>{motherboard.series}</p>
                        <p className="card-text"><strong>Manufactorer: </strong>{motherboard.manufactorer}</p>
                        <p className="card-text"><strong>Chipset: </strong>{motherboard.chipset}</p>
                        <p className="card-text"><strong>Socket: </strong>{motherboard.socket}</p>
                        <p className="card-text"><strong>Compatibile Memory: </strong>{motherboard.compatibleMemory}</p>
                        <p className="card-text"><strong>Product Description: </strong>{motherboard.productDescription}</p>
                        <div className="d-flex flex-row">
                            <Link className="text-danger" to="">
                                <p className="card-text text-danger p-1">Manage Board</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <h1 className="text-center">List of CPU's</h1>
            <div className="card-group">
                {Cpus.map(cpu => (
                    <div className="card-body bg-light m-3 shadow border border-secondary rounded" key={cpu.cpuId}>
                        <img className="card-img-top" src={cpu.cpuImage} alt={cpu.cpuName}/>
                        <h4 className="card-title"><strong>CPU Name: </strong>{cpu.cpuName}</h4>
                        <p className="card-text"><strong>CPU Socket: </strong>{cpu.cpuSocket}</p>
                        <p className="card-text"><strong>Product Family: </strong>{cpu.productFamily}</p>
                        <p className="card-text"><strong>Product Line: </strong>{cpu.productLine}</p>
                        <p className="card-text"><strong>Core Count: </strong>{cpu.numOfCores}</p>
                        <p className="card-text"><strong>Thread Count: </strong>{cpu.numOfThreads}</p>
                        <p className="card-text"><strong>Base Clock: </strong>{cpu.baseClock}</p>
                        <p className="card-text"><strong>Max Boost Clock: </strong>{cpu.maxBoostClock}</p>
                        <p className="card-text"><strong>L1 Cache: </strong>{cpu.l1Cache}</p>
                        <p className="card-text"><strong>L2 Cache:</strong>{cpu.l2Cache}</p>
                        <p className="card-text"><strong>L3 Cache:</strong>{cpu.l3Cache}</p>
                        <p className="card-text"><strong>Default TDP: </strong>{cpu.defaultTDP}</p>
                        <p className="card-text"><strong>Processor Technology for CPU Cores: </strong>{cpu.processorTechnology}</p>
                        <p className="card-text"><strong>Maximum Operating Temperature: </strong>{cpu.maxOpTemp}</p>
                        <p className="card-text"><strong>Launch Date: </strong>{cpu.launchDate}</p>
                        <p className="card-text"><strong>Unlocked for overclocking: </strong>{cpu.unlocked}</p>
                        <div className="d-flex flex-row">
                            <Link className="text-danger" to="">
                                <p className="card-text text-danger p-1">Manage Cpu</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            </>
        )
    }
}

export default Adminpanel;