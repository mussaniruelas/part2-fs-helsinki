import {useEffect, useState} from 'react'
import {getWeather} from '../service/wather';

function Contry({ contry }) {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        getWeather(contry.lat, contry.lng).then((data) => setWeather(data));
    },[])
    

    return (
        <>
            <h2>{contry.name}</h2>
            <p>Capital: {contry.capital}</p>
            <p>Area: {contry.area}</p>
            <h3>Languages</h3>
            <ul>
                {Object.entries(contry.languages).map(([key, language]) => (
                    <li key={key}>{language}</li>
                ))}
            </ul>
            <img src={contry.flag} alt={`Flag of ${contry.name}`} width="150"/>

            <h3>Wather in {contry.name}</h3>
            <p>temperature: {/*weather.temp*/ '-3.73 Celcius'}</p>
            <img src={/*weather.icon*/ ''} alt="Wather icon" />
            <p>wind: { /*weather.wind*/ '1.34 m/s'}</p>

        </>
    )
}

export default Contry;
