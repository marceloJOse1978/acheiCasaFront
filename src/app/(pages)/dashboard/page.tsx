
'use client'

import React from 'react'
import Find from './dashboardComponents/find'
import DashHome from './dashboardComponents/dashHome'
import Filter from '../../(components)/filter/filter'

const Dashboard = () => {
  return (
    <section className="mx-auto px-4 py-8 mt-[98px]">
      <Filter visible={true} />
      <DashHome />
      <Find />
    </section>
  )
}

export default Dashboard
