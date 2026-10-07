import React from 'react'
import Image from 'next/image'
import { VenueLink } from '@/data/Links'

const content={
    
}

function Footer() {
  return (
    <div className='py-5 px-8 bg-ink border-t border-line'>
        <div className="max-w-7xl mx-auto flex tablet:flex-row flex-col justify-between text-center items-center gap-6">
            <div className="flex flex-col gap-1 justify-center items-center tablet:justify-start tablet:items-start">
                <Image alt='insomnia logo' width={60} height={60} loading='eager' src='/images/logo.png'/>
                <a href={VenueLink} target='_blank' className="text-sm text-light/80 underline underline-line underline-offset-6">
                    Due Drop Events Centre, Auckland
                </a>
            </div>

            <div className="flex flex-col gap-1">
                <h3 className="text-sm text-light/80 capitalize">presented by</h3>
                <p className="text-sm text-light/80">
                    7 Entertainment & SOU Studio House
                </p>
            </div>

            <div className="flex flex-col gap-1">
                <h3 className="text-sm text-light/80 capitalize">title sponsor</h3>
                <p className="text-sm text-light/80">
                    Kripa financial solutions
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
