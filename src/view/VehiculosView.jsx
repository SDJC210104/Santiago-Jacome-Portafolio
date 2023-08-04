import React from 'react';
import { Link } from 'react-router-dom';
import "./Vehiculos.css";

function VehiculosView({ veh }) {
  return (
    <>
      <div className='Vehiculos'>
        <h1>{veh.name}</h1>
        {veh.models.map((model, index) => (
          <div key={index}>
            <h2>{model.name}</h2>
            <h3>{model.description}</h3>
            <img src={model.image} alt={model.name} />

            {/* Tabla de ficha técnica */}
            <table>
              <tbody>
                {Object.entries(model.fichaT).map(([key, value], index) => (
                  <tr key={index}>
                    <th>{key}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
      <div className="button-container">
        <Link to="https://wa.me/3003800321?text=Me%20interesaria%20cotizar%20mi%20vehiculo">
          <button>Cotizar</button>
        </Link>
        <Link to="/">
          <button>Regresar</button>
        </Link>
      </div>
    </>
  );
}

export default VehiculosView;
