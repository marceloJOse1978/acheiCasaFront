
'use client'

import React from 'react'
import Find from './DashboardComponents/find'
import DashHome from './DashboardComponents/dashHome'
import Filter from '../../(components)/Filter/filter'

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
