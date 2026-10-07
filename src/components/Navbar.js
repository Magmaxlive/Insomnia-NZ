'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import BookingButton from './BookingButton'
import { Link } from 'react-scroll'
import {Menu,X} from 'lucide-react'

const links=[
  {
    label:'experience',
    link:'experience',
  },
  {
    label:'event',
    link:'event',
  }
]
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen,setDrawerOpen] = useState(false)

  const ToggleNavBar = ()=>{
    setDrawerOpen(!drawerOpen)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 px-8 py-4 transition-colors duration-300 border-b border-line ${scrolled ? 'bg-ink/90  backdrop-blur-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex justify-between gap-5 items-center">
            <Image alt='insomnia logo' width={60} height={60} loading='eager' src='/images/logo.png'/>
            <div className="flex gap-6 hidden lg:flex">
              {links.map((i,index)=>(
                <Link to={i.link} smooth={true} offset={-100} className='cursor-pointer uppercase font-medium font-highlight  tracking-widest text-base text-light'> {i.label}</Link>
              ))}
            </div>
            <div className="hidden lg:flex">
              <BookingButton/>
            </div>

            <div className="lg:hidden flex gap-4">
                <BookingButton/>
                <button onClick={ToggleNavBar} className='text-light cursor-pointer relative z-50'>
                  {drawerOpen ? <X/> : <Menu/>}
                </button>

                {drawerOpen &&
                  <div className="fixed z-20 w-full bg-ink right-0 top-0 p-12 flex flex-col justify-start items-start lg:hidden gap-3">
                    <div className="flex flex-col gap-3">
                      {links.map((i,index)=>(
                        <Link key={index} to={i.link} smooth={true} offset={-100} className='cursor-pointer uppercase font-semibold font-highlight  tracking-widest text-lg text-cream'> {i.label}</Link>
                      ))}
                    </div>
                  </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar
