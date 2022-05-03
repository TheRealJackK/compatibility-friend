import React from "react";
import {useState, useEffect} from "react";
import {Motherboards} from "../data/motherboards";
import {Cpus} from "../data/cpus";
import {Link} from "react-router-dom"

const Home = () => {
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

    return (
        <>
        <h2 className="text-center py-5">Popular Boards Right Now</h2>
        <div className="card-group">
            {Motherboards.filter(motherboard => motherboard.tag === "popular").map(motherboard => (
                <div className="card-body bg-light m-3 shadow border border-secondary rounded w-25" key={motherboard.boardId}>
                    <img className="card-img-top" src={motherboard.image} alt={motherboard.productName}/>
                    <h4 className="card-title"><strong>Product Name: </strong>{motherboard.productName}</h4>
                    <p className="card-text"><strong>Product Description: </strong>{motherboard.productDescription}</p>
                    <Link to={`Mobodetailedview/${motherboard.boardId}`}>
                        <p className="card-text">See More</p>
                    </Link>
                    <div className="my-3">
                        <button type="button" className="rounded" onClick={() => {setLike(Like + 1)}}>Like</button>
                        <span id="upvoteBox" className="mx-2 text-success">{Like}</span>
                        <button type="button" className="rounded" onClick={() => {setDislike(Dislike + 1)}}>Dislike</button>
                        <span id="upvoteBox" className="mx-2 text-danger">{Dislike}</span>
                    </div>
                </div>
            ))}
        </div>
        <h2 className="text-center py-5">Popular CPU's Right Now</h2>
        <div className="card-group">
            {Cpus.filter(cpu => cpu.tags === "popular").map(cpu => (
                <div className="card-body bg-light m-3 shadow border border-secondary rounded w-25" key={cpu.cpuId}>
                    <img className="card-img-top" src={cpu.cpuImage} alt={cpu.cpuName}/>
                    <h4 className="card-title"><strong>CPU Name: </strong>{cpu.cpuName}</h4>
                    <p className="card-text"><strong>CPU Socket: </strong>{cpu.cpuSocket}</p>
                    <p className="card-text"><strong>Core Count: </strong>{cpu.numOfCores}</p>
                    <p className="card-text"><strong>Thread Count: </strong>{cpu.numOfThreads}</p>
                    <p className="card-text"><strong>Base Clock: </strong>{cpu.baseClock}</p>
                    <p className="card-text"><strong>Max Boost Clock: </strong>{cpu.maxBoostClock}</p>
                    <p className="card-text"><strong>Unlocked for overclocking: </strong>{cpu.unlocked}</p>
                    <Link to={`Cpudetailedview/${cpu.cpuId}`}>
                        <p className="card-text">See More</p>
                    </Link>
                    <div className="my-3">
                        <button type="button" className="rounded" onClick={() => {setLike(Like + 1)}}>Like</button>
                        <span id="upvoteBox" className="mx-2 text-success">{Like}</span>
                        <button type="button" className="rounded" onClick={() => {setDislike(Dislike + 1)}}>Dislike</button>
                        <span id="upvoteBox" className="mx-2 text-danger">{Dislike}</span>
                    </div>
                </div>
            ))}
        </div>
        <h2 className="text-center py-5">Latest Tech News</h2>
        <p className="text-center">News Articles Here</p>
        </>
    )
}

export default Home;