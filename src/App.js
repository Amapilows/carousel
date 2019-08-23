import React from 'react';
import '../src/components/App.css';
import Carousel from './components/Carousel/carousel';


function App() {
  return (
    <React.Fragment>
      <h3>Aquí se debería mostrar variadas fotos de Keanu </h3>
      <div className="test">
        <div className="container"> 
          <Carousel />
        </div>
      </div>


    </React.Fragment>

  );
}

export default App;
