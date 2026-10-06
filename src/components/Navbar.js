import React from 'react'
import Image from 'next/image'

function Navbar() {
  return (
    <div className='px-8 py-4 bg-ink border-b border-line'>
        <div className="max-w-7xl mx-auto flex justify-between gap-5">
            <Image alt='insomnia logo' width={70} height={60} loading='eager' src='/images/logo.png'/>
        </div>
    </div>
  )
}

export default Navbar
