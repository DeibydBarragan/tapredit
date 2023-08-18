import React from 'react'
import Section from '../../containers/section/Section'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { fadeIn, flyLeft, flyRight } from '@/anim/animations';

type Props = {}

export default function Description({}: Props) {
  return (
    <Section>
      <div className='sm:w-11/12 md:w-9/12 lg:w-10/12 xl:w-8/12 2xl:w-6/12 px-5'>
        <motion.h2 id="description"
          {...fadeIn}
          transition={{ delay: 0.2}}
        >
          ¿Qué es Tapredit?
        </motion.h2>
        <motion.div className='flex flex-col sm:flex-row gap-4 items-center'
          {...fadeIn}
          transition={{ delay: 0.4}}
        >
          <motion.div className='w-full sm:w-8/12'
            {...flyRight}
            transition={{ delay: 0.6}}
          >
            <motion.h3 className='text-2xl font-bold mt-4'>
              Un proyecto de recuperación de residuos sólidos plásticos
            </motion.h3>
            <p className='text-lg font-semibold mt-4'>
              Tapredit es una tabla periódica didáctica en forma de maletín con sus mismas divisiones, en forma de
              repisa donde se ubican los cubos de cada uno de los elementos que esta tiene, hechos con
              polipropileno recuperado; En la parte interna de la tapa del maletín se encuentran las fichas con
              la información específica de cada uno de los elementos y finalmente encontramos las convenciones de los datos y colores
            </p>
          </motion.div>
          <Image src="/photos/box.webp" alt="hero" className='h-60 w-60' width={500} height={500} />
        </motion.div>

        <motion.div className='flex flex-col-reverse sm:flex-row mt-10 gap-4 items-center'
          {...fadeIn}
          transition={{ delay: 0.8}}
        >
          <Image src="/photos/design.webp" alt="hero" className='h-60 w-60' width={500} height={500} />
          <motion.div className='w-full sm:w-8/12'
            {...flyLeft}
            transition={{ delay: 1}}
          >
            <p className='md:text-right text-lg font-semibold'>
              Los cubos y su respectiva información se pueden remover
              del maletín para ser utilizados por los docentes y estudiantes; cada uno de ellos cuenta con un
              orificio en caso de querer añadir el elemento real en el cubo, lo cual sirve para desarrollar las
              destrezas de los estudiantes de diferentes instituciones educativas.
            </p>
          </motion.div>
        </motion.div>
        
      </div>
    </Section>
  )
}