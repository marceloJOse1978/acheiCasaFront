
'use client'

import React, { useEffect, useState } from 'react'
import Find from './DashboardComponents/DashboardFind'
import DashHome from './DashboardComponents/DashboardHome'
import Filter from '../../(components)/Filter/filter'
import Loader from '@/app/(components)/Loader/loader'
import Balance from './DashboardComponents/DashboardBalance'

const Dashboard = () => {
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
      <Filter visible={true} />
      <DashHome />
      <Find />
      <Balance />
    </section>
  )
}

export default Dashboard
