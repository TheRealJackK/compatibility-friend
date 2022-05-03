import React from "react";
import {useState, useEffect} from "react";
import {Motherboards} from "../data/motherboards";
import {Link} from "react-router-dom"


const Searchboard = () => {
    // For Search Bar
    const [searchVal, setSearchVal] = useState("");
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
        <div className="container mb-5 pt-5">
        <h1>Search A Board</h1><input onChange={(event) => {setSearchVal(event.target.value)}} type="search" className="border-3 w-100" placeholder="e.g. Asus ROG x570" />
        </div>
        <div className="card-group">
            {Motherboards.filter(motherboard => motherboard.productName.toLowerCase() === searchVal.toLowerCase()).map(motherboard => (
                <div className="card-body bg-light m-3 shadow border border-secondary rounded w-25" key={motherboard.boardId}>
                    <img className="card-img-top" src={motherboard.image} alt={motherboard.productName}/>
                    <h4 className="card-title"><strong>Product Name: </strong>{motherboard.productName}</h4>
                    <p className="card-text"><strong>Series: </strong>{motherboard.series}</p>
                    <p className="card-text"><strong>Manufactorer: </strong>{motherboard.manufactorer}</p>
                    <p className="card-text"><strong>Chipset: </strong>{motherboard.chipset}</p>
                    <p className="card-text"><strong>Socket: </strong>{motherboard.socket}</p>
                    <p className="card-text"><strong>Compatibile Memory: </strong>{motherboard.compatibleMemory}</p>
                    <p className="card-text"><strong>Product Description: </strong>{motherboard.productDescription}</p>
                    <p className="card-text"><strong>Information Source: </strong>{motherboard.source}</p>
                    <div className="my-3">
                        <button type="button" className="rounded" onClick={() => {setLike(Like + 1)}}>Like</button>
                        <span id="upvoteBox" className="mx-2 text-success">{Like}</span>
                        <button type="button" className="rounded" onClick={() => {setDislike(Dislike + 1)}}>Dislike</button>
                        <span id="upvoteBox" className="mx-2 text-danger">{Dislike}</span>
                    </div>
                    <Link to={`Detailedview/${motherboard.boardId}`}>
                        <p className="card-text">See More</p>
                    </Link>
                </div>
            ))}
        </div>
        </>
    )
}

export default Searchboard;