import { useState } from "react"

const Region = () => {
    const [region, setRegion] = useState('South America')
    const [countryData, setCountryData] = useState({ country: 'Costa Rica', currency: 'Costa Rica Colon' })
    const handleRegionChange = (e)=>{
        setRegion(e.target.value)
    }
    
      
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
