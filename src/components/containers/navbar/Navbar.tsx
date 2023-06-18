import Image from 'next/image'
import { useState } from 'react'
import { navLinks } from './links.d'
import { RxHamburgerMenu } from 'react-icons/rx';
import { GrClose } from 'react-icons/gr';
import Link from 'next/link';
import { scroller } from 'react-scroll';

type Props = {}

export default function Navbar({}: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClickLink = (to:string) => {
    setIsOpen(false)
    scroller.scrollTo(to, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -100
    })
  }

  return (
    <div className="flex pl-5 navbar sticky lg:fixed top-0 bg-base-100 border shadow-md z-10 h-16">
      <div className="flex-1">
        <Link
          href='/'
          className='flex items-center gap-4 cursor-pointer'
        >
          <h2 className="text-2xl font-bold text-primary">TAPREDIT</h2>
          <Image src="/icon.webp" alt="logo" width={40} height={40} />
        </Link>
      </div>
      <div className="hidden md:flex gap-8">
        {navLinks.map((link, index) => (
          <a key={index}
            className='btn btn-ghost text-gray-600 hover:bg-base-200 hover:text-neutral'
            onClick={() => handleClickLink(link.to)}
          >
            {link.title}
          </a>
        ))  
        }
      </div>
      <div className="flex-none md:hidden">
        <div className="relative">
          <label className="text-gray-600 m-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {
              isOpen ? <GrClose size={30} /> : <RxHamburgerMenu size={30} />
            }
          </label>
          {
            isOpen &&
              <ul className="absolute menu right-0 p-2 shadow bg-base-100 rounded-box w-52">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      onClick={() => handleClickLink(link.to)}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
          }
        </div>
      </div>
    </div>
  )
}