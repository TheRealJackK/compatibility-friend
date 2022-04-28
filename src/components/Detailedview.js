import React from "react";

const Detailedview = () => {
    return (
        <>
        <div className="container mb-5 pt-3">
        <h1>Board Name</h1>
        </div>
        <div className="card shadow-sm rounded m-2"><img className="card-img-top w-100 d-block" src="https://picsum.photos/200/300" alt=""/>
            <div className="card-body">
                <h4 className="card-title">Product Name</h4>
                <p className="card-text">Series</p>
                <p className="card-text">Manufactorer</p>
                <p className="card-text">Chipset</p>
                <p className="card-text">Socket</p>
                <p className="card-text">Compatibile Memory</p>
                <p className="card-text">Product Description</p>
            </div>
        </div>
        </>
    )
}

export default Detailedview;