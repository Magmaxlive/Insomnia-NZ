import React from 'react'
import SectionHeading from './SectionHeading'
import { SponsorsBoard } from './SponsorsSection'
import EventCard from './EventCard'

const content={
  "section": {
    "number": "04",
    "label": "THE event",
    "headline": "ONE EXTRA ORDINARY FRIDAY NIGHT",
    "event": {
      "title": "AADHI'S INSOMNIA",
      "category": "MENTALISM IN ENGLISH",
      "show": "Aadhi’s INSOMNIA, Mentalism in English",
      "when": "Friday, 30 October 2026, 6:30 PM",
      "where": "Due Drop Events Centre, Auckland",
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
    <div className='relative overflow-hidden px-8 py-15 bg-gradient-to-br from-ink via-night to-ink' id='event'>
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
              
            <div id='sponsors' className="mt-10 scroll-mt-24">
                <SponsorsBoard />
            </div>

        </div>

    </div>
  )
}

export default EventSection
