import Section from '@/components/containers/section/Section'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react';

type Props = {}

export default function Gallery({}: Props) {
  const [numberPhotos] = useState(14)
  const [slide, setSlide] = useState(1)

  return (
    <Section>
      <div className='sm:w-full xl:w-8/12 2xl:w-7/12 py-5 mt-10 p-4'>
        <h2 id='gallery'>Galería</h2>
        <div className="carousel w-full mt-8">
          {
            [...Array(numberPhotos)].map((_, index) => (
              <div id={`slide${index + 1}`}
                className="carousel-item relative w-full"
                key={`photo${index}`}
              >
                <Image 
                  alt='process' 
                  src={`/photos/gallery/${index + 1}.webp`}
                  className="w-full rounded-xl" 
                  width={1920}
                  height={1080}  
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href={`#slide${index}`}
                    className="btn btn-circle"
                  >
                    ❮
                  </a> 
                  <a href={`#slide${index + 2}`}
                    className="btn btn-circle"
                  >
                    ❯
                  </a>
                </div>
              </div>
            ))
          }
          
        </div>
      </div>
    </Section>
  )
}