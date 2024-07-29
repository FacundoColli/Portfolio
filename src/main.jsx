import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import Contacto from './Component/Main/Contacto/Contacto'
import Hero from './Component/Main/Hero/Hero'
import Proyectos from './Component/Main/Proyectos/Proyectos'
import Servicios from './Component/Main/Servicios/Servicios'
import SobreMi from './Component/Main/SobreMi/SobreMi'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Hero/>
    <Servicios/>
    <SobreMi/>
    <Proyectos/>
    <Contacto/>
    <Footer/>
  </React.StrictMode>,
)
