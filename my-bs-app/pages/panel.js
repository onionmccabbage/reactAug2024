import Button from "./Button"
import Region from "./Region"
import Ticker from "./Ticker"

const Panel = ()=>{
    return (
        <>
        {/* these are really handy to ensure a single root element */}
            <h3>Working with Controlled Components</h3>
            {/* challenge:
                declare three more React components: Button.js, 
                Region.js and Ticker.js
                Inside each, declare the function/export
                Each returns a simple <h4>
                Instantiate one of each inside <Panel />
            
            */}
            {/* remember to import these!!! */}
            <Button />
            <Region />
            <Ticker />
        </>
    )
}
export default Panel