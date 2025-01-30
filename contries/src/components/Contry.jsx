import React from 'react'

function Contry({ contry }) {
    console.log(contry, Object.entries(contry.languages)); // Muestra las entradas del objeto en la consola

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
        </>
    )
}

export default Contry;
