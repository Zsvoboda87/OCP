
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header'
import Register from './components/Register'
import Footer from './components/Footer';
import Home from './components/pages/Home'

import { useEffect, useState } from 'react';

function App() {

  return (
    <>
      <Header />
      <Home />
      <Register />
      <Footer />
    </>
  );

}

export default App;
