
'use client'

import React, { useEffect, useState } from 'react'
import Loader from '@/app/(components)/Loader/loader'
import Filter from '../../(components)/Filter/filter'

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

        <h1 className='text-[#000]'>Messages</h1>
{/*         <div className='
            flex items-start justify-between 
            shadow-lg rounded-lg bg-white py-5 
            px-10 border border-[rbg(283,283,283)]
            mt-5'>
              <p>Exemplo!</p>
        </div>  */}
    </section>
  )
}

export default Message
