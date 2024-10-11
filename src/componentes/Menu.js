import React, { useState } from "react";
import americana from "../img/americana.png";
import hawaiana from "../img/hawaiana.png";
import quesos from "../img/6quesos.png";
import peperoni from "../img/peperoni.png";
import prom1 from "../img/cbopersonal.png";
import prom2 from "../img/cbocalzone.png";
import prom3 from "../img/superpack.png";
import prom4 from "../img/triplepack.png";

import "../estilos/Menu.css";

function Menu() {
  const [cart, setCart] = useState([]);

  //Agregar al carrito
  const addToCart = (menus) => {
    setCart([...cart, menus]);
    alert(`Producto agregado al Carrito de Compras.`);
  };
  const menu = [
    {
      name: "Americana",
      image: americana,
      price: "S/20.90",
      p: "Queso Mozarella, Salsa de Tomate y Jamon Americano.",
    },
    {
      name: "Hawaiana",
      image: hawaiana,
      price: "S/24.90",
      p: "Queso Mozarella, Salsa de Tomate, Jamon y Pina.",
    },
    {
      name: "6 Quesos",
      image: quesos,
      price: "S/25.90",
      p: "6 Quesos, Salsa de Tomare, Oregao y Tomate.",
    },
    {
      name: "Peperoni",
      image: peperoni,
      price: "S/20.90",
      p: "Queso Mozarella, Pepperoni y Salsa de Tomate.",
    },
    {
      name: "Combo Personal Full",
      image: prom1,
      price: "S/23.90",
      p: "1 pizza familiar sabor clasica con 2 gaseosas de 500ml",
    },
    {
      name: "Combo Calzone Full",
      image: prom2,
      price: "S/19.90",
      p: "1 Calzone con 3 Rolls de Pepperoni y Gaseosa Personal",
    },
    {
      name: "SuperPack",
      image: prom3,
      price: "S/129.90",
      p: "4 Pizzas Grandes del sabor a su preferencia.",
    },
    {
      name: "TriplePack",
      image: prom4,
      price: "S/99.90",
      p: "3 Pizzas Familiares clasicas con 6 Pepperoni Rolls.",
    },
  ];

  return (
    <div id="menu">
      <div className="contenedor-h1">
        <h1>¡LO MAS VENDIDO!</h1>
      </div>
      <div className="contenedor-p">
        <p>
          Te mostramos las pizzas y promociones mas pedidas que tenemos para
          ti!!
        </p>
      </div>
      <div className="menu-cards">
        {menu.map((menus) => (
          <div key={menus.name} className="menu-card">
            <img src={menus.image} alt={menus.name} />
            <article className="menu-about">
              <div className="menu-name">
                <strong>{menus.name}</strong>
                {menus.p}
                <strong>{menus.price}</strong>
              </div>
              <div>
                <button onClick={() => addToCart(menus)}>
                  Agregar al pedido
                </button>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
