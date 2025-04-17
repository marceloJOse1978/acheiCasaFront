
'use client'

import React from 'react'
import { useState, useEffect } from 'react';
import "./home.css"
import casas from './obje';
import Filter from '../../(components)/Filter/filter'
import HouseCard from '@/app/(components)/Cards/HouseCard';
import Loader from '@/app/(components)/Loader/loader'

const Home = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
        setLoading(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    if (loading) return <Loader />
   /*  const tokenExemplo = getItem('token', token);
    console.log(tokenExemplo);
    if (tokenExemplo){
        console.log("Tem Token")
    } else {
        console.log("Nao tem Tokem");
    } */
    return (
    <section className="mx-auto px-4 py-8 mt-[98px]">
        <Filter visible={false} />
        <div id="home" className="grid grid-cols-1 relative gap-[35px] py-[30px]">
            {casas.map((casa) => (
                <HouseCard object={casa} />
            ))}
        </div>
    </section>
    );
}

export default Home
