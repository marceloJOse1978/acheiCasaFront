
'use client'

import React from 'react'
import Filter from '../../(components)/filter/filter'

const Message = () => {
  return (
    <section className="mx-auto px-4 py-8 mt-[98px]">
      <Filter visible={true} />
      <div>
        <h1 className='text-[#000]'>Messages</h1>
      </div>
    </section>
  )
}

export default Message
