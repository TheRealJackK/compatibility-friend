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
            <span className="page">
                <div class="lds-facebook"><div></div><div></div><div></div></div>
            </span>
            </>
        ) 
    } else {
        return (
            <>
            <span className="page">
            <h2>Admin</h2>
            <span>
                <Link to="/Createboard"><p>Add A Motherboard</p></Link>
                <Link to="/Createcpu"><p>Add A Cpu</p></Link>
            </span>
            <h3>List of Users</h3>
                <span>
                    <div className="card-group">
                        {Users.map(user => (
                            <div className="card" key={user.userId}>
                                <img src="" alt="profile pic" />
                                <h3><strong>Username: </strong>{user.userName}</h3>
                                <p><strong>User ID: </strong>{user.userId}</p>
                                <p><strong>First Name: </strong>{user.firstName}</p>
                                <p><strong>Last Name: </strong>{user.lastName}</p>
                                <p><strong>Email: </strong>{user.email}</p>
                                <p><strong>Privelages: </strong>{user.privelages}</p>
                                <p><strong>Preference: </strong>{user.preference}</p>
                                <div>
                                    <Link to={`Userdetailedview/${user.userId}`}>
                                        <p className="card-text text-danger p-1">Manage User</p>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </span>
                <h3>List of Boards</h3>
                <span>
                    <div className="card-group">
                    {Motherboards.map(motherboard => (
                        <div className="card-detailed" key={motherboard.boardId}>
                            <img src={motherboard.boardImgPath} alt={motherboard.productName}/>
                            <h3><strong>Product Name: </strong>{motherboard.productName}</h3>
                            <p><strong>Series: </strong>{motherboard.series}</p>
                            <p><strong>Manufactorer: </strong>{motherboard.manufactorer}</p>
                            <p><strong>Chipset: </strong>{motherboard.chipset}</p>
                            <p><strong>Socket: </strong>{motherboard.cpuSocket}</p>
                            <p><strong>Compatibile Memory: </strong>{motherboard.compatibleMemory}</p>
                            <p><strong>Product Description: </strong>{motherboard.productDescription}</p>
                            <Link to={`Mobodetailedview/${motherboard.boardId}`}>
                                <p>See More</p>
                            </Link>
                        </div>
                    ))}
                    </div>
                </span>
                <h3>List of CPU's</h3>
                <span>
                    <div className="card-group">
                        {Cpus.map(cpu => (
                            <div className="card-xl" key={cpu.cpuId}>
                                <img  src={cpu.cpuImage} alt={cpu.cpuName}/>
                                <h3><strong>CPU Name: </strong>{cpu.cpuName}</h3>
                                <p><strong>CPU Socket: </strong>{cpu.cpuSocket}</p>
                                <p><strong>Product Family: </strong>{cpu.productFamily}</p>
                                <p><strong>Product Line: </strong>{cpu.productLine}</p>
                                <p><strong>Core Count: </strong>{cpu.numOfCores}</p>
                                <p><strong>Thread Count: </strong>{cpu.numOfThreads}</p>
                                <p><strong>Base Clock: </strong>{cpu.baseClock}</p>
                                <p><strong>Max Boost Clock: </strong>{cpu.maxBoostClock}</p>
                                <p><strong>L1 Cache: </strong>{cpu.l1Cache}</p>
                                <p><strong>L2 Cache:</strong>{cpu.l2Cache}</p>
                                <p><strong>L3 Cache:</strong>{cpu.l3Cache}</p>
                                <p><strong>Default TDP: </strong>{cpu.defaultTDP}</p>
                                <p><strong>Processor Technology for CPU Cores: </strong>{cpu.processorTechnology}</p>
                                <p><strong>Maximum Operating Temperature: </strong>{cpu.maxOpTemp}</p>
                                <p><strong>Launch Date: </strong>{cpu.launchDate}</p>
                                <p><strong>Unlocked for overclocking: </strong>{cpu.unlocked}</p>
                            </div>
                        ))}
                    </div>
                </span>
            </span>
            </>
        )
    }
}

export default Adminpanel;