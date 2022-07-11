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
    const [unlocked, setUnlocked] = useState("No")
    const [tags, setTags] = useState("")
    const [architecture, setArchitecture] = useState("zen")

    const submitCpu = (e) => {
        e.preventDefault();
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
            architecture: architecture
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
            <h2>Add A Cpu</h2>
            <form>
                <div>
                    <h3>Add A Cpu</h3>
                    <label>Cpu Image Path</label>
                    <input onChange={(e) => {setCpuImage(e.target.value)}} type="text" name="cpuImage" placeholder="cpuImage" />
                    <label>Cpu Name</label>
                    <input onChange={(e) => {setCpuName(e.target.value)}} type="text" name="cpuName" placeholder="cpuName" />
                    <label>Cpu Socket</label>
                    <input onChange={(e) => {setCpuSocket(e.target.value)}} type="text" name="cpuSocket" placeholder="cpuSocket" />
                    <label>Product Family</label>
                    <input onChange={(e) => {setProductFamily(e.target.value)}} type="text" name="productFamily" placeholder="productFamily" />
                    <label>Product Line</label>
                    <input onChange={(e) => {setProductLine(e.target.value)}} type="text" name="productLine" placeholder="productLine" />
                    <label>Number Of Cores</label>
                    <select onChange={(e) => {setNumOfCores(e.target.value)}} name="numOfCores">
                        <option>2</option>
                        <option>4</option>
                        <option>6</option>
                        <option>8</option>
                        <option>10</option>
                        <option>12</option>
                        <option>14</option>
                        <option>16</option>
                        <option>18</option>
                        <option>20</option>
                        <option>22</option>
                        <option>24</option>
                        <option>32</option>
                        <option>64</option>
                        <option>128</option>
                    </select>
                    <label>Number Of Threads</label>
                    <select onChange={(e) => {setNumOfThreads(e.target.value)}} name="numOfThreads">
                    <option>2</option>
                        <option>4</option>
                        <option>6</option>
                        <option>8</option>
                        <option>10</option>
                        <option>12</option>
                        <option>14</option>
                        <option>16</option>
                        <option>18</option>
                        <option>20</option>
                        <option>22</option>
                        <option>24</option>
                        <option>32</option>
                        <option>64</option>
                        <option>128</option>
                    </select>
                    <label>Base Clock</label>
                    <input onChange={(e) => {setBaseClock(e.target.value)}} type="text" name="baseClock" placeholder="baseClock" />
                    <label>Max Boost Clock</label>
                    <input onChange={(e) => {setMaxBoostClock(e.target.value)}} type="text" name="maxBoostClock" placeholder="maxBoostClock" />
                    <label>L1 Cache</label>
                    <input onChange={(e) => {setL1Cache(e.target.value)}} type="text" name="l1Cache" placeholder="l1Cache" />
                    <label>L2 Cache</label>
                    <input onChange={(e) => {setL2Cache(e.target.value)}} type="text" name="l2Cache" placeholder="l2Cache" />
                    <label>L3 Cache</label>
                    <input onChange={(e) => {setL3Cache(e.target.value)}} type="text" name="l3Cache" placeholder="l3Cache" />
                    <label>Default TDP</label>
                    <input onChange={(e) => {setDefaultTDP(e.target.value)}} type="text" name="defaultTDP" placeholder="defaultTDP" />
                    <label>Processor Technology</label>
                    <input onChange={(e) => {setProcessorTechnology(e.target.value)}} type="text" name="processorTechnology" placeholder="processorTechnology" />
                    <label>Maximum Operation Temperature</label>
                    <input onChange={(e) => {setMaxOpTemp(e.target.value)}} type="text" name="maxOpTemp" placeholder="maxOpTemp" />
                    <label>Launch Date</label>
                    <input onChange={(e) => {setLaunchDate(e.target.value)}} type="text" name="launchDate" placeholder="launchDate" />
                    <label>Unlocked For Overclocking?</label>
                    <select onChange={(e) => {setUnlocked(e.target.value)}} name="unlocked">
                        <option>No</option>
                        <option>Yes</option>
                    </select>
                    <label>Tags</label>
                    <select onChange={(e) => {setTags(e.target.value)}} name="tags">
                        <option></option>
                        <option>popular</option>
                    </select>
                    <label>Architecture</label>
                    <select onChange={(e) => {setArchitecture(e.target.value)}} name="architecture">
                        <option>zen</option>
                        <option>zen+</option>
                        <option>zen2</option>
                        <option>zen3</option>
                        <option>kaby lake</option>
                        <option>coffee lake</option>
                        <option>comet lake</option>
                        <option>rocket lake</option>
                        <option>alder lake</option>
                    </select>
                    <button id="submit" onClick={submitCpu} type="button">Submit</button>
                </div>
            </form>
        </span>
        </>
    )
}

export default Createcpu;