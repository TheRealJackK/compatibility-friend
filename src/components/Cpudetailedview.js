import React from "react";
import {useState, useEffect} from "react"
import {useParams, Link} from "react-router-dom";
import {Cpus} from "../data/cpus";

const Cpudetailedview = () => {
    const {id} = useParams()
    const [Like, setLike] = useState(0)
    const [Dislike, setDislike] = useState(0)

    // Saves Like Count
    useEffect(() => {
        const likes = localStorage.getItem('like-count')
        Number(setLike(JSON.parse(likes)))
    }, [])

    useEffect(() => {
        localStorage.setItem('like-count', JSON.stringify(Like))
    })

    // Saves Dislike Count
    useEffect(() => {
        const dislikes = localStorage.getItem('dislike-count')
        Number(setDislike(JSON.parse(dislikes)))
    }, [])

    useEffect(() => {
        localStorage.setItem('dislike-count', JSON.stringify(Dislike))
    })
    return(
        <>
        {Cpus.filter(cpu => Number(cpu.cpuId) === Number(id)).map(cpu => (
            <div className="bg-light border border-secondary rounded d-flex flex-column align-items-center m-5">
                <img src={cpu.image} alt={cpu.cpuName}/>
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
                    <div className="my-3">
                        <button type="button" className="rounded" onClick={() => {setLike(Like + 1)}}>Like</button>
                        <span id="upvoteBox" className="mx-2 text-success">{Like}</span>
                        <button type="button" className="rounded" onClick={() => {setDislike(Dislike + 1)}}>Dislike</button>
                        <span id="upvoteBox" className="mx-2 text-danger">{Dislike}</span>
                    </div>
                    <Link to="">
                        <p><strong>See Compatibile Motherboards</strong></p>
                    </Link>
                </div>
            </div>
        ))}
        </>
    )
}

export default Cpudetailedview;