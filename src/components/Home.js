import React from "react";
import {Dummydata} from "../data/Placeholder";
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <>
        <div className="container mb-5 pt-5">
        <h1>Search A Board</h1><input type="search" className="border-3 w-100" placeholder="e.g. Asus ROG x570" />
        </div>
        <h2 className="text-center">Popular Right Now</h2>
        <div className="card-group p-3">
            {Dummydata.map(motherboard => (
                <div className="card shadow-sm rounded m-2 bg-light border border-secondary" key={motherboard.id}>
                    <img className="card-img-top w-100 d-block" src={motherboard.image} alt={motherboard.productName}/>
                    <div className="card-body">
                        <h4 className="card-title"><strong>Product Name: </strong>{motherboard.productName}</h4>
                        <p className="card-text"><strong>Product Description: </strong>{motherboard.productDescription}</p>
                        <Link to={`Detailedview/${motherboard.id}`}>
                            <p className="card-text">See More</p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}

export default Home;