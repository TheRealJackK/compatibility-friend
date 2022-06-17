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
            <div className="d-flex justify-content-center">
            {Motherboards.filter(motherboard => Number(motherboard.boardId) === Number(id)).map(motherboard => (
                <div className="card-body bg-light border border-secondary rounded my-5 mx-2" key={motherboard.id}>
                    <img className="card-img-top" src={motherboard.boardImgPath} alt={motherboard.productName}/>
                    <h4><strong>Product Name: </strong>{motherboard.productName}</h4>
                    <p><strong>Series: </strong>{motherboard.series}</p>
                    <p><strong>Manufactorer: </strong>{motherboard.manufactorer}</p>
                    <p><strong>Chipset: </strong>{motherboard.chipset}</p>
                    <p><strong>Socket: </strong>{motherboard.cpuSocket}</p>
                    <p><strong>Compatibile Memory: </strong>{motherboard.compatibleMemory}</p>
                    <p><strong>Product Description: </strong>{motherboard.productDescription}</p>
                    <Link className="text-decoration-none" to="">
                        <p className="card-text text-primary">See Compatibile CPUs</p>
                    </Link>
                </div>
            ))}
            </div>
            </>
        )
    }
}

export default Mobodetailedview;