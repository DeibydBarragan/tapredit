import Image from 'next/image'
import React from 'react'
import Link from "next/link";

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className="footer footer-center p-10 bg-primary text-primary-content">
      <div>
        <Link href='/'>
          <Image src="/icon2.webp" alt="logo" width={50} height={50} />
        </Link>
        <p className="font-bold">
          TAPREDIT <br/>Servicio Nacional de Aprendizaje (SENA)
        </p>
        <div className={'flex gap-2'}>
          <Link href={'https://www.sena.edu.co/'} target={'_blank'}>
            <Image src="/sena.webp" alt="logo del Servicio Nacional de Aprendizaje (SENA)" width={50} height={50} />
          </Link>
          <Link href={'https://www.domingosaviobilingualschool.edu.co/wordpress/'} target={'_blank'}>
            <Image src="/school.webp" alt="logo del colegio Domingo Savio" width={50} height={50} />
          </Link>
        </div>
        <p>Copyright © 2023 - All right reserved</p>
      </div> 
    </footer>
  )
}