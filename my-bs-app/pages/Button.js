import { useState } from "react"

const Button =({handleParent, r})=>{
    // we handle model-data in state at the top of the component
    const [stake, setStake] = useState(0) // the state is globally available within this component
    const [bg, setBg] = useState(1)
    const [whichRobot, setWhicRobot] = useState(1)
    const handleBtn = ()=>{
        // take the current stake and increment by one
        setStake(stake+1)
    }
    const handleWhichRobot = (e)=>{
        setWhicRobot(e.target.value)
    }
    const handleChange = (e)=>{
        // set the value of bg (so the form field will know it can update)
        console.log(e.target.value)
        setBg(e.target.value) // JavaScript ALWAYS makes sure there is an event
    }
    return (
        <>
        <h4>Fun with Robot images</h4>
        <p>Current position: {stake}</p>
        {/* NB we do not invoke the function... no brackets */}
        <button onClick={handleBtn}>Buy</button>
        <button onClick={handleParent}>Go</button>
        {/* in React we use 'controlled fields' */}
        {/* bind the value to  a stateful data-model. Bind the event to a handler */}
        {/*                                we ALWAYS get an event as an argument to the function  */}
        <input placeholder="which bg set" value={bg} onChange={ handleChange } />
        <input type={'number'} 
        min={'1'} max={'5'} value={whichRobot}
        onChange={handleWhichRobot}/>
        <img src={`https://robohash.org/${r}?set=set${whichRobot}&bgset=bg${bg}`} alt={r} />

        </>
    )
}
export default Button