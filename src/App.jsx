import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../componentes/api/AuthContext'; // Importa tu proveedor
import './App.css'
import Footer from '../componentes/footer/Footer'
import Header from '../componentes/Header/Header';
import FormularioI from '../componentes/formulariol/formularioI';
import Home from '../componentes/Home/Home'
import ListaLugares from '../componentes/busqueda/busqueda';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from '../componentes/nosotros/nosotros'
import Cartas from '../componentes/CiudadesRecomendadas/CiudadesRecomendadas';
import Comentarios from '../componentes/comentarios/comentarios';
import LoginPage from '../componentes/login/LoginPage';
import RegisterPage from '../componentes/registro/RegisterPage';
import Register from '../componentes/api/Register';
import Login from '../componentes/api/Login';
import ProtectedRoute from '../componentes/api/ProtectedRoute';
import ReviewsPage from '../componentes/ReviewCard/ReviewPages';

function App() {
  return (
    <>
    <AuthProvider>
      <Router>
     <header>
        <Header />
        <p className='voyagevista'>VoyageVista</p>
     </header>
    <Routes>
      <Route path='/Home' element={<Home />}></Route>
      <Route path='/formulariol' element={<FormularioI />}></Route>
      <Route path='/AboutUs' element={<AboutUs />}></Route>
      <Route path='/Cartas' element={<Cartas />}></Route>
      <Route path='/comentarios' element={<Comentarios />}></Route>
      <Route path="/comentarios" element={ <ProtectedRoute> <Comentarios /></ProtectedRoute> } />
      <Route path='/Login' element={<LoginPage />}></Route>
      <Route path='/Registro' element={<RegisterPage />}></Route>
      <Route path='/Registrarse' element={<Register />}></Route>
      <Route path='/Logearse' element={<Login />}></Route>
      <Route path='/' element={<Login />}></Route>
      <Route path='/reviews' element={<ReviewsPage />}></Route>
      <Route path='/https://www.google.com/search?q=${google}' element={<ListaLugares />}></Route>
    </Routes>
    <footer>
    <Footer />
    </footer>
    </Router>     
    </AuthProvider>
    </>
  )
}


export default App
