import { useState } from "react";

const CountryComponent = ({ country = {} }) => {
    const [score, setScore] = useState(1);
    return (
        <li>
            <b>{country['name']['common']}</b>:
            <i>{Object.keys(country['currencies'])}</i>

            | <button onClick={() => setScore(score + 1)}>
                {score}+
            </button>
        </li>
    )
}

export default CountryComponent