import React from "react";
import {useState, useEffect} from "react";
import Axios from "axios";
import {Link} from "react-router-dom"


const Searchboard = () => {
    // For Search Bar
    const [searchVal, setSearchVal] = useState("");
    // useState for motherboards
    const [Motherboards, setMotherboards] = useState([])
    
    // get request for motherboards
    useEffect(() => {
        Axios.get('http://localhost:3001/api/getmotherboard')
        .then((response) => {
            setMotherboards(response.data)
        })
    }, [])

    if(searchVal === "") {
        return(
            <>
            <div className="container mb-5 pt-5">
            <h1>Search A Board</h1>
            <input onChange={(event) => {setSearchVal(event.target.value)}} type="search" className="border-3 w-100" placeholder="Try 'ROG Strix X570-E Gaming' " />
            </div>
            <div id="search-array" className="card-group">
            {Motherboards.map(motherboard => (
                <div className="card-body bg-light m-3 shadow border border-secondary rounded" key={motherboard.boardId}>
                <img className="card-img-top" src={motherboard.boardImgPath} alt={motherboard.productName}/>
                <h4 className="card-title"><strong>Product Name: </strong>{motherboard.productName}</h4>
                <p className="card-text"><strong>Series: </strong>{motherboard.series}</p>
                <p className="card-text"><strong>Manufactorer: </strong>{motherboard.manufactorer}</p>
                <p className="card-text"><strong>Chipset: </strong>{motherboard.chipset}</p>
                <p className="card-text"><strong>Socket: </strong>{motherboard.cpuSocket}</p>
                <p className="card-text"><strong>Compatibile Memory: </strong>{motherboard.compatibleMemory}</p>
                <p className="card-text"><strong>Product Description: </strong>{motherboard.productDescription}</p>
                <Link to={`Mobodetailedview/${motherboard.boardId}`}>
                    <p className="card-text">See More</p>
                </Link>
                </div>
            ))}
            </div>
            </>
        )
    } else {
        return (
        <>
            <div className="container mb-5 pt-5">
            <h1>Search A Board</h1>
            <input onChange={(event) => {setSearchVal(event.target.value)}} type="search" className="border-3 w-100" placeholder="Try 'ROG Strix X570-E Gaming' " />
            </div>
            <div id="search-array" className="card-group">
                {Motherboards.filter(motherboard => motherboard.productName.toLowerCase() === searchVal.toLowerCase()).map(motherboard => (
                    <div className="card-body bg-light m-3 shadow border border-secondary rounded" key={motherboard.boardId}>
                        <img className="card-img-top" src={motherboard.boardImgPath} alt={motherboard.productName}/>
                        <h4 className="card-title"><strong>Product Name: </strong>{motherboard.productName}</h4>
                        <p className="card-text"><strong>Series: </strong>{motherboard.series}</p>
                        <p className="card-text"><strong>Manufactorer: </strong>{motherboard.manufactorer}</p>
                        <p className="card-text"><strong>Chipset: </strong>{motherboard.chipset}</p>
                        <p className="card-text"><strong>Socket: </strong>{motherboard.cpuSocket}</p>
                        <p className="card-text"><strong>Compatibile Memory: </strong>{motherboard.compatibleMemory}</p>
                        <p className="card-text"><strong>Product Description: </strong>{motherboard.productDescription}</p>
                        <Link to={`Mobodetailedview/${motherboard.boardId}`}>
                            <p className="card-text">See More</p>
                        </Link>
                    </div>
                ))}
            </div>
        </>
        )
    }
}

export default Searchboard;