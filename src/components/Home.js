import React from "react";
import {useState, useEffect} from "react";
import {Motherboards} from "../data/motherboards";
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
        <h2 className="text-center py-3">Popular Right Now</h2>
        <div className="card-group">
            {Motherboards.map(motherboard => (
                <div className="card-body bg-light m-3 shadow border border-secondary rounded w-25" key={motherboard.boardId}>
                    <img className="card-img-top" src={motherboard.image} alt={motherboard.productName}/>
                    <h4 className="card-title"><strong>Product Name: </strong>{motherboard.productName}</h4>
                    <p className="card-text"><strong>Product Description: </strong>{motherboard.productDescription}</p>
                    <Link to={`Detailedview/${motherboard.boardId}`}>
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
        </>
    )
}

export default Home;