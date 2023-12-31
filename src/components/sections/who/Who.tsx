import Section from '@/components/containers/section/Section'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { motion } from 'framer-motion';
import { fadeIn, flyLeft, flyRight } from '@/anim/animations';

type Props = {}

export default function Who({}: Props) {
  const [hover, setHover] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const divRef = useRef<HTMLDivElement>(null)

  const handleIntersection = useCallback<IntersectionObserverCallback>((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsPlaying(true)
      } else {
        setIsPlaying(false)
      }
    });
  }, []);

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted && divRef.current) {
      const videoDiv = divRef.current

      const observer = new IntersectionObserver(handleIntersection)
      if (videoDiv && isMounted) {
        observer.observe(videoDiv)
      }
      return () => {
        if (videoDiv) {
          observer.unobserve(videoDiv)
        }
      }
    }
  }, [handleIntersection, isMounted])

  return (
    <Section>
      <div className='sm:w-11/12 lg:w-10/12 xl:w-10/12 2xl:w-8/12 py-5 px-5 mt-10'>
        <motion.h2 id='who'
          {...fadeIn}
          transition={{ delay: 0.3}}
        >
          ¿Quiénes somos?
        </motion.h2>
        <div className='flex flex-col md:flex-row mt-10 gap-8'>
            <motion.div className='md:w-6/12'
              {...flyRight}
              transition={{ delay: 0.6}}
            >
              <p className="font-semibold text-lg">
              Somos aprendices del Colegio bilingüe Domingo Savio con doble titulación, articulación SENA en media académica con el Centro de Materiales y Ensayos, en el programa Recuperación de residuos sólidos plásticos en la ciudad de Bogotá D.C. Poseedoras de una acreditación de un segundo idioma (inglés). Nosotras somos personas creativas altamente productivas que están enfocadas en la innovación constante de ideas. Nuestra habilidad en diseño de proyectos, que hemos desarrollado durante nuestros años en la institución educativa nos permite crear de manera exitosa productos que son fácilmente exportables a diferentes ambientes. Nos destacamos por ser personas muy responsables y aplicadas en los objetivos planteados, además de presentar facilidad en trabajos de tipo co-worker. Actualmente somos parte de la ficha 2698792.
              </p>
            </motion.div>
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              ref={divRef}
              className='relative md:w-6/12'
            >
              {
                isMounted && (
                  <ReactPlayer 
                    url={'/videos/video.mp4'} 
                    width={'100%'} 
                    height={'100%'}
                    playing={isPlaying}
                    loop={true}
                    controls={hover}
                  />
              )}
            </div> 
        </div>
      </div>
    </Section>
  )
}