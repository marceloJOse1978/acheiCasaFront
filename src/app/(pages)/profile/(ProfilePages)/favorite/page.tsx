"use client"
import { useState, useEffect } from 'react';
import MenuProfile from '../../(ProfileComponents)/ProfileMenu';
import ProfileContainer from '../../(ProfileComponents)/ProfileContainer';
import Loader from '@/app/(components)/Loader/loader'

export default function Favorite() {
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
            <MenuProfile profile={false} anuncio={false} history={false} favorite={true} title='Gerir Favoritos'/>
            <ProfileContainer marginTop={0}>
                <p className='text-[#000]'>Favorito</p>
            </ProfileContainer>
            <div className="flex justify-end gap-4 mt-6">
                <button className="bg-gray-200 text-black px-6 py-2 rounded-lg shadow">Voltar</button>
                <button className="bg-red-500 text-white px-6 py-2 rounded-lg shadow">Salvar</button>
            </div>
        </div>)
}