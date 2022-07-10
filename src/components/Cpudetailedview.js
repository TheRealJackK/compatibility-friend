import React from "react";
import {useState, useEffect} from "react"
import Axios from "axios";
import {useParams, Link} from "react-router-dom";

const Cpudetailedview = () => {
    const {id} = useParams()

    // useState for cpus
    const [Cpus, setCpus] = useState([])
    // useState for Motherboard
    const [Motherboards, setMotherboards] = useState([])
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

    // get request for motherboards
    useEffect(() => {
        Axios.get('http://localhost:3001/api/getmotherboard')
        .then((response)=>{
            setMotherboards(response.data)
        })
    }, [])

    if(loadingCpus === true) {
        return(
            <>
            <span className="page">
                <div className="lds-facebook"><div></div><div></div><div></div></div>
            </span>
            </>
        )
    } else {
        return(
            <>
            {Cpus.filter(cpu => Number(cpu.cpuId) === Number(id)).map(cpu => (
                <span className="page" key={cpu.cpuId}>
                <h2>{cpu.cpuName}</h2>
                    <div className="card-detailed">
                        <img src={cpu.cpuImage} alt={cpu.cpuName}/>
                        <p><strong>CPU Name: </strong>{cpu.cpuName}</p>
                        <p><strong>CPU Socket: </strong>{cpu.cpuSocket}</p>
                        <p><strong>Product Family: </strong>{cpu.productFamily}</p>
                        <p><strong>Product Line: </strong>{cpu.productLine}</p>
                        <p><strong>Architecture: </strong>{cpu.architecture}</p>
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
                    <span></span>
                    <h3>Compatible Motherboards</h3>
                    <div className="card-group">
                        {Motherboards.filter(mobo => mobo.supportedArchitecture === cpu.architecture ||
                                            mobo.supportedArchitecture2 === cpu.architecture ||
                                            mobo.supportedArchitecture3 === cpu.architecture ||
                                            mobo.supportedArchitecture4 === cpu.architecture ||
                                            mobo.supportedArchitecture5 === cpu.architecture ).map(motherboard => (
                        <div className="card-detailed">
                            <img src={motherboard.boardImgPath} alt={motherboard.productName} />
                            <p><strong>Product Name: </strong>{motherboard.productName}</p>
                            <p><strong>Series: </strong>{motherboard.series}</p>
                            <p><strong>Manufactorer: </strong>{motherboard.manufactorer}</p>
                            <p><strong>Chipset: </strong>{motherboard.chipset}</p>
                            <p><strong>Socket: </strong>{motherboard.cpuSocket}</p>
                            <p><strong>Compatible Memory: </strong>{motherboard.compatibleMemory}</p>
                            <p><strong>Product Description: </strong>{motherboard.productDescription}</p>
                        </div>                        
                        ))}
                    </div>
                </span>
                // <div className="card-body bg-light border border-secondary rounded d-flex flex-column align-items-center m-5" key={cpu.cpuId}>
                //     <div className="p-2">
                //     <img className="card-img-top" src={cpu.cpuImage} alt={cpu.cpuName}/>
                //         <p><strong>CPU Name: </strong>{cpu.cpuName}</p>
                //         <p><strong>CPU Socket: </strong>{cpu.cpuSocket}</p>
                //         <p><strong>Product Family: </strong>{cpu.productFamily}</p>
                //         <p><strong>Product Line: </strong>{cpu.productLine}</p>
                //         <p><strong>Core Count: </strong>{cpu.numOfCores}</p>
                //         <p><strong>Thread Count: </strong>{cpu.numOfThreads}</p>
                //         <p><strong>Base Clock: </strong>{cpu.baseClock}</p>
                //         <p><strong>Max Boost Clock: </strong>{cpu.maxBoostClock}</p>
                //         <p><strong>L1 Cache: </strong>{cpu.l1Cache}</p>
                //         <p><strong>L2 Cache:</strong>{cpu.l2Cache}</p>
                //         <p><strong>L3 Cache:</strong>{cpu.l3Cache}</p>
                //         <p><strong>Default TDP: </strong>{cpu.defaultTDP}</p>
                //         <p><strong>Processor Technology for CPU Cores: </strong>{cpu.processorTechnology}</p>
                //         <p><strong>Maximum Operating Temperature: </strong>{cpu.maxOpTemp}</p>
                //         <p><strong>Launch Date: </strong>{cpu.launchDate}</p>
                //         <p><strong>Unlocked for overclocking: </strong>{cpu.unlocked}</p>
                //         <Link className="text-decoration-none" to="">
                //             <p className="card-text text-primary">See Compatibile Motherboards</p>
                //         </Link>
                //     </div>
                // </div>
            ))}
            </>
        )
    }
}

export default Cpudetailedview;