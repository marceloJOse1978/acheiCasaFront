"use client"
import { useState, useEffect } from 'react';
import MenuProfile from '../../(ProfileComponents)/ProfileMenu';
import ProfileContainer from '../../(ProfileComponents)/ProfileContainer';
import Loader from '@/app/(components)/Loader/loader'

export default function History () {
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
            <MenuProfile profile={false} anuncio={false} history={true} favorite={false} title='Ver Histórico'/>
            <ProfileContainer marginTop={0}>
                <p className='text-[#000]'>Hisórico</p>
            </ProfileContainer>
        </div>
    )
}