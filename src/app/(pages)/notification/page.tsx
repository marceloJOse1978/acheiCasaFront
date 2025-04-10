
'use client'

import React, { useEffect, useState } from 'react'
import Loader from '@/app/(components)/Loader/loader'

const NotificationPage = () => {
  const [loading, setLoading] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
        setLoading(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    if (loading) return <Loader />
  return (
    <section className="mx-auto px-4 py-8 mt-[98px] bg-red-500">
      <div className='flex items-start justify-start w-full h-[100%] relative'>
        <div className='bg-[#fff] w-[300px] h-[100%]'>
          <ul className='absolute'>
            <li><a href="#">Notificação 1</a></li>
            <li><a href="#">Notificação 2</a></li>
            <li><a href="#">Notificação 3</a></li>
          </ul>
        </div>
        <div className=''>
          <p>Clique na noificação</p>
        </div>
      </div>
    </section>
  )
}

export default NotificationPage