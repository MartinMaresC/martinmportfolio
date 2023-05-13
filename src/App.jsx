import React from 'react';
import './App.css';
import Navbar from './Componentes/Navbar';
import About from './Componentes/About';
import Portfolio from './Componentes/Portfolio';
import Contact from './Componentes/Contact';
import Textabout from './Componentes/Textabout';
import Footer from './Componentes/Footer';
import Video from './Componentes/Video';

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <About />
      <Video />
      <Textabout />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
    </>
  );
}

export default App;
