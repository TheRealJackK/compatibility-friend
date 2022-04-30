import React from "react";
import {Dummydata} from "../data/Placeholder";
import {useParams} from "react-router-dom";

const Detailedview = () => {
    const {id} = useParams()
    return (
        <>
        {Dummydata.filter(motherboard => Number(motherboard.id) === Number(id)).map(motherboard => (
            <div className="d-flex flex-column shadow-sm rounded m-5">
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
                </div>
            </div>
        ))}
        </>
    )
}

export default Detailedview;