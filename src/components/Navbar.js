import React from 'react'
import Image from 'next/image'
import BookingButton from './BookingButton'

function Navbar() {
  return (
    <div className='sticky top-0 z-50 px-8 py-4 bg-ink border-b border-line backdrop-blur-lg'>
        <div className="max-w-7xl mx-auto flex justify-between gap-5 items-center">
            <Image alt='insomnia logo' width={60} height={60} loading='eager' src='/images/logo.png'/>
            <BookingButton/>
        </div>
    </div>
  )
}

export default Navbar
