import React from 'react'
import { Dot } from 'lucide-react'


const items = [
  'one icon',
  'one stage',
  'one unforgettable evening',
  'save 5% for groups of 10+',
  'book on ticket master',
]

function Row(){
    return (
        <div className="flex shrink-0 items-center gap-5 pr-10">
            {items.map((i,index)=>(
                <div key={index} className='flex items-center gap-10'>
                    <span className="font-highlight uppercase tracking-wider text-ink whitespace-nowrap">
                        {i}
                    </span>
                    <Dot className="text-ink shrink-0" size={30} fill="currentColor" />
                </div>
            ))}
        </div>
    )
}

function Marquee() {
  return (
    <div className="bg-cream py-5 md:text-2xl text-xl overflow-hidden group">
        <div className='flex w-max animate-marquee group-hover:[animation-play-state:paused]'>
            <Row/>
            <Row/>
        </div>
    </div>
  )
}

export default Marquee
