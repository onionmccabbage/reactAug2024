// remember npm install axios
import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import CatImage from "./cat_image"

const CatComponent = () => {
    const [cats, setCats] = useState([]) // we will use .map so need an array
    const [maxWidth, setMaxWidth] = useState(500)
    const [smallCats, setSmallCats] = useState([])
    const changeWhichCats = (num) => {
        // here we use Array.filter to show only matching members
        setSmallCats(cats.filter((cat) =>
            cat.width < num 
        ))
    }
    const changeMaxWidth = (e) => {
        changeWhichCats(e.target.value)
        setMaxWidth(e.target.value)
    }
    useEffect( // only useEffect for external stuff
        () => {
            // conditional render - wait until there are cats then re-render
            axios.get('https://jsonplaceholder.typicode.com/users')
            axios.get('https://api.thecatapi.com/v1/images/search?limit=3')
                .then((response) => {
                    setCats(response.data)
                })
            // fetch('https://api.thecatapi.com/v1/images/search?limit=10')
            //     .then(response => response.json())
            //     .then((data) => {
            //         setCats(data)
            //         setSmallCats(data) // initially no filtering
            //     })
        }
        , [] // [] will only refresh when render changes
    )
    if (!cats) {
        return (<h4>loading cats...</h4>)
    }
    return (
        <>
            <h5>Here are the results</h5>
            <label>
                Show images smaller than {maxWidth} pixels wide
                <input value={maxWidth} onChange={changeMaxWidth} type="range" min={100} max={1024} step={32} />
            </label>

            {/* <ul>{listItems}</ul> */}
            {/* <pre>{JSON.stringify(cats)}</pre> */}
            {/* {cats.map((cat: any) => { // remember, if we use {} we MUST say 'return' */}
            {smallCats.map((cat) => {
                // JSX elements directly inside a map() call always need keys
                return (
                    <Fragment key={cat.id}>
                        {/* <pre>cat: {JSON.stringify(cat)}</pre> */}

                            <h5>ID: {cat.id} width:{cat.width}</h5>
                            {/* <img src={cat.url} alt={cat.id} /> */}
                            <CatImage cat={cat} />
                    </Fragment>
                )
            })}
        </>
    )
}
export default CatComponent