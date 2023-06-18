import React from 'react'
import Section from '../../containers/section/Section'
import Image from 'next/image'

type Props = {}

export default function Description({}: Props) {
  return (
    <Section>
      <div className='sm:w-11/12 md:w-9/12 lg:w-10/12 xl:w-8/12 2xl:w-6/12 px-5'>
        <h2 id="description">
          ¿Qué es Tapredit?
        </h2>
        <div className='flex flex-col sm:flex-row mt-10 gap-4 items-center'>
          <div className='w-full sm:w-8/12'>
            <p className='text-lg font-semibold'>
              Una tabla periódica didáctica en forma de maletín con sus mismas divisiones, en forma de
              repisa donde se ubican los cubos de cada uno de los elementos que esta tiene, hechos con
              polipropileno recuperado; En la parte interna de la tapa del maletín se encuentran las fichas con
              la información específica de cada uno de los elementos y finalmente encontramos las convenciones de los datos y colores
            </p>
          </div>
          <Image src="/photos/box.webp" alt="hero" className='h-60 w-60' width={500} height={500} />
        </div>

        <div className='flex flex-col-reverse sm:flex-row mt-10 gap-4 items-center'>
          <Image src="/photos/design.webp" alt="hero" className='h-60 w-60' width={500} height={500} />
          <div className='w-full sm:w-8/12'>
            <p className='md:text-right text-lg font-semibold'>
              Los cubos y su respectiva información se pueden remover
              del maletín para ser utilizados por los docentes y estudiantes; cada uno de ellos cuenta con un
              orificio en caso de querer añadir el elemento real en el cubo, lo cual sirve para desarrollar las
              destrezas de los estudiantes de diferentes instituciones educativas.
            </p>
          </div>
        </div>
        
      </div>
    </Section>
  )
}