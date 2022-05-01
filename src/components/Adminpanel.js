import React from "react";
import {Link} from "react-router-dom"
import {Users} from "../data/users";
import {Motherboards} from "../data/motherboards";
import {Cpus} from "../data/cpus";

const Adminpanel = () => {
    return (
        <>
        <h1 className="text-center">List of Users</h1>
        <div className="card-group">
            {Users.map(user => (
                <div className="card-body bg-light m-3 shadow border border-secondary rounded w-25" key={user.userId}>
                    <img className="card-img-top" src={user.profilePic} alt={user.userName}/>
                    <h4 className="card-title"><strong>Username: </strong>{user.userName}</h4>
                    <p className="card-text"><strong>First Name: </strong>{user.firstName}</p>
                    <p className="card-text"><strong>Last Name: </strong>{user.lastName}</p>
                    <p className="card-text"><strong>Email: </strong>{user.email}</p>
                    <p className="card-text"><strong>Privelages: </strong>{user.privelages}</p>
                    <p className="card-text"><strong>Preference: </strong>{user.preference}</p>
                    <div className="d-flex flex-row">
                        <Link to="">
                            <p className="card-text p-1">Edit</p>
                        </Link>
                        <Link to="">
                            <p className="card-text p-1">Ban</p>
                        </Link>
                        <Link to="">
                            <p className="card-text p-1">Delete</p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
        <h1 className="text-center">List of Boards</h1>
        <div className="card-group">
            {Motherboards.map(cpu => (
                <div className="card-body bg-light m-3 shadow border border-secondary rounded w-25" key={cpu.boardId}>
                    <img className="card-img-top" src={cpu.image} alt={cpu.productName}/>
                    <h4 className="card-title"><strong>Product Name: </strong>{cpu.productName}</h4>
                    <p className="card-text"><strong>Series: </strong>{cpu.series}</p>
                    <p className="card-text"><strong>Manufactorer: </strong>{cpu.manufactorer}</p>
                    <p className="card-text"><strong>Chipset: </strong>{cpu.chipset}</p>
                    <p className="card-text"><strong>Socket: </strong>{cpu.socket}</p>
                    <p className="card-text"><strong>Compatibile Memory: </strong>{cpu.compatibleMemory}</p>
                    <p className="card-text"><strong>Product Description: </strong>{cpu.productDescription}</p>
                    <p className="card-text"><strong>Information Source: </strong>{cpu.source}</p>
                    <div className="d-flex flex-row">
                        <Link to="">
                            <p className="card-text p-1">Edit</p>
                        </Link>
                        <Link to="">
                            <p className="card-text p-1">Delete</p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
        <h1 className="text-center">List of CPU's</h1>
        <div className="card-group">
            {Cpus.map(cpu => (
                <div className="card-body bg-light m-3 shadow border border-secondary rounded w-25" key={cpu.cpuId}>
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
                        <Link to="">
                            <p className="card-text p-1">Edit</p>
                        </Link>
                        <Link to="">
                            <p className="card-text p-1">Delete</p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}

export default Adminpanel;