import React from 'react'
import Image from 'next/image'
import SectionHeading from './SectionHeading'
import { ArrowRight } from 'lucide-react'
import BookingButton from './BookingButton'
import { SponsorsCard, presentedBy, supportedBy } from './SponsorsSection'
import EventCard from './EventCard'

function InfoCell({ label, value, className = '' }) {
  return (
    <div className={`flex flex-col gap-1 py-4 ${className}`}>
      <span className="uppercase text-[10px] tracking-[0.2em] text-ink/60">{label}</span>
      <span className="text-ink text-base md:text-lg">{value}</span>
    </div>
  )
}

const content={
  "section": {
    "number": "04",
    "label": "THE event",
    "headline": "ONE EXTRA ORDINARY FRIDAY NIGHT",
    "event": {
      "title": "AADHI'S INSOMNIA",
      "category": "MENTALISM IN ENGLISH",
      "show": "Aadhi’s INSOMNIA, Mentalism in English",
      "when": "Friday, 30 October 2026, 7:00 PM",
      "where": "Dew Drop Events Centre, Auckland",
      "duration": "Approximately 2.5 hours, no interval",
      "tickets": "Silver from $62 · Gold from $83",
      "presented_by": "7 Entertainment & SOU Studio House",
      "supported_by": "La Trobe University"
    },
    "ticket_card": {
      "image": "/images/event.png",
      "cta": "CHOOSE SEATS"
    }
  }
}

function EventSection() {
  return (
    <div className='relative overflow-hidden px-8 py-15 bg-gradient-to-br from-ink via-night to-ink'>
        {/* ambient radial glows */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-[32rem] h-[32rem] bg-cream/15 blur-[120px] rounded-full" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-[32rem] h-[32rem] bg-peach/10 blur-[120px] rounded-full" />
        {/* subtle grain-like overlay via radial vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-ink)_100%)]" />

        <div className="relative max-w-7xl mx-auto flex flex-col gap-10">
            <SectionHeading
                eyebrow={content.section.label}
                heading={content.section.headline}
                textAlign='text-center'
                align='jusitify-center items-center'
            />

            
            {/* sponsors */}
           
            
            {/* ticket */}

                <EventCard content={content}/>
              
             <div className="grid grid-cols-1 tablet:grid-cols-2 gap-10 mt-6">
                <SponsorsCard
                    label='Proudly Presented By'
                    items={presentedBy}
                />
                <SponsorsCard
                    label='Title Sponsor'
                    items={supportedBy}
                />
            </div>

        </div>

    </div>
  )
}

export default EventSection
