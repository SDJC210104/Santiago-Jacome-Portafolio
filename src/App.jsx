import './App.css';
import Card from './Componentes/Card';
import Show from './Componentes/Show';
import Vehicules from "./data/vehicules";


function App() {
  const vehiculesList = Vehicules.map(v => {
    return <Card title={v.name} descr={v.description} />;
  });

  return (<div className='App'>
    <h1>JacoMotors</h1>
    <div className='container'>

      {vehiculesList}
    </div>
    <Show></Show>

  </div>);


}

export default App
