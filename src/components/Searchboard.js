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
                <div className="lds-facebook"><div></div><div></div><div></div></div>
            </span>
            </>
        )
    } else {
        return(
            <>
            <span className="page">
            <h2>Search A Board</h2>
                <input id="searchboard"
                /* On change of input, set the state of the search value */
                onChange={(e) => setSearchVal(e.target.value)}
                type="search" placeholder="Try 'ROG Strix X570-E Gaming' " />
                <div className="card-group">
                {/* Filter array to include motherboards that include the inputed search value */}
                {Motherboards.filter(Motherboards => Motherboards.productName.toLowerCase().includes(searchVal)).map(motherboard => (
                    <Link to={`Mobodetailedview/${motherboard.boardId}`}>
                    <div className="card" key={motherboard.boardId}>
                        <img src={motherboard.boardImgPath} alt={motherboard.productName}/>
                        <p><strong>Product Name: </strong>{motherboard.productName}</p>
                        <p><strong>Product Description: </strong>{motherboard.productDescription}</p>
                        <p>Click To See More!</p>
                    </div>
                    </Link>
                ))}
                </div>
            </span>
            </>
            )
        }
    }

export default Searchboard;