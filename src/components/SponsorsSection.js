import React from 'react'
import Image from 'next/image'

// Logo tile size variants.
const sizes = {
  xl: 'h-28 w-56 lg:h-32 lg:w-64',
  lg: 'h-20 w-44 lg:h-24 lg:w-52',
  default: 'h-16 w-36 lg:h-20 lg:w-44',
  sm: 'h-14 w-32 lg:h-16 lg:w-36',
}

// Tiered sponsor groups rendered top-to-bottom.
export const sponsorTiers = [
  {
    label: 'Presented By',
    size: 'lg',
    items: [
      { name: '7 Entertainment', src: '/images/7.jpg', unoptimized: true, tileColor: '#232021', bordered: true },
      { name: 'SOU Studio House', src: '/images/sou.png' },
    ],
  },
  {
    label: 'Title Sponsor',
    size: 'lg',
    items: [
      { name: 'Kripa Financial Solutions', src: '/images/kripalogo.svg' },
    ],
  },
  {
    label: 'Sponsors',
    size: 'default',
    items: [
      { name: 'Enzoy', src: '/images/enzoy.png' },
      { name: 'Eco Travels', src: '/images/Eco Travels.jpg' },
    ],
  },
  {
    label: 'Media Partners',
    size: 'default',
    items: [
      { name: 'Malayalam FM', src: '/images/Malayalm-fm.png' },
      { name: 'Radio Lemon', src: '/images/Radio-lemon.png' },
      { name: 'Vibe FM', src: '/images/Vibe-fm.png' },
    ],
  },
]

function LogoTile({ src, name, size = 'default', blacken = false, darkTile = false, tileColor, bordered = false, boost = false, scale = 1, unoptimized = false }) {
  const tileClass = tileColor ? '' : darkTile ? 'bg-ink' : 'bg-light'
  return (
    <div
      className={`${tileClass} ${bordered ? 'border border-light/45' : ''} rounded-lg p-4 flex items-center justify-center overflow-hidden`}
      style={tileColor ? { backgroundColor: tileColor } : undefined}
    >
      <div className={`relative ${sizes[size] || sizes.default}`}>
        <Image
          src={src}
          alt={name}
          fill
          quality={100}
          sizes="(max-width: 1024px) 240px, 340px"
          unoptimized={unoptimized}
          style={scale !== 1 ? { transform: `scale(${scale})` } : undefined}
          className={`object-contain ${blacken ? 'brightness-0' : ''} ${boost ? 'contrast-125 saturate-150 brightness-90' : ''}`}
        />
      </div>
    </div>
  )
}

function TierGroup({ label, items, size }) {
  return (
    <div className='flex flex-col items-center gap-5'>
      <span className='uppercase text-[11px] md:text-xs tracking-[0.35em] text-cream font-medium'>
        {label}
      </span>
      <div className='flex flex-wrap justify-center items-center gap-5 md:gap-8'>
        {items.map((item) => (
          <LogoTile key={item.name} src={item.src} name={item.name} size={item.size || size} blacken={item.blacken} darkTile={item.darkTile} tileColor={item.tileColor} bordered={item.bordered} boost={item.boost} scale={item.scale} unoptimized={item.unoptimized} />
        ))}
      </div>
    </div>
  )
}

export function SponsorsBoard({ tiers = sponsorTiers }) {
  return (
    <div className='flex flex-col items-center gap-10 md:gap-14 text-center'>
      {/* heading */}
      <div className='flex flex-col items-center gap-3'>
        <span className='uppercase text-[11px] md:text-xs tracking-[0.35em] text-cream font-medium'>
          Powered By
        </span>
        <h2 className='font-highlight text-4xl md:text-6xl text-light tracking-wide'>
          Our Proud Sponsors
        </h2>
      </div>

      {/* tier groups */}
      <div className='w-full flex flex-col gap-10 md:gap-14'>
        {tiers.map((tier) => (
          <TierGroup key={tier.label} {...tier} />
        ))}
      </div>
    </div>
  )
}

export default SponsorsBoard
