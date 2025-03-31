
'use client';

import React from 'react';
import "./styleFilter.css"

export default function Filter() {
  return (
    <div className="container-element">
        <h2 className='titulo'>
            <span className='capitalize'>Ac</span>
            <img src="/h.png" alt="" />
            <span className='no-capitalize'>e</span>
            <span className='capitalize'>aqui o que procura!</span>
        </h2>
        <div className='filter'>
            <ul>
                <li>
                    <a href="#">
                        <img src="/icons-filter/destaque.png" alt="" />
                        <p>Destaques</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/icons-filter/umbrella-beach.png" alt="" />
                        <p>Praia</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/icons-filter/ticket-airline.png" alt="" />
                        <p>Reserva</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/icons-filter/quarto.png" alt="" />
                        <p>Quartos</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/icons-filter/casa.png" alt="" />
                        <p>Residências</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/icons-filter/campo.png" alt="" />
                        <p>Terrenos</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/icons-filter/loja.png" alt="" />
                        <p>Lojas</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/icons-filter/escritorio.png" alt="" />
                        <p>Escritórios</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  );
}
