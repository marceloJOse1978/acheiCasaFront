
'use client'

import React, { useEffect, useState } from 'react'
import Loader from '@/app/(components)/Loader/loader'
import Filter from '../../(components)/Filter/filter'
import { Funnel, Search } from 'lucide-react';

const Message = () => {
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
      <div className='
        fixed z-50 bg-white shadow-[2px_0_10px_rgba(0,0,0,0.1)] left-[260px]
        top-[126px] border border-[#D9D9D9] duration-300 transition bottom-[25px]
        w-[300px] rounded-[25px] p-5
      '>
      <div className='flex items-center justify-between gap-2 '>
        <h1 className='text-gray-600 font-bold text-[16px] leading-[100%] tracking-[0%] select-none'>
          Mensagens
        </h1>
        <Funnel width={16} height={16} className='text-[#FF453A] shawdom' />
      </div>

        <div>
          <Search />
          <input type="text" placeholder='Procurar' />
        </div>
        
      </div>
      <div className='bg-red-500 left-[580px] right-[25px] fixed bottom-[25px] top-[126px]'>
        <p>exemplo</p>
      </div>
    </section>
  )
}

export default Message
