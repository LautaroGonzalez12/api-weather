import React from 'react';

const Clima = ({resultado}) => {

    const gradosCelsius= 273.15;

    const {name, main} = resultado;

    if (!name) return null;
  return (
    <>
        <div className='card-panel white col s12'>
            <div className='black-text'>
                <h2>El Clima de {name} es:</h2>
                <p className='temperatura'>
                    {(main.temp - gradosCelsius).toFixed(1)} <span>&#x2103;</span>
                </p>
                <p> Temperatura Maxima :
                    {(main.temp_max - gradosCelsius).toFixed(1)} <span>&#x2103;</span>
                </p>
                <p> Temperatura Minima :
                    {(main.temp_min - gradosCelsius).toFixed(1)} <span>&#x2103;</span>
                </p>
            </div>
        </div>
    </>
  )
};

export default Clima;
