"use client"
import { useState, useEffect } from 'react'
import MenuProfile from '../../(ProfileComponents)/ProfileMenu'
import ProfileContainer from '../../(ProfileComponents)/ProfileContainer'
import Loader from '@/app/(components)/Loader/loader'
import { Pencil } from 'lucide-react'
import Image from 'next/image'

const houses = [
  {
    id: 1,
    title: 'Sequele, Cacuaco',
    price: '1.500.000,00',
    area: '20×20m',
    people: 5,
    rooms: 2,
    beds: 3,
    bath: 1,
    meals: 3,
    img: '/images/sample-house.jpg', // Coloca tua imagem real na pasta /public/images
  },
  {
    id: 2,
    title: 'Sequele, Cacuaco',
    price: '1.500.000,00',
    area: '20×20m',
    people: 5,
    rooms: 2,
    beds: 3,
    bath: 1,
    meals: 3,
    img: '/images/sample-house.jpg',
  },
  {
    id: 3,
    title: 'Sequele, Cacuaco',
    price: '1.500.000,00',
    area: '20×20m',
    people: 5,
    rooms: 2,
    beds: 3,
    bath: 1,
    meals: 3,
    img: '/images/sample-house.jpg',
  }
]

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
      <MenuProfile profile={false} anuncio={false} history={false} favorite={true} title='Gerir Favoritos' />
      <ProfileContainer marginTop={0}>
        <p className="text-xl font-semibold text-black mb-4">Lista de imóveis</p>
        <div className="space-y-6">
          {houses.map((house) => (
            <div key={house.id} className="flex justify-between items-center p-4 rounded-2x1 shadow-md bg-white">
              <div className="flex gap-4">
                <Image src={house.img} alt="house" width={90} height={90} className="rounded-lg object-cover" />
                <div className="space-y-1">
                  <p className="font-semibold text-lg">{house.title}</p>
                  <p className="text-black font-semibold">{house.price}</p>
                  <p className="text-gray-500 text-sm">Área útil &nbsp;&nbsp; {house.area}</p>
                </div>
              </div>

              {<div className="flex-1 px-6 grid grid-cols-5 gap-4 text-center text-sm text-gray-600">
                <p>👥 {house.people} Adultos</p>
                <p>🛏 {house.rooms} Quartos<br />{house.beds} Camas</p>
                <p>🚽 {house.bath} Banheiro</p>
                <p>🍽 {house.meals} Refeições por dia</p>
              </div>}

             {/*  <button className="flex items-center gap-2 px-5 py-2 bg-red-100 text-red-500 rounded-full border border-red-300 hover:bg-red-200 transition">
                Editar <Pencil size={16} />
              </button> */}
            </div>
          ))}
        </div>
      </ProfileContainer>
    </div>
  )
}