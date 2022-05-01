import React from "react";
import {Motherboards} from "../data/motherboards";
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <>
        <div className="container mb-5 pt-5">
        <h1>Search A Board</h1><input type="search" className="border-3 w-100" placeholder="e.g. Asus ROG x570" />
        </div>
        <h2 className="text-center">Popular Right Now</h2>
        <div className="card-group">
            {Motherboards.map(motherboard => (
                <div className="card-body bg-light m-3 shadow border border-secondary rounded w-25" key={motherboard.boardId}>
                    <img className="card-img-top" src={motherboard.image} alt={motherboard.productName}/>
                    <h4 className="card-title"><strong>Product Name: </strong>{motherboard.productName}</h4>
                    <p className="card-text"><strong>Product Description: </strong>{motherboard.productDescription}</p>
                    <Link to={`Detailedview/${motherboard.boardId}`}>
                        <p className="card-text">See More</p>
                    </Link>
                </div>
            ))}
        </div>
        </>
    )
}

export default Home;