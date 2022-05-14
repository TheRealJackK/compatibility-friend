import React from "react";
import { useState } from "react";
import Axios from "axios";

const Createboard = () => {

    const [boardImgPath, setBoardImgPath] = useState("")
    const [productName, setProductName] = useState("")
    const [series, setSeries] = useState("")
    const [manufactorer, setManufactorer] = useState("")
    const [chipset, setChipset] = useState("")
    const [cpuSocket, setCpuSocket] = useState("")
    const [compatibleMemory, setCompatibleMemory] = useState("")
    const [productDescription, setProductDescription] = useState("")
    const [tag, setTag] = useState("")

    const submitBoard = (event) => {
        event.preventDefault();
        Axios.post("http://localhost:3001/api/insertmotherboard", {
            boardImgPath: boardImgPath,
            productName: productName,
            series: series,
            manufactorer: manufactorer,
            chipset: chipset,
            cpuSocket: cpuSocket,
            compatibleMemory: compatibleMemory,
            productDescription: productDescription,
            tag: tag,
        })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return(
        <>
        <div id="buttons" className="container-fluid w-50 mt-5 border border-secondary rounded bg-light shadow">
            <h2 className="text-center">Create a Board</h2>
            <section className="login-clean">
                <form>
                    <div className="mb-3"><input onChange={(e) => {setBoardImgPath(e.target.value)}} className="form-control" type="text" name="boardImgPath" placeholder="boardImgPath" /></div>
                    <div className="mb-3"><input onChange={(e) => {setProductName(e.target.value)}} className="form-control" type="text" name="productName" placeholder="ProductName" /></div>
                    <div className="mb-3"><input onChange={(e) => {setSeries(e.target.value)}} className="form-control" type="text" name="series" placeholder="series" /></div>
                    <div className="mb-3"><input onChange={(e) => {setManufactorer(e.target.value)}} className="form-control" type="text" name="manufactorer" placeholder="manufactorer" /></div>
                    <div className="mb-3"><input onChange={(e) => {setChipset(e.target.value)}} className="form-control" type="text" name="chipset" placeholder="chipset" /></div>
                    <div className="mb-3"><input onChange={(e) => {setCpuSocket(e.target.value)}} className="form-control" type="text" name="cpuSocket" placeholder="cpuSocket" /></div>
                    <div className="mb-3"><input onChange={(e) => {setCompatibleMemory(e.target.value)}} className="form-control" type="text" name="compatibleMemory" placeholder="compatibleMemory" /></div>
                    <div className="mb-3"><input onChange={(e) => {setProductDescription(e.target.value)}} className="form-control" type="text" name="productDescription" placeholder="productDescription" /></div>
                    <div className="mb-3"><input onChange={(e) => {setTag(e.target.value)}} className="form-control" type="text" name="tag" placeholder="tag" /></div>
                    <div className="mb-3"><button onClick={submitBoard} className="btn btn-primary d-block w-100" type="button">Register</button></div>
                </form>
            </section>
        </div>
        </>
    )
}

export default Createboard