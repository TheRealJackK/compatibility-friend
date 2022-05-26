import React from "react";
import {useState, useEffect} from "react"
import Axios from "axios";
import {useParams, Link} from "react-router-dom";

const Mobodetailedview = () => {
    // Gets motherboard ID
    const {id} = useParams()

    // useState for Motherboard
    const [Motherboards, setMotherboards] = useState([])
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

    if(loadingBoards === true) {
        return (
            <>
            <div class="d-flex justify-content-center">
                <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            </>
        ) 
    } else {
        return (
            <>
            {Motherboards.filter(motherboard => Number(motherboard.boardId) === Number(id)).map(motherboard => (
                <div className="card-body bg-light border border-secondary rounded d-flex flex-column align-items-center m-5">
                    <img className="card-img-top" src={motherboard.boardImgPath} alt={motherboard.productName}/>
                    <div className="p-2">
                        <h4><strong>Product Name: </strong>{motherboard.productName}</h4>
                        <p><strong>Series: </strong>{motherboard.series}</p>
                        <p><strong>Manufactorer: </strong>{motherboard.manufactorer}</p>
                        <p><strong>Chipset: </strong>{motherboard.chipset}</p>
                        <p><strong>Socket: </strong>{motherboard.cpuSocket}</p>
                        <p><strong>Compatibile Memory: </strong>{motherboard.compatibleMemory}</p>
                        <p><strong>Product Description: </strong>{motherboard.productDescription}</p>
                        <div className="my-3">
                            <button type="button" className="rounded" >Like</button>
                            <span id="upvoteBox" className="mx-2 text-success"></span>
                            <button type="button" className="rounded" >Dislike</button>
                            <span id="upvoteBox" className="mx-2 text-danger"></span>
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
}

export default Mobodetailedview;