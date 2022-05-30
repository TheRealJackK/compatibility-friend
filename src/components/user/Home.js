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
            <div className="d-flex justify-content-center py-5">
                <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            </>
        ) 
    } else {
        return (
            <>
            <h2 className="text-center py-5">Popular Boards Right Now</h2>
            <div className="card-group flex-wrap">
                {Motherboards.filter(motherboard => motherboard.tag === "popular").map(motherboard => (
                    <div className="card-body bg-light m-3 shadow border border-secondary rounded" key={motherboard.boardId}>
                        <Link className="text-decoration-none" to={`Mobodetailedview/${motherboard.boardId}`}>
                        <img className="card-img-top" src={motherboard.boardImgPath} alt={motherboard.productName}/>
                        <h4 className="card-title"><strong>Product Name: </strong>{motherboard.productName}</h4>
                        <p className="card-text"><strong>Product Description: </strong>{motherboard.productDescription}</p>
                        </Link>
                    </div>
                ))}
            </div>
            <h2 className="text-center py-5">Popular CPU's Right Now</h2>
            <div className="card-group">
                {Cpus.filter(cpu => cpu.tag === "popular").map(cpu => (
                    <div className="card-body bg-light m-3 shadow border border-secondary rounded" key={cpu.cpuId}>
                        <Link className="text-decoration-none" to={`Cpudetailedview/${cpu.cpuId}`}>
                        <img className="card-img-top" src={cpu.cpuImage} alt={cpu.cpuName}/>
                        <h4 className="card-title"><strong>CPU Name: </strong>{cpu.cpuName}</h4>
                        <p className="card-text"><strong>CPU Socket: </strong>{cpu.cpuSocket}</p>
                        <p className="card-text"><strong>Core Count: </strong>{cpu.numOfCores}</p>
                        <p className="card-text"><strong>Thread Count: </strong>{cpu.numOfThreads}</p>
                        <p className="card-text"><strong>Base Clock: </strong>{cpu.baseClock}</p>
                        <p className="card-text"><strong>Max Boost Clock: </strong>{cpu.maxBoostClock}</p>
                        <p className="card-text"><strong>Unlocked for overclocking: </strong>{cpu.unlocked}</p>
                        </Link>
                    </div>
                ))}
            </div>
            <h2 className="text-center py-5">Latest Tech News</h2>
            <p className="text-center">News Articles Here</p>
            </>
        )
    }
}

export default Home;