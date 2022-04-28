import React from "react";
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <>
        <div className="container mb-5 pt-3">
        <h1>Search A Board</h1><input type="search" className="border-3 w-100" placeholder="e.g. Asus ROG x570" />
        </div>
        <h2 className="text-center">Popular Right Now</h2>
        <div className="card-group p-3">
            <div className="card shadow-sm rounded m-2"><img className="card-img-top w-100 d-block" src="https://picsum.photos/200/300" alt=""/>
            
                <div className="card-body">
                    <h4 className="card-title">Product Name</h4>
                    <p className="card-text">Product Description</p>
                    <Link to="/Detailedview">
                        <p className="card-text">Link Placeholder</p>
                    </Link>
                </div>
            </div>
            <div className="card shadow-sm rounded m-2"><img className="card-img-top w-100 d-block" src="https://picsum.photos/200/300" alt=""/>
                <div className="card-body">
                    <h4 className="card-title">Product Name</h4>
                    <p className="card-text">Product Description</p>
                    <Link to="/Detailedview">
                        <p className="card-text">Link Placeholder</p>
                    </Link>
                </div>
            </div>
            <div className="card shadow-sm rounded m-2"><img className="card-img-top w-100 d-block" src="https://picsum.photos/200/300" alt=""/>
                <div className="card-body">
                    <h4 className="card-title">Product Name</h4>
                    <p className="card-text">Product Description</p>
                    <Link to="/Detailedview">
                        <p className="card-text">Link Placeholder</p>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;