import React from "react";
import { useState } from "react";
import Axios from "axios";

const Createcpu = () => {

    const [cpuImage, setCpuImage] = useState("")
    const [cpuName, setCpuName] = useState("")
    const [cpuSocket, setCpuSocket] = useState("")
    const [productFamily, setProductFamily] = useState("")
    const [productLine, setProductLine] = useState("")
    const [numOfCores, setNumOfCores] = useState("")
    const [numOfThreads, setNumOfThreads] = useState("")
    const [baseClock, setBaseClock] = useState("")
    const [maxBoostClock, setMaxBoostClock] = useState("")
    const [l1Cache, setL1Cache] = useState("")
    const [l2Cache, setL2Cache] = useState("")
    const [l3Cache, setL3Cache] = useState("")
    const [defaultTDP, setDefaultTDP] = useState("")
    const [processorTechnology, setProcessorTechnology] = useState("")
    const [maxOpTemp, setMaxOpTemp] = useState("")
    const [launchDate, setLaunchDate] = useState("")
    const [unlocked, setUnlocked] = useState("")
    const [tags, setTags] = useState("")

    const submitCpu = (event) => {
        event.preventDefault();
        Axios.post("http://localhost:3001/api/insertcpu", {
            cpuImage: cpuImage,
            cpuName: cpuName,
            cpuSocket: cpuSocket,
            productFamily: productFamily,
            productLine: productLine,
            numOfCores: numOfCores,
            numOfThreads: numOfThreads,
            baseClock: baseClock,
            maxBoostClock: maxBoostClock,
            l1Cache: l1Cache,
            l2Cache: l2Cache,
            l3Cache: l3Cache,
            defaultTDP: defaultTDP,
            processorTechnology: processorTechnology,
            maxOpTemp: maxOpTemp,
            launchDate: launchDate,
            unlocked: unlocked,
            tags: tags,
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
        <div id="buttons" className="container-fluid w-50 mt-5 border border-secondary rounded bg-light shadow">
            <h2 className="text-center">Create a CPU</h2>
            <section className="login-clean">
                <form>
                    <div className="mb-3"><input onChange={(e) => {setCpuImage(e.target.value)}} className="form-control" type="text" name="cpuImage" placeholder="cpuImage" /></div>
                    <div className="mb-3"><input onChange={(e) => {setCpuName(e.target.value)}} className="form-control" type="text" name="cpuName" placeholder="cpuName" /></div>
                    <div className="mb-3"><input onChange={(e) => {setCpuSocket(e.target.value)}} className="form-control" type="text" name="cpuSocket" placeholder="cpuSocket" /></div>
                    <div className="mb-3"><input onChange={(e) => {setProductFamily(e.target.value)}} className="form-control" type="text" name="productFamily" placeholder="productFamily" /></div>
                    <div className="mb-3"><input onChange={(e) => {setProductLine(e.target.value)}} className="form-control" type="text" name="productLine" placeholder="productLine" /></div>
                    <div className="mb-3"><input onChange={(e) => {setNumOfCores(e.target.value)}} className="form-control" type="text" name="numOfCores" placeholder="numOfCores" /></div>
                    <div className="mb-3"><input onChange={(e) => {setNumOfThreads(e.target.value)}} className="form-control" type="text" name="numOfThreads" placeholder="numOfThreads" /></div>
                    <div className="mb-3"><input onChange={(e) => {setBaseClock(e.target.value)}} className="form-control" type="text" name="baseClock" placeholder="baseClock" /></div>
                    <div className="mb-3"><input onChange={(e) => {setMaxBoostClock(e.target.value)}} className="form-control" type="text" name="maxBoostClock" placeholder="maxBoostClock" /></div>
                    <div className="mb-3"><input onChange={(e) => {setL1Cache(e.target.value)}} className="form-control" type="text" name="l1Cache" placeholder="l1Cache" /></div>
                    <div className="mb-3"><input onChange={(e) => {setL2Cache(e.target.value)}} className="form-control" type="text" name="l2Cache" placeholder="l2Cache" /></div>
                    <div className="mb-3"><input onChange={(e) => {setL3Cache(e.target.value)}} className="form-control" type="text" name="l3Cache" placeholder="l3Cache" /></div>
                    <div className="mb-3"><input onChange={(e) => {setDefaultTDP(e.target.value)}} className="form-control" type="text" name="defaultTDP" placeholder="defaultTDP" /></div>
                    <div className="mb-3"><input onChange={(e) => {setProcessorTechnology(e.target.value)}} className="form-control" type="text" name="processorTechnology" placeholder="processorTechnology" /></div>
                    <div className="mb-3"><input onChange={(e) => {setMaxOpTemp(e.target.value)}} className="form-control" type="text" name="maxOpTemp" placeholder="maxOpTemp" /></div>
                    <div className="mb-3"><input onChange={(e) => {setLaunchDate(e.target.value)}} className="form-control" type="text" name="launchDate" placeholder="launchDate" /></div>
                    <div className="mb-3"><input onChange={(e) => {setUnlocked(e.target.value)}} className="form-control" type="text" name="unlocked" placeholder="unlocked" /></div>
                    <div className="mb-3"><input onChange={(e) => {setTags(e.target.value)}} className="form-control" type="text" name="tags" placeholder="tags" /></div>
                    <div className="mb-3"><button onClick={submitCpu} className="btn btn-primary d-block w-100" type="button">Register</button></div>
                </form>
            </section>
        </div>
        </>
    )
}

export default Createcpu;