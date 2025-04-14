'use client';
import React, { useState, useEffect } from 'react';
import Loader from '@/app/(components)/Loader/loader'

const SettingsPage = () => {
  const [loading, setLoading] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
        setLoading(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    if (loading) return <Loader />
  return (
    <section className="mx-auto px-4 py-8 mt-[98px]">
        <p className="text-[#000]">Definições</p>
    </section>
  );
};

export default SettingsPage;
