
'use client'

import React from 'react'
import { Star } from 'lucide-react';
import Card from './CardComponents/card';

const HouseCard = ({ object }: {object:any}) => {
  return (
    <div className="bg-white rounded-lg">
        <Card object={object} />
    </div>
  )
}

export default HouseCard
