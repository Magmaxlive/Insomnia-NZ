import React from 'react'
import Image from 'next/image'

// TODO: drop logo files into /public/images/sponsors/ and update src/name below.
export const presentedBy = [
  { name: '7 Entertainment', src: '/images/7.webp' },
  { name: 'SOU Studio House', src: '/images/sou.png' },
]

export const sponsors = [
  { name: 'Kripa Financial Solutions', src: '/images/kripalogo.svg', tier: 'Title Sponsor' },
  { name: 'Eco Travels', src: '/images/eco.png', size: 'sm', tier: 'Sponsor' },
]

const sizes = {
  default: 'h-16 w-36 lg:h-20 lg:w-44',
  sm: 'h-10 w-24 lg:h-12 lg:w-28',
}

function LogoRow({ items, stack = false }) {
  return (
    <div className={`flex flex-wrap justify-center items-center gap-10 md:gap-16 ${stack ? 'flex-col' : ''}`}>
      {items.map((s) => (
        <div key={s.name} className='flex flex-col items-center gap-3'>
          {s.tier && (
            <span className='uppercase text-[9px] tracking-[0.3em] text-cream'>{s.tier}</span>
          )}
          <div className={`relative ${sizes[s.size] || sizes.default}`}>
            <Image
              src={s.src}
              alt={s.name}
              fill
              className='object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity'
            />
          </div>
          {/* <p className='text-light/60 text-xs tracking-wide'>{s.name}</p> */}
        </div>
      ))}
    </div>
  )
}

export function SponsorsCard({ label, items=[], tagline, stack=false }) {
  return (
    <div className='relative bg-night/50 border border-light/10 rounded-2xl px-6 pt-10 pb-10 md:px-10 md:pt-12 md:pb-12 backdrop-blur-sm'>
      {/* pill label */}
      <span className='absolute -top-3 left-1/2 -translate-x-1/2 bg-light text-ink text-[10px] md:text-xs tracking-[0.3em] font-semibold uppercase px-5 py-2 rounded-full whitespace-nowrap'>
        {label}
      </span>

      <div className='flex flex-col gap-6 items-center'>
        <LogoRow items={items} stack={stack} />
        {tagline && (
          <p className='text-light/60 text-sm md:text-base text-center max-w-xl'>{tagline}</p>
        )}
      </div>
    </div>
  )
}

export function SponsorsSection() {
  return (
    <div className='px-8 py-20 bg-ink'>
      <div className='max-w-5xl mx-auto flex flex-col gap-10'>
        <SponsorsCard
          label='Proudly Presented By'
          items={presentedBy}
        />
        <SponsorsCard
          label='Supported By'
          items={supportedBy}
        />
      </div>
    </div>
  )
}
