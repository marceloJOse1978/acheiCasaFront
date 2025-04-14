
'use client'

import React from 'react'
import { Star, Users } from 'lucide-react';
import CompareFigures from './CardComponents/compareFigures';
import Card from './CardComponents/card';

const HouseCard = ({ object }: {object:any}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-2 min-w-[300px]">
        <Card object={object} />
        <div>
            <p className='font-normal text-xs leading-none tracking-normal text-[#7F7F7F] mt-[76px]'>{object.compartment.dimensions}</p>
        </div>
        <div >
            <CompareFigures
                namePlace={
                    object.compartment.room > 1
                    ? 'Quartos'
                    : object.compartment.room === 1
                    ? 'Quarto'
                    : 'Nenhum'
                }
                value={object.compartment.room}
                image={object.compartment.roomImage}
            />
            <CompareFigures namePlace={
                object.compartment.bathroom > 1
                ? 'Banheiros'
                : object.compartment.bathroom === 1
                ? 'Banheiro'
                : 'Nenhum'
            }
            value={object.compartment.bathroom}
            image={object.compartment.bathroomImage}
            />
            <div className='mt-10 flex items-center justify-start gap-[10px]'>
                <Users width={19} className='text-[#999999]' />
                <div className='font-normal text-xs leading-none tracking-normal capitalize text-[#7F7F7F] select-none'>
                    <p className='font-normal text-xs leading-none tracking-normal'>
                        <span className='mr-[3px]'>{object.compartment.maxAdult}</span>
                        <span>Adultos</span>
                    </p>
                </div>
            </div>
            <CompareFigures namePlace={
                object.compartment.bathroom > 1
                ? 'Refeições por dia'
                : object.compartment.bathroom === 1
                ? 'Refeição por dia'
                : 'Nenhuma Refeição'
            }
            value={object.compartment.mealsPerDay}
            image={object.compartment.mealsImage}
            />
        </div>
    </div>
  )
}

export default HouseCard
