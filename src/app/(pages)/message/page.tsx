
'use client'

import React from 'react'
import Filter from '../../(components)/filter/filter'

const Message = () => {
  return (
    <div className="flex flex-col w-full">
        <Filter visible={true} />
        <div>
          <h1>Messages</h1>
        </div>
    </div>
  )
}

export default Message
