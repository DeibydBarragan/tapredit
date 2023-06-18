import React from 'react'
import { featuresData } from './featuresData'
import FeatureCard from '@/components/containers/featureCard/FeatureCard'
import { motion } from 'framer-motion';
import { fadeIn, flyUp } from '@/anim/animations';

type Props = {}

export default function Features({}: Props) {
  return (
    <section className='flex justify-center bg-gradient-to-r from-primary to-secondary'>
      <div className='flex flex-col gap-8 py-8 px-5'>
        <motion.h2 className='text-white'
          {...fadeIn}
          transition={{ delay: 0.2}}
        >
          Características
        </motion.h2>
        <div className='flex flex-wrap gap-4'>
          {
            featuresData.map((feature, index) => (
              <motion.div key={index} 
                {...flyUp}
                transition={{ delay: 0.4 * index}}
              >
                <FeatureCard feature={feature} />
              </motion.div>
            ))
          }
        </div> 
      </div>
    </section>
  )
}