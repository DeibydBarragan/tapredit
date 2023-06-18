import React from 'react'
import { featuresData } from './featuresData'
import FeatureCard from '@/components/containers/featureCard/FeatureCard'

type Props = {}

export default function Features({}: Props) {
  return (
    <section className='bg-primary flex justify-center'>
      <div className='flex flex-col gap-8 py-8 px-5'>
        <h2 className='text-white'>
          Características
        </h2>
        <div className='flex flex-wrap gap-4'>
          {
            featuresData.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))
          }
        </div> 
      </div>
    </section>
  )
}