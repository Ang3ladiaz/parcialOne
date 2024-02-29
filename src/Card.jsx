import React from 'react';

const Card = ({ onSubmit, onChange, nombre, sabores }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label className="nombre">Nombre:</label>
          <input type="text" id="nombre"value={nombre}
            onChange={(e) => onChange('nombre', e.target.value)}
          />
        </div>
        <div>
          <label className="sabores">Sabores:</label>
          <input
            type="text"
            id="sabores"
            value={sabores}
            onChange={(e) => onChange('sabores', e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Card;