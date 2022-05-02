import React from "react";
import {useState, useEffect} from "react"
import {useParams, Link} from "react-router-dom";
import {Motherboards} from "../data/motherboards";

const Detailedview = () => {
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

    return (
        <>
        {Motherboards.filter(motherboard => Number(motherboard.boardId) === Number(id)).map(motherboard => (
            <div className="bg-light border border-secondary rounded d-flex flex-column align-items-center m-5">
                <img src={motherboard.image} alt={motherboard.productName}/>
                <div className="p-2">
                    <h4><strong>Product Name: </strong>{motherboard.productName}</h4>
                    <p><strong>Series: </strong>{motherboard.series}</p>
                    <p><strong>Manufactorer: </strong>{motherboard.manufactorer}</p>
                    <p><strong>Chipset: </strong>{motherboard.chipset}</p>
                    <p><strong>Socket: </strong>{motherboard.socket}</p>
                    <p><strong>Compatibile Memory: </strong>{motherboard.compatibleMemory}</p>
                    <p><strong>Product Description: </strong>{motherboard.productDescription}</p>
                    <p><strong>Information Source: </strong>{motherboard.source}</p>
                    <div className="my-3">
                        <button type="button" className="rounded" onClick={() => {setLike(Like + 1)}}>Like</button>
                        <span id="upvoteBox" className="mx-2 text-success">{Like}</span>
                        <button type="button" className="rounded" onClick={() => {setDislike(Dislike + 1)}}>Dislike</button>
                        <span id="upvoteBox" className="mx-2 text-danger">{Dislike}</span>
                    </div>
                    <Link to="">
                        <p><strong>See Compatibile CPUs</strong></p>
                    </Link>
                </div>
            </div>
        ))}
        </>
    )
}

export default Detailedview;