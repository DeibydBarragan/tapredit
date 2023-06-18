import Image from 'next/image'
import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className="footer footer-center p-10 bg-primary text-primary-content">
      <div>
        <Image src="/icon.webp" alt="logo" width={50} height={50} />
        <p className="font-bold">
          TAPREDIT <br/>Servicio Nacional de Aprendizaje (SENA)
        </p> 
        <p>Copyright © 2023 - All right reserved</p>
      </div> 
    </footer>
  )
}