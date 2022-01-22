import React, { useEffect, useState } from 'react';
import Clima from './components/Clima';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Error from './components/Error';


function App() {

  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [consultar, setConsultar] = useState(false)
  const [resultado, setResultado] = useState({});
  const [error, setError] = useState(false)

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarApi = async () => {

      if (consultar) {

        const apiKey = 'c7c8617244e5b79deb6968b42882dcc3';
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        const result = await response.json();
        setResultado(result);
        setConsultar(false);

        //detecta si hubo resultados correctos en la consulta a la api
        if (result.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }
      }
    }
    consultarApi();
  }, [consultar]);


  let componente;
  if (error) {
    componente = <Error mensaje="No hay resultados" />
  } else {
     componente = <Clima
      resultado={resultado} 
    />
  }

  return (
    <>
      <Header
        title="Api Weather"
      />

      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsultar={setConsultar}
              />
            </div>
            <div className='col m6 s12'>
              {componente}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
