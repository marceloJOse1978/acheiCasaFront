"use client"
import React, { useState, useEffect } from 'react';
import MenuProfile from '../../(ProfileComponents)/MenuProfile';
import ProfileContainer from '../../(ProfileComponents)/ProfileContainer';
import Loader from '@/app/(components)/Loader/loader'

export default function Anuncio () {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
        setLoading(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    if (loading) return <Loader />
    return (
        <div className="mx-auto px-4 py-8 mt-[98px]">
            <MenuProfile profile={false} anuncio={true} history={false} favorite={false} title='Gerir Anúncios'/>
            <ProfileContainer marginTop={0}>
                <p className='text-[#000]'>Anuncio</p>
            </ProfileContainer>
        </div>
    )
}