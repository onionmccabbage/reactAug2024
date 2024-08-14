import { useState } from "react"
import Button from "./Button"
import Region from "./Region"
import Ticker from "./Ticker"

const Panel = ()=>{
    const [rand, setRand] = useState(55)
    const cleverStuff = ()=>{
        // increment the value of rand
        setRand(rand+5)
    }
    return (
        <>
        {/* these are really handy to ensure a single root element */}
            <h3>Working with Controlled Components</h3>
            <b>The random value is {rand}</b>
            {/* remember to import these!!! */}
            <Button r={rand} handleParent={cleverStuff} />
            <Region />
            <Ticker />
        </>
    )
}
export default Panel