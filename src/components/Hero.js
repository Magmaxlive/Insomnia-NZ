import React from 'react'
import Image from 'next/image'

const content={
  "eyebrow": "7 entertainments & SOU STUDIO HOUSE",
  "image": '/images/gold.png',
  "description": {
    "line_1": "YOUR MIND HAS A LOCK.",
    "line_2": "AATHI HAS THE KEY."
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
    "country": "New Zealand"
  },
  "countdown": {
    "label": "CURTAIN UP IN",
    "days": "18",
    "hours": "18",
    "minutes": "52",
    "seconds": "56"
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
    <div className='px-8 py-20 bg-ink'>
        <div className="max-w-7xl mx-auto grid grid-cols-1 tablet:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
                <h3 className="uppercase text-xs font-semibold tracking-wider text-light">{content.eyebrow} <span className='font-light ml-1'>presents</span></h3>
                <div className="relative aspect-square w-full max-w-xs">
                    <Image src={content.image} fill alt="aathi's insomnia" className='absolute ' />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
