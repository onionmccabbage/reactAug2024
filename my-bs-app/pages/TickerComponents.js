import { Fragment, useEffect, useState } from "react"

const TickerComponent = () => {
    // some stateful data members
    // region, for the <select> controlled field
    const [companyName, setCompanyName] = useState('CitiGroup')
    // countryData, for the results of useEfect
    const [tickerData, setTickerData] = useState([])

    // event call-back handlers
    const handleNameChange = (e) => { // js will always pass an event
        setCompanyName(e.target.value)
    }
    // a side-effect we will need
    useEffect(() => {
        // declare the async function
        const fetchData = async () => {
            const url = `https://ticker-2e1ica8b9.now.sh/keyword/${companyName}%20`;
            const response = await fetch(url); // fetch will return a promise
            const data = await response.json(); // turns out response ALSO returns a promise
            // see whats been returned (could use console.log)
            console.log(data);
            setTickerData(data)
        }
        // ... then call the async function
        fetchData()
            // make sure to catch any error
            .catch(console.error);
    }, [companyName]) // []

    if (!tickerData) {
        return (<h4>loading ticker data...</h4>)
    }
    return (
        <section>
            <h3>Ticker Lookup API</h3>
            {/*  we need a controlled-field for the region picker */}
            <input value={companyName} placeholder="Company Name (case sensitive)" onChange={handleNameChange} />
            <hr />
            {/* <pre style={{ width: '320px' }}>{JSON.stringify(tickerData)}</pre> */}
            <hr />
            <ul>
                {tickerData.map((ticker) => {
                    // JSX elements directly inside a map() call always need keys
                    return (
                        <Fragment key={ticker.symbol}>
                            {/* {JSON.stringify(ticker)} */}
                        <p>{ticker.name} Symbol:<b>{ticker.symbol}</b></p>
                        </Fragment>
                    )
                })}
            </ul>
        </section>
    )
}
export default TickerComponent