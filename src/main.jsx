import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import vehicles from './data/vehicules.js';
import VehiculosView from './view/VehiculosView.jsx';

const routers = [
  { 
    path: "/",
    element: <App/>,

  },
];

vehicles.forEach((veh) =>{
  routers.push({
    path: veh.name,
    element: <VehiculosView veh={veh}/>,
  });
});

const router = createBrowserRouter(routers);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
