import React, { useState } from 'react';
import Card from './Card';

function App() {
  const [nombre, setNombre] = useState('');
  const [sabores, setSabores] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nombre:', nombre);
    console.log('Sabores:', sabores);
    
  };

  const handleInputChange = (field, value) => {
    if (field === 'nombre') {
      setNombre(value);
    } else if (field === 'sabores') {
      setSabores(value);
    }
  };

  return (
    <div>
      <h1>Heladería el Pomar</h1>
      <h3>Ingresa nombre y sabores preferidos</h3>
      <Card
        onSubmit={handleSubmit}
        onChange={handleInputChange}
        nombre={nombre}
        sabores={sabores}
      />
    </div>
  );
}

export default App;