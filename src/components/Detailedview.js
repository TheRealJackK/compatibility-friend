import React from "react";
import {Motherboards} from "../data/motherboards";
import {useParams, Link} from "react-router-dom";

const Detailedview = () => {
    const {id} = useParams()
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