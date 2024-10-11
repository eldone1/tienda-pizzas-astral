import React from 'react'
import '../estilos/Header.css';
import banner from '../img/banner.png';

function Header () {
    return (

        <header className='contenedor-header'>

            <img src={banner} className='banner' alt="banner" />

            <div className='contenedor-horario'>
                <p>Delivery GRATIS de Viernes a Domingos / Atencion de: 10am a 10pm - Exclusivo solo Web</p>
            </div>

        </header>

    );
}

export default Header;