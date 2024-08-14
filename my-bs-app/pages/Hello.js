// every component looks like this.....
// if you like you may use old-skool functions

import { useState } from "react"

// properties (just like html attributes) are immutable, we NEVER change them
const Hello = ({ username, age }) => { // we may receive incoming properties in this line
    // we may need to declare stateful members here (the model)
    const [level, setLevel] = useState('guest') // level mights be guest, user, admin or superuser
    return (
        // this is the view
        // we can inject any model-data using {}
        <>
            {/* React requires a SINGLE container tag, usually <> */}
            <h4>{age} Inside the Hello Component: greetings {username} {level}</h4>
            <button onClick={()=>{setLevel('admin')}}>Alter</button>
        </>
    )
}
export default Hello