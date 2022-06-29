import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header'
import Register from './components/Register'
import Footer from './components/Footer';
import Home from './components/pages/Home';
import RegisterForm from './components/pages/RegisterForm'
import RegComplete from './components/pages/RegComplete';

import { BrowserRouter } from 'react-router-dom';
import { Route, Link, Routes } from 'react-router-dom';


function App() {

  return (

    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<RegisterForm />} />
          <Route exact path="/regComplete" element={<RegComplete />} />
        </Routes>
      </BrowserRouter>
    </>

  );

}

export default App;
