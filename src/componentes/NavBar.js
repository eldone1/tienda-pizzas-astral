import React from 'react'
import '../estilos/NavBar.css';
import wasap from '../img/wasap.png';
import fijo from '../img/fijo.png';
import logo from '../img/logo.png';
import carrito from '../img/carrito.png';

function NavBar() {
    return (

        <nav className='contenedor-navbar'>

            <div className='contenedor-textos'>

                <img src={wasap} className='icono' alt="wasap" />

                <div className='contenedor-wasap'>
                    <p>Has tu pedido por whatsapp</p>
                </div>

                <img src={fijo} className='icono' alt="fijo" />

                <div className='contenedor-numero'>
                    <p>Llamanos al: 01-253 6545</p>
                </div>

            </div>

            <div className='contenedor-menu'>

                <div className='icono-logo'>
                    <img src={logo} className='icono' alt="logo" />
                </div>

                <ul>
                    <li><a href="">INICIO</a></li>
                    <li><a href="#menu">PIZZAS</a></li>
                    <li><a href="">PROMOCIONES</a></li>
                    <li><a href="#footer">CONTACTOS</a></li>
                </ul>

                <div className='div-buscar'>
                    <input type="text" placeholder='Buscar'></input>
                </div>

                <div className='icono-carrito'>
                    <img src={carrito} className='icono' alt="carrito" />
                </div>

            </div>


        </nav>

    );
}

export default NavBar;