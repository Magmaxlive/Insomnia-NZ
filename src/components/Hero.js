import React from 'react'
import Image from 'next/image'
import CountDown from './CountDown'
import BookingButton from './BookingButton'
import { Calendar, MapPin } from 'lucide-react'

const content={
  "eyebrow": "7 entertainments & SOU STUDIO HOUSE",
  "image": '/images/single.png',
  "heroBg": '/images/hero.webp',
  "description": {
    "line_1": "lie to him , we dare you.",
    "line_2": "aathi reads your mind.",
    'line_3':'live on stage'
  },
  "event": {
    "date": {
      "day": "30",
      "month": "2026 OCT",
      "weekday": "Friday"
    },
    "time": "07:00 PM",
    "venue": "Dew Drop Events Centre",
    "location": "Auckland",
    "country": "New Zealand",
    'iso':"2026-10-30T19:00:00+13:00"
  },
  "countdown": {
    "label": "CURTAIN UP IN",
  },
  "actions": {
    "primary": {
      "text": "GET YOUR TICKETS",
      "link": "#"
    },
    "secondary": {
      "text": "SHOW DETAILS",
      "link": "#"
    }
  },
  "footer": {
    "text": "TICKETS FROM $60 · EVERY SEAT SUPPORTS BENDIGO HEALTH"
  }
}

function Hero() {
  return (
    <div className='relative overflow-hidden px-8 pt-26 pb-22 bg-ink'>
        <div className="pointer-events-none absolute inset-0">
            <Image src={content.heroBg} fill alt="" priority className='object-cover object-center' />
            <div className="absolute inset-0 bg-ink/90 lg:bg-ink/90" />
        </div>
        <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center gap-10 ">
            <div className="w-full flex flex-col items-center gap-8">
                <h3 className="uppercase text-xs font-semibold tracking-wider text-light">{content.eyebrow} <span className='font-light ml-1'>presents</span></h3>
                <div className="relative aspect-[3/1] w-full max-w-md md:max-w-xl lg:max-w-2xl">
                    <Image src={content.image} fill alt="aathi's insomnia" className='object-contain' />
                </div>

                <div className="flex flex-col uppercase text-xs md:text-base text-light font-semibold">
                    <p>{content.description.line_1}</p>
                    <p className='text-cream'>{content.description.line_2} <span className='text-light'>{content.description.line_3}</span> </p>
                </div>

            {/* info cards */}
                <div className="w-full mt-6 flex md:flex-row flex-col justify-center gap-6 text-left">
                    <div className="rounded-md border border-light/10 bg-ink/60 backdrop-blur-md px-6 py-5 flex items-center gap-4 transition-all hover:border-cream/40 hover:bg-ink/70">
                        <Calendar className="w-6 h-6 text-cream shrink-0" strokeWidth={1.5} />
                        <span className="font-highlight text-xl md:text-2xl text-light tracking-wide">
                            {content.event.date.weekday.slice(0,3)} {content.event.date.day} {content.event.date.month.split(' ').pop()}
                            <span className="text-mute mx-2">·</span>
                            {content.event.time}
                        </span>
                    </div>

                    <div className="rounded-md border border-light/10 bg-ink/60 backdrop-blur-md px-6 py-5 flex items-center gap-4 transition-all hover:border-cream/40 hover:bg-ink/70">
                        <MapPin className="w-6 h-6 text-cream shrink-0" strokeWidth={1.5} />
                        <span className="font-highlight text-xl md:text-2xl text-light tracking-wide">
                            {content.event.venue}
                            <span className="text-mute">, {content.event.location}</span>
                        </span>
                    </div>

                    
                </div>
                <CountDown target={content.event.iso}/>

                <BookingButton text='book your tickets'/>
                

            </div>


        </div>

    </div>
  )
}

export default Hero
