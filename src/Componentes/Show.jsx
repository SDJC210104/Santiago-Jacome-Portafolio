import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Show.css';

function Show() {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="show-container">
      <button onClick={handleClick}>{show ? 'Cerrar' : 'Nuestras Redes'}</button>
      {show && (
        <div className="icons-container">
          
          <div>
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaWhatsapp className="icon" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Show;
