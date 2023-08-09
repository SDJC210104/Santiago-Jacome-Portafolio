import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import vehicles from './data/vehicules';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryName) => {
    const category = vehicles.find((cat) => cat.name === categoryName);
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <div className="centered-menu">
        <h1>JacoMotors</h1>
        <nav className="category-list">
          {vehicles.map((category, index) => (
            <Link
              key={index}
              to={`/categorias/${encodeURIComponent(category.name)}`}
              className="category-link"
              onClick={() => handleCategoryClick(category.name)}
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </div>
      {selectedCategory && (
        <div className="category-details">
          <Carousel showThumbs={false}>
            {selectedCategory.models.map((model, index) => (
              <div key={index} className="vehicle-card">
                <div className="vehicle-card-content">
                  <h3>{model.name}</h3>
                  <img className="vehicle-image" src={model.image} alt={model.name} />
                  <div className="vehicle-details">
                    <table>
                      <tbody>
                        {Object.entries(model.fichaT).map(([key, value]) => (
                          <tr key={key}>
                            <td>{key}:</td>
                            <td>{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <br /><br />
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
}

export default App;
