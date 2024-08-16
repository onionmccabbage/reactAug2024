import { useState } from "react"
import Button from "./Button"
import Region from "./Region"
import TickerComponent from "./TickerComponents"
import Typicode from "./TypicodeComponent"

const Panel = ()=>{
    const [rand, setRand] = useState(55)
    const cleverStuff = ()=>{
        // increment the value of rand
        setRand(rand+5)
    }
    // this function expects two arguments (see button below)
    const demoFn = (m, n)=>{
        console.log(m, n)
    }
    return (
        
        <> {/* these are really handy to ensure a single root element */}
            <h3>Working with Controlled Components</h3>
            <b>The random value is {rand}</b>
            {/* remember to import these!!! */}
            <Button r={rand} handleParent={cleverStuff} />
            <Region /> 
            <TickerComponent />
            <hr/>
                {/* we can pass arguments into an event handler function */}
                <button onClick={()=>{demoFn(3, 5)}} >Demo: passing args to function</button>
            <hr/>
     {/* Here is a sample using GET POST PUT UPDATE and DELETE */}
        <Typicode />
        </>
    )
}
export default Panel