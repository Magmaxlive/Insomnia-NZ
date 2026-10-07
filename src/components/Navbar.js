'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import BookingButton from './BookingButton'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 px-8 py-4 transition-colors duration-300 ${scrolled ? 'bg-ink/90 border-b border-line backdrop-blur-lg' : 'bg-transparent border-b border-transparent'}`}>
        <div className="max-w-7xl mx-auto flex justify-between gap-5 items-center">
            <Image alt='insomnia logo' width={60} height={60} loading='eager' src='/images/logo.png'/>
            <BookingButton/>
        </div>
    </div>
  )
}

export default Navbar
