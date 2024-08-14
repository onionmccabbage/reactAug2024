import { useState } from "react"

const Button =({handleParent, r})=>{
    // we handle model-data in state at the top of the component
    const [stake, setStake] = useState(0) // the state is globally available within this component
    const handleBtn = ()=>{
        // take the current stake and increment by one
        setStake(stake+1)
    }
    return (
        <>
        <h4>Fun with Robot images</h4>
        <p>Current position: {stake}</p>
        {/* NB we do not invoke the function... no brackets */}
        <button onClick={handleBtn}>Buy</button>
        <button onClick={handleParent}>Go</button>
        <img src={`https://robohash.org/${r}`} alt={r} />
        </>
    )
}
export default Button