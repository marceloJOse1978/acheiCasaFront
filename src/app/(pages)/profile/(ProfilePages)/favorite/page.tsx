"use client"
import { useState, useEffect } from 'react';
import MenuProfile from '../../(ProfileComponents)/ProfileMenu';
import ProfileContainer from '../../(ProfileComponents)/ProfileContainer';
import Loader from '@/app/(components)/Loader/loader'
import Image from 'next/image';
import FavoriteCard from './FavoriteComponents/FavoriteCard'

export default function Favorite () {
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
           {/*  <ProfileContainer marginTop={0}> */}
           <div className='shadow-lg rounded-lg bg-white py-6 
            px-10 border border-[rbg(283,283,283)]
            mt-5 relative'>
                <FavoriteCard />
           </div>
                
          {/*   </ProfileContainer> */}
        </div>
    )
}