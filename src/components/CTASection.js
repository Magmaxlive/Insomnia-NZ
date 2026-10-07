import React from 'react'
import Image from 'next/image'
import BookingButton from './BookingButton'

const content = {
  eyebrow: 'Final call',
  heading: "Don't miss the night",
  highlight: "you'll never forget.",
  tagline: 'One night. One theatre. Seats are limited, and the best ones go first. Lock yours in now.',
  bg: '/images/hero.webp',
}

function CTASection() {
  return (
    <div className='relative overflow-hidden bg-ink'>
      {/* bg image + washes */}
      <div className='pointer-events-none absolute inset-0'>
        <Image src={content.bg} fill alt='' className='object-cover object-center opacity-30' />
        <div className='absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink' />
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--color-ink)_90%)]' />
      </div>

      {/* ambient glow */}
      <div className='pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-cream/10 blur-[140px] rounded-full' />

      <div className='relative max-w-4xl mx-auto px-6 md:px-8 py-24 flex flex-col items-center text-center gap-6'>
        
        <h2 className='font-highlight uppercase text-light text-5xl md:text-7xl  leading-[0.95] tracking-wider'>
          {content.heading} <span className='text-cream'>{content.highlight}</span>
        </h2>

        <p className='text-light/70 text-base md:text-lg max-w-xl'>
          {content.tagline}
        </p>

        <div className='mt-4'>
          <BookingButton text='Reserve your seat' />
        </div>
      </div>
    </div>
  )
}

export default CTASection
