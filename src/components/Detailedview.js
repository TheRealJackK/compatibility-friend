import React from "react";

const Detailedview = () => {
    return (
        <>
        {/*Filter array map in here*/}
        <div className="d-flex flex-column shadow-sm rounded m-5">
            <img src="https://picsum.photos/200/300" alt=""/>
            <div className="p-2">
                <h4><strong>Product Name: </strong></h4>
                <p><strong>Series: </strong></p>
                <p><strong>Manufactorer: </strong></p>
                <p><strong>Chipset: </strong></p>
                <p><strong>Socket: </strong></p>
                <p><strong>Compatibile Memory: </strong></p>
                <p><strong>Product Description: </strong></p>
            </div>
        </div>
        {/*Filter array map in here*/}
        </>
    )
}

export default Detailedview;