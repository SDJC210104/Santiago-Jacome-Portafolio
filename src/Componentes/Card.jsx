import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.css"

function Card({ title, to }) {
  return (
    <Link to={to}>
      <div className="card">
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

export default Card;
