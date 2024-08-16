import { Fragment, useEffect, useState } from "react"
import CountryComponent from "./CountryComponent"

const Region = () => {
    // React will give use a 'setter' function
    const [region, setRegion] = useState('South America')
    // the inisial state does not need ot match any later state, but it probably should
    const [countryData, setCountryData] = useState([{ country: 'Costa Rica', currency: 'Costa Rica Colon' }])
    const handleRegionChange = (e)=>{
        setRegion(e.target.value)
    }
     // useEffect is a 'side-effect' often used to grab API data asynchronously
    useEffect( ()=>{
        // we can fetch some data from an API
        const fetchData = async ()=>{
            const url = `https://restcountries.com/v3.1/subregion/${region}?fields=name,currencies`;
            // by default fetch makes a 'GET' request
            const response = await fetch(url) // a promise that will return something from the API
            const data = await response.json()
            console.log(data)
            // use this returned data to populate  our 'countryData' stateful model
            setCountryData(data) // this does not need to conform the the initial data we provided
        }
        // dont forget to call the function!!!!!!
        fetchData()

    }, [region]) // the [] is an array of dependencies (it is optional, but explitly declare is good practice)
    // if [] is empty, useEffect triggers ONE, on component load
    // if [] ontains any stateful models, useEffect will be triggered if ANY of them change (also on component load)
    return (
        // the following is NOT html - it is JSX JavaScript XML
        <>
            <h4>The Region API</h4>
            <select value={region} onChange={handleRegionChange}>
                <option>South America</option>
                <option>North America</option>
                <option>Northern Europe</option>
                <option>Southern Europe</option>
            </select>
            <hr />
            {/* NB in JSX we CANNOT refer to CSS as 'class' we must say 'className' */}
            <p className='wibblywoo'>Chosen Region: {region} </p>
            {/* we need to convert the JavaScript object into JSON in order to render in React */}
            {/* NB this is only really applicable for handy debugging */}
            <pre>{JSON.stringify(countryData)}</pre>   
            {/* we may iterate over the resulting 'countryData */}
            <ul>
                {/* at any point inside JSX we may write javascript */}
                {countryData.map((country) => {
                    // JSX elements directly inside a map() call always need keys
                    return (
                        // Fragment will be ignored by the browser
                        <Fragment key={country.name['common']}>
                            {/* <li>
                                Country: {country.name['common']} Currency: {Object.keys(country.currencies)}
                            </li> */}
                            <CountryComponent country={country} />
                        </Fragment>
                    )
                })}
            </ul>
        </>
    )
}
export default Region
