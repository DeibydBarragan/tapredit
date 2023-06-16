import React from 'react'
import { Feature } from './interfaces'

type Props = {
  feature: Feature
}

export default function FeatureCard({feature}: Props) {
  return (
    <div>
      <div className="card w-80 h-80 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className='text-5xl text-primary'>
            {feature.icon}
          </div>
          <h2 className="card-title">{feature.title}</h2>
          <p>{feature.description}</p>
        </div>
      </div>
    </div>
  )
}