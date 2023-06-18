import Section from '@/components/containers/section/Section'
import React from 'react'
import { properties } from './propertiesData.d'

type Props = {}

export default function ProductData({}: Props) {
  return (
    <Section className='bg-stacked'>
      <div className='sm:w-full xl:w-8/12 2xl:w-7/12 py-5 mt-10 p-4'>
        <h2 id='data'>Ficha técnica del producto</h2>
        <div className='flex flex-col gap-4 mt-8'>
          {
            properties.map((property, index) => (
              <div className='card bg-base-300/50 backdrop-blur-sm shadow-sm border text-neutral w-full' key={`property${index}`}>
                <div className="card-body">
                  <h3 className='text-xl'>{property.name}</h3>
                  <p className='font-semibold'>{property.value}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </Section>
  )
}