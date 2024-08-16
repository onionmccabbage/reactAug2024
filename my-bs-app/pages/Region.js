import { useEffect, useState } from "react"

const Region = () => {
    const [region, setRegion] = useState('South America')
    const [countryData, setCountryData] = useState({ country: 'Costa Rica', currency: 'Costa Rica Colon' })
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
        }
        // dont forget to call the function!!!!!!
        fetchData()

    }, [region]) // the [] is an array of dependencies (it is optional, but explitly declare is good practice)
    // if [] is empty, useEffect triggers ONE, on component load
    // if [] ontains any stateful models, useEffect will be triggered if ANY of them change (also on component load)


    return (
        <>
            <h4>The Region API</h4>
            <select value={region} onChange={handleRegionChange}>
                <option>South America</option>
                <option>North America</option>
                <option>Northern Europe</option>
                <option>Southern Europe</option>
            </select>
            <hr />
            <p>Chosen Region: {region} </p>
        </>
    )
}
export default Region
