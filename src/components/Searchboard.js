import React from "react";
import {useState, useEffect} from "react";
import Axios from "axios";
import {Link} from "react-router-dom"


const Searchboard = () => {
    // For Search Bar
    const [searchVal, setSearchVal] = useState("");
    // useState for motherboards
    const [Motherboards, setMotherboards] = useState([])
    // loadingBoards spinner
    const [loadingBoards, setLoadingBoards] = useState(false)
    
    // get request for motherboards
    useEffect(() => {
        setLoadingBoards(true)
        Axios.get('http://localhost:3001/api/getmotherboard')
        .then((response) => {
            setMotherboards(response.data)
            setLoadingBoards(false)
        })
    }, [])

    if(loadingBoards === true) {
        return (
            <>
            <span className="page">
                <div class="lds-facebook"><div></div><div></div><div></div></div>
            </span>
            </>
        )
    } else {
        if(searchVal === "") {
            return(
                <>
                <span className="page">
                <h2>Search A Board</h2>
                    <input onChange={(event) => {setSearchVal(event.target.value)}} type="search" className="border-3 w-100" placeholder="Try 'ROG Strix X570-E Gaming' " />
                    <div className="card-group">
                    {Motherboards.map(motherboard => (
                        <div className="card-detailed" key={motherboard.boardId}>
                        <img src={motherboard.boardImgPath} alt={motherboard.productName}/>
                        <h3><strong>Product Name: </strong>{motherboard.productName}</h3>
                        <p><strong>Series: </strong>{motherboard.series}</p>
                        <p><strong>Manufactorer: </strong>{motherboard.manufactorer}</p>
                        <p><strong>Chipset: </strong>{motherboard.chipset}</p>
                        <p><strong>Socket: </strong>{motherboard.cpuSocket}</p>
                        <p><strong>Compatibile Memory: </strong>{motherboard.compatibleMemory}</p>
                        <p><strong>Product Description: </strong>{motherboard.productDescription}</p>
                        <Link to={`Mobodetailedview/${motherboard.boardId}`}>
                            <p>See More</p>
                        </Link>
                        </div>
                    ))}
                    </div>
                </span>
                </>
            )
        } else {
            return (
            <>
            </>
            )
        }
    }
}

export default Searchboard;