
'use client'

import React from 'react'
import "./highlights.css"
import casas from './obje';
import { Star } from 'lucide-react';

const Highlights = () => {
      
      return (
        <div className="grid-container">
            {casas.map((casa) => (
                <div key={casa.id} className="">
                    <figure className='image-thumb' title={casa.title}>
                        <a href="#">
                            <img src={casa.image} alt={casa.title} className="" />
                        </a>
                    </figure>
                  
                    <div className="">
                        <div className='about'>
                             <h3 className="title"><a href="#">{casa.location}</a></h3>
                            <div className="rating">
                                <Star className="rating-text" width={10}/>
                                <span className="rating-text">{casa.rating}</span>
                            </div>
                        </div>
                        <div className='group'>
                            <div>
                            <p className="dimensions">{casa.dimensions}</p>
                            <p className="date">{casa.date}</p>
                            </div>
                            <p className="price">
                            {isNaN(Number(casa.price)) 
                                ? casa.price 
                                : new Intl.NumberFormat('pt-AO', { style: 'currency', currency: 'AOA' }).format(Number(casa.price))}
                            </p>

                        </div>                        
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Highlights
