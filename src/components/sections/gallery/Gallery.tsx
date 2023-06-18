import Section from '@/components/containers/section/Section'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/anim/animations';
import Carousel from '@/components/pure/carousel/Carousel';
import { numToArray } from '@/helpers/numToArray';

type Props = {}

export default function Gallery({}: Props) {
  const [photos] = useState(numToArray(14))

  return (
    <Section>
      <div className='w-full sm:w-full xl:w-8/12 2xl:w-7/12 py-5 mt-10 p-4 h-[720px]'>
        <motion.h2 id='gallery'
          {...fadeIn}
          transition={{ delay: 0.3}}
          className='mb-6'
        >
          Galería
        </motion.h2>
        <Carousel 
          images={photos}
          showButtons={true} 
        />
      </div>
    </Section>
  )
}