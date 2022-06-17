import React from "react";
import {useState, useEffect} from "react"
import Axios from "axios";
import {useParams, Link} from "react-router-dom";

const Cpudetailedview = () => {
    const {id} = useParams()

    // useState for cpus
    const [Cpus, setCpus] = useState([])
    // loadingCpus spinner
    const [loadingCpus, setLoadingCpus] = useState(false)

    // get requests for cpus
    useEffect(() => {
        setLoadingCpus(true)
        Axios.get('http://localhost:3001/api/getcpu')
        .then((response) => {
            setCpus(response.data)
            setLoadingCpus(false)
        })
    }, [])

    if(loadingCpus === true) {
        return(
            <>
            <div className="d-flex justify-content-center py-5">
                <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            </>
        )
    } else {
        return(
            <>
            {Cpus.filter(cpu => Number(cpu.cpuId) === Number(id)).map(cpu => (
                <div className="card-body bg-light border border-secondary rounded d-flex flex-column align-items-center m-5" key={cpu.cpuId}>
                    <div className="p-2">
                    <img className="card-img-top" src={cpu.cpuImage} alt={cpu.cpuName}/>
                        <h4><strong>CPU Name: </strong>{cpu.cpuName}</h4>
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
                        <Link className="text-decoration-none" to="">
                            <p className="card-text text-primary">See Compatibile Motherboards</p>
                        </Link>
                    </div>
                </div>
            ))}
            </>
        )
    }
}

export default Cpudetailedview;