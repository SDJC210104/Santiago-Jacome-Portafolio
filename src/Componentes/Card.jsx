import "./Card.css";
import React from 'react'
import { Link } from "react-router-dom";

function Card({ title = "Titulo por Defecto", models = [] }) {
  return (
    <div className='Card'>
      <Link to={title}>
        <h2>{title}</h2>
      </Link>
      {/* Mapear cada modelo de vehículo para que aparezca en una línea separada */}
      {models.map((modelo, index) => (
        <div key={index}>
          <h3>{modelo.name}</h3>
          <p>{modelo.description}</p>
          {/* Agregar la ficha técnica y la imagen aquí */}
          <img src={modelo.image} alt={modelo.name} />
          <table>
            <tbody>
              {Object.entries(modelo.fichaT).map(([key, value], index) => (
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
  );
}

export default Card;
