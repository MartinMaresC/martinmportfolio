import React from 'react';
import './App.css';
import Navbar from './Componentes/Navbar';
import About from './Componentes/About';
import Portfolio from './Componentes/Portfolio';
import Contact from './Componentes/Contact';
import Textabout from './Componentes/Textabout';

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <About />
      <Textabout />
      <Portfolio />
      <Contact />
    </div>
    </>
  );
}

export default App;
