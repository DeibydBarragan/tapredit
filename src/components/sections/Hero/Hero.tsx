import React from 'react'
import Image from 'next/image'
import Section from '../../containers/section/Section'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { fadeIn, flyUp } from '@/anim/animations'

type Props = {}

export default function Hero({}: Props) {
  return (
    <Section className='bg-wave'>
      <div className="hero sm:w-11/12 md:w-9/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 3xl:w-7/12" id='hero'>
        <div className="hero-content flex-col lg:flex-row">
          <Image src="/photos/hero.webp" alt="hero" width={500} height={500} />
          <div className='lg:text-right flex flex-col gap-4 lg:items-end'>
            <motion.h1 
              className="text-neutral"
              transition={{ delay: 0.2}}
              {...flyUp}
            >
              TAPREDIT
            </motion.h1>
            <motion.h2 
              className="text-4xl font-bold"
              transition={{ delay: 0.4}}
              {...flyUp}
            >
              Una tabla periódica creativa e innovadora
            </motion.h2>
            <motion.p
              className='font-semibold'
              transition={{ delay: 0.6}}
              {...flyUp}
            >
              Descubre nuestra innovadora tabla periódica didáctica en forma de maletín. Con cubos de polipropileno recuperado y fichas informativas, es ideal para docentes y estudiantes. Los cubos y su información son removibles, permitiendo agregar elementos reales y desarrollar habilidades. ¡Explora la química de manera interactiva y práctica!
            </motion.p>
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.8}}
            >
              <Link
                className="btn btn-neutral px-10"
                to="description"
                smooth={true}
                duration={500}
                offset={-100}
              >
                Más información
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  )
}