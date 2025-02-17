import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/data')
      .then(response => setData(response.data))
      .catch(error => console.error("Error al hacer la solicitud: ", error));
  }, []);

  return (
    <div>
      <h1>Datos del backend</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Cargando..."}
    </div>
  );
}

export default App;
