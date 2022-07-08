import React from "react";
import {useState, useEffect} from "react";
import Axios from "axios";
import {Link} from "react-router-dom"

const Home = () => {
    // useState for motherboards
    const [Motherboards, setMotherboards] = useState([])
    // useState for cpus
    const [Cpus, setCpus] = useState([])
    // loadingBoards spinner
    const [loadingBoards, setLoadingBoards] = useState(false)
    // loadingCpus spinner
    const [loadingCpus, setLoadingCpus] = useState(false)

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

    if(loadingBoards && loadingCpus === true) {
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
            <span className="page">
            <h2>Popular Motherboard's</h2>
                <span>  
                    <span className="card-group">
                        {Motherboards.filter(motherboard => motherboard.tag === "popular").map(motherboard => (
                            <Link to={`Mobodetailedview/${motherboard.boardId}`}>
                                <span className="card" key={motherboard.boardId}>
                                    <img src={motherboard.boardImgPath} alt={motherboard.productName}/>
                                    <h3><strong>Product Name: </strong>{motherboard.productName}</h3>
                                    <p><strong>Product Description: </strong>{motherboard.productDescription}</p>
                                    <p>Click To See More!</p>
                                </span>
                            </Link>
                        ))}
                    </span>
                </span>
            <h3>Popular CPU's</h3>
                <span className="card-group">
                    {Cpus.filter(cpu => cpu.tag === "popular").map(cpu => (
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
            </>
        )
    }
}

export default Home;