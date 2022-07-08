import React from "react";
import {useState, useEffect} from "react"
import Axios from "axios";
import {useParams, Link} from "react-router-dom";

const Mobodetailedview = () => {
    // Gets motherboard ID
    const {id} = useParams()

    // useState for Motherboard
    const [Motherboards, setMotherboards] = useState([])
    // useState for cpus
    const [Cpus, setCpus] = useState([])
    // loadingBoards spinner
    const [loadingBoards, setLoadingBoards] = useState(false)
    
    // get request for motherboards
    useEffect(() => {
        setLoadingBoards(true)
        Axios.get('http://localhost:3001/api/getmotherboard')
        .then((response)=>{
            setMotherboards(response.data)
            setLoadingBoards(false)
        })
    }, [])
    
    // get requests for cpus
    useEffect(() => {
        Axios.get('http://localhost:3001/api/getcpu')
        .then((response) => {
            setCpus(response.data)
        })
    }, [])

    if(loadingBoards === true) {
        return (
            <>
            <span className="page">
                <div className="lds-facebook"><div></div><div></div><div></div></div>
            </span>
            </>
        ) 
    } else {
        return (
            <>
            {Motherboards.filter(motherboard => Number(motherboard.boardId) === Number(id)).map(motherboard => (
                <span className="page" key={motherboard.boardId}>
                <h2>{motherboard.productName}</h2>
                    <div className="card-detailed">
                        <img src={motherboard.boardImgPath} alt={motherboard.productName} />
                        <p><strong>Product Name: </strong>{motherboard.productName}</p>
                        <p><strong>Series: </strong>{motherboard.series}</p>
                        <p><strong>Manufactorer: </strong>{motherboard.manufactorer}</p>
                        <p><strong>Chipset: </strong>{motherboard.chipset}</p>
                        <p><strong>Socket: </strong>{motherboard.cpuSocket}</p>
                        <p><strong>Compatibile Memory: </strong>{motherboard.compatibleMemory}</p>
                        <p><strong>Product Description: </strong>{motherboard.productDescription}</p>
                    </div>
                    <span></span>
                    <h3>Compatibile Cpus</h3>
                    <span>
                        {Cpus.filter(cpu => cpu.architecture === motherboard.supportedArchitecture ||
                                            cpu.architecture === motherboard.supportedArchitecture2 ||
                                            cpu.architecture === motherboard.supportedArchitecture3 ||
                                            cpu.architecture === motherboard.supportedArchitecture4 ||
                                            cpu.architecture === motherboard.supportedArchitecture5 ).map(cpu => (
                        <Link to={`Cpudetailedview/${cpu.cpuId}`}>
                            <span className="card" key={cpu.cpuId}>
                                <img src={cpu.cpuImage} alt={cpu.cpuName}/>
                                <h3><strong>CPU Name: </strong>{cpu.cpuName}</h3>
                                <p><strong>CPU Socket: </strong>{cpu.cpuSocket}</p>
                                <p><strong>Core Count: </strong>{cpu.numOfCores}</p>
                                <p><strong>Thread Count: </strong>{cpu.numOfThreads}</p>
                                <p><strong>Base Clock: </strong>{cpu.baseClock}</p>
                                <p><strong>Max Boost Clock: </strong>{cpu.maxBoostClock}</p>
                                <p><strong>Unlocked for overclocking: </strong>{cpu.unlocked}</p>
                                <p>Click To See More!</p>
                            </span>
                        </Link>
                        ))}
                    </span>
                </span> 
            ))}
            </>
        )
    }
}

export default Mobodetailedview;