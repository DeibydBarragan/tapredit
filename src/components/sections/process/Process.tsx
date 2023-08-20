import Section from '@/components/containers/section/Section'
import React from 'react'
import { steps } from './processData.d'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { fadeIn, flyUp } from '@/anim/animations';

type Props = {}

export default function Process({}: Props) {
  return (
    <Section className='bg-circles'>
      <div className='sm:w-full xl:w-8/12 2xl:w-7/12 py-5 mt-10'>
        <motion.h2 id='process'
          {...fadeIn}
          transition={{ delay: 0.3}}
        >
          Proceso
        </motion.h2>
        <div className='flex flex-col md:grid md:grid-cols-2 gap-4 mt-8'>
          {steps.map((step, index) => (
            <motion.div className={`card bg-primary ${index%2 !== 0 && 'bg-zinc-200/70 backdrop-blur-sm text-primary'} w-80 md:w-96`} key={index}
              {...flyUp}
            >
              <figure>
                <Image src={`/photos/process/${index + 1}.webp`} alt={step.title} width={400} height={200} />
              </figure>
              <div className="card-body">
                <h3 className="text-xl">{step.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}