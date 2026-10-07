'use client'

import React, { useState } from 'react'
import BookingButton from './BookingButton'
import { Dot, X } from 'lucide-react'

const event = {
  "date": "Fri 30 OCT 2026",
  "time": "7:00 PM",
}

function FloatingBtn() {
  const [open, setOpen] = useState(true)
  if (!open) return null

  return (
    <div className='fixed bottom-0 inset-x-0 z-50 bg-ink px-6 py-4 border-t border-line shadow-[0_-8px_24px_rgba(0,0,0,0.4)]'>
        <button
          onClick={() => setOpen(false)}
          aria-label='Close'
          className='absolute -top-3 right-3 md:top-2 md:right-2 p-1.5 bg-ink text-light/90 border border-gold/40 rounded-full shadow-md hover:bg-ink/80 transition'
        >
          <X size={16} />
        </button>
        <div className="max-w-7xl mx-auto flex  justify-center md:gap-12 gap-6">
             <div className="flex gap-1 md:flex-row flex-col items-start md:items-center flex-wrap tracking-wider">
                    <h3 className="font-medium font-highlight text-sm  md:text-lg tablet:text-lg capitalize text-light/90">{event.date}</h3>     <Dot className='text-cream md:flex hidden' size={20} />
                    <h3 className="font-medium font-highlight text-sm md:text-lg tablet:text-lg capitalize text-light/90">{event.time}</h3>     
            </div>
            <div className="h-fit">
                <BookingButton text='get tickets'/>
            </div>
        </div>

    </div>
  )
}

export default FloatingBtn