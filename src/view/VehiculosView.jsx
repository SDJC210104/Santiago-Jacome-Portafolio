import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Vehiculos.css';

function VehiculosView({ category, onClose }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='Vehiculos'>
      <h1>{category.name}</h1>
      <Slider {...sliderSettings}>
        {category.models.map((model, index) => (
          <div key={index} className='vehicle-slide'>
            <h2>{model.name}</h2>
            <img src={model.image} alt={model.name} />
            <p>Año: {model.fichaT.Año}</p>
            <p>Potencia: {model.fichaT.Potencia}</p>
            <p>Velocidad Máxima: {model.fichaT.VelocidadMaxima}</p>
            <p>Peso: {model.fichaT.Peso}</p>
            <p>Precio: {model.fichaT.Precio}</p>
            <a
              className='cotizar-button'
              href={`https://wa.me/3003800321?text=Me%20interesaria%20cotizar%20el%20vehiculo%20${encodeURIComponent(
                model.name
              )}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              Cotizar
            </a>
          </div>
        ))}
      </Slider>
      <button className='regresar-button' onClick={onClose}>
        Regresar
      </button>
      
    </div>
  );
}

export default VehiculosView;
