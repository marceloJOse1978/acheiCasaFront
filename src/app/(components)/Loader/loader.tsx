'use client'

import React from 'react'
import './loader.css'

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20"></div>
    </div>
  )
}

export default Loader
