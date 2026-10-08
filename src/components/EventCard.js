import React from 'react'
import BookingButton from './BookingButton'
import Image from 'next/image'

const infoItems = [
  { label: 'Date', value: 'Fri, 30 Oct 2026' },
  { label: 'Time', value: '7:00 PM' },
  { label: 'Venue', value: 'Due Drop Events, Auckland' },
  { label: 'Tickets', value: 'From $62' },
]

function EventCard({content}) {
  return (
    <div className="relative mx-auto w-full max-w-7xl group">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-cream/0 via-cream/20 to-cream/0 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity" />

      <div className="relative overflow-hidden rounded-2xl border border-light/10 bg-ink/80 backdrop-blur-sm">
        {/* corner accents */}
        <span className="pointer-events-none absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-cream/70 rounded-tl-2xl z-20" />
        <span className="pointer-events-none absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-cream/70 rounded-tr-2xl z-20" />
        <span className="pointer-events-none absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-cream/70 rounded-bl-2xl z-20" />
        <span className="pointer-events-none absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-cream/70 rounded-br-2xl z-20" />

        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Image */}
          <div className="relative h-72 md:h-auto md:col-span-2 overflow-hidden">
            <Image
              src={content.section.ticket_card.image}
              fill
              alt="Aadhi"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-[9px] uppercase tracking-[0.3em] text-cream">
                A live journey into
              </p>
              <p className="mt-1 font-highlight text-3xl uppercase leading-none text-light">
                The Human Mind
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between gap-6 p-6 md:p-10 md:col-span-3">
            {/* Header */}
            <div className="flex items-start justify-between gap-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cream">
                    {content.section.event.category}
                  </p>
                </div>
                <h3 className="font-highlight text-4xl md:text-5xl uppercase leading-[0.9] text-light">
                  Aadhi&rsquo;s <span className="text-cream">Insomnia</span>
                </h3>
              </div>

             
            </div>

            {/* Main info */}
            <div className="grid grid-cols-2 border-y border-dashed border-light/15">
              {infoItems.map((item, i) => (
                <div
                  key={item.label}
                  className={`py-4 ${i % 2 === 0 ? 'pr-4 border-r border-dashed border-light/15' : 'pl-5'} ${i >= 2 ? 'border-t border-dashed border-light/15' : ''}`}
                >
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-cream">{item.label}</span>
                  <p className="mt-1.5 text-lg md:text-xl text-light font-highlight tracking-wide">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Bottom */}
            <div className="flex items-center justify-end gap-4">
              
              <BookingButton text="Choose Seats" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventCard
