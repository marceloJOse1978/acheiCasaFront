"use client"
import React, { useState, useEffect } from 'react';
import MenuProfile from '../../(ProfileComponents)/ProfileMenu';
import ProfileContainer from '../../(ProfileComponents)/ProfileContainer';
import Loader from '@/app/(components)/Loader/loader'
import ProfileAnnouncementCard from '../../(ProfileComponents)/ProfileAnnouncementCard';
import Anuncios from '../../../../objects/announcement';

export default function Announcement () {
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
            
            {Anuncios.map((announc) => (
                <ProfileAnnouncementCard 
                    key={announc.id} 
                    isFavorite={announc.favoritoStatus} 
                    imageSrc={announc.imagem}
                    location={announc.titulo} 
                    price={announc.preco}
                    dimensions={announc.dimensoes}
                    views={announc.visualizacoes}
                    clicks={announc.favoritos}
                    onEdit={() => console.log('Editar anúncio')}
                />
            ))}
        </div>
    )
}