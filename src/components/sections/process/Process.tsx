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
        <div className='flex md:grid md:grid-cols-2 gap-4 mt-8'>
          <div className='flex flex-col gap-4'>
            {steps.map((step, index) => (
              <motion.div className={`card bg-primary text-white w-80 md:w-96 ${index%2 !== 0 && 'md:hidden'}`} key={index}
                {...flyUp}
                transition={{ delay: 0.6 + index * 0.2}}
              >
                <figure>
                  <Image src={`/photos/process/${index + 1}.webp`} alt={step.title} width={400} height={200} />
                </figure>
                <div className="card-body">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className='flex-col gap-4 hidden md:flex'>
            {steps.map((step, index) => (
              <motion.div className={`card shadow-md w-80 md:w-96 glass ${index%2 === 0 && 'hidden'}`} key={index}
                {...flyUp}
                transition={{ delay: 0.6 + index * 0.2}}
              >
                <figure>
                  <Image src={`/photos/process/${index + 1}.webp`} alt={step.title} width={400} height={200} />
                </figure>
                <div className="card-body">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}