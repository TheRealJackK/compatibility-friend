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
    const [supportedArchitecture, setSupportedArchitecture] = useState("")
    const [supportedArchitecture2, setSupportedArchitecture2] = useState("")
    const [supportedArchitecture3, setSupportedArchitecture3] = useState("")
    const [supportedArchitecture4, setSupportedArchitecture4] = useState("")
    const [supportedArchitecture5, setSupportedArchitecture5] = useState("")

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
            supportedArchitecture: supportedArchitecture,
            supportedArchitecture2: supportedArchitecture2,
            supportedArchitecture3: supportedArchitecture3,
            supportedArchitecture4: supportedArchitecture4,
            supportedArchitecture5: supportedArchitecture5
        })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
        .then(() => {
            alert("Success! Redirecting you now")
            window.location.href = "/Adminpanel"
        })
    }

    return(
        <>
        <span className="page">
            <h2>Add A Motherboard</h2>
            <form>
                <div>
                    <h3>Add A Motherboard</h3>
                    <label>Board Image Path</label>
                    <input onChange={(e) => {setBoardImgPath(e.target.value)}} type="text" name="boardImgPath" placeholder="boardImgPath" />
                    <label>ProductName</label>
                    <input onChange={(e) => {setProductName(e.target.value)}} type="text" name="productName" placeholder="ProductName" />
                    <label>Series</label>
                    <input onChange={(e) => {setSeries(e.target.value)}} type="text" name="series" placeholder="series" />
                    <label>Manufactorer</label>
                    <input onChange={(e) => {setManufactorer(e.target.value)}} type="text" name="manufactorer" placeholder="manufactorer" />
                    <label>Chipset</label>
                    <input onChange={(e) => {setChipset(e.target.value)}} type="text" name="chipset" placeholder="chipset" />
                    <label>Cpu Socket</label>
                    <input onChange={(e) => {setCpuSocket(e.target.value)}} type="text" name="cpuSocket" placeholder="cpuSocket" />
                    <label>Compatible Memory</label>
                    <input onChange={(e) => {setCompatibleMemory(e.target.value)}} type="text" name="compatibleMemory" placeholder="compatibleMemory" />
                    <label>Product Description</label>
                    <input onChange={(e) => {setProductDescription(e.target.value)}} type="text" name="productDescription" placeholder="productDescription" />
                    <label>Tag</label>
                    <input onChange={(e) => {setTag(e.target.value)}} type="text" name="tag" placeholder="tag" />
                    <label>Supported Architecture</label>
                    <input onChange={(e) => {setSupportedArchitecture(e.target.value)}} type="text" name="supportedArchitecture" placeholder="supportedArchitecture" />
                    <label>Supported Architecture 2 (If there are none leave blank)</label>
                    <input onChange={(e) => {setSupportedArchitecture2(e.target.value)}} type="text" name="supportedArchitecture2" placeholder="supportedArchitecture2" />
                    <label>Supported Architecture 3 (If there are none leave blank)</label>
                    <input onChange={(e) => {setSupportedArchitecture3(e.target.value)}} type="text" name="supportedArchitecture3" placeholder="supportedArchitecture3" />
                    <label>Supported Architecture 4 (If there are none leave blank)</label>
                    <input onChange={(e) => {setSupportedArchitecture4(e.target.value)}} type="text" name="supportedArchitecture4" placeholder="supportedArchitecture4" />
                    <label>Supported Architecture 5 (If there are none leave blank)</label>
                    <input onChange={(e) => {setSupportedArchitecture5(e.target.value)}} type="text" name="supportedArchitecture5" placeholder="supportedArchitecture5" />
                    <button id="submit" onClick={submitBoard} type="button">Submit</button>
                </div>
            </form>
        </span>
        </>
    )
}

export default Createboard