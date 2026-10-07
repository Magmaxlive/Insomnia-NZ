import React from 'react'
import Image from 'next/image'
import SectionHeading from './SectionHeading'
import BookingButton from './BookingButton'


const content={
  "section": {
    'image':'/images/portrait.webp',
    "label": "THE EXPERIENCE",
    "headline": "YOU WILL LEAVE QUESTIONING WHAT WAS REAL.",
    "questions": [
      "What if someone knew what you were thinking before you said a word ?",
      "What if they predicted the choice you were certain was yours ?"
    ],
    "description": "In INSOMNIA, Mentalist Aadhi brings the audience into the mystery. Through psychology, observation, suggestion, intuition and live participation, ordinary thoughts become extraordinary moments, right in front of you.",
    "closing": "This is not a show you simply watch."
  }
}

function AboutSection() {
  return (
    <div className='px-8 py-20 bg-ink' id='experience'>
        <div className="max-w-7xl mx-auto grid grid-cols-1 tablet:grid-cols-2 gap-15">
            <div className="relative aspect-[3/2] tablet:aspect-square w-full group">
                {/* soft glow */}
                <div className="absolute -inset-4 bg-cream/20 blur-3xl rounded-full opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* corner accents */}
                <span className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-cream z-20" />
                <span className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-cream z-20" />

                {/* image frame */}
                <div className="relative w-full h-full overflow-hidden rounded-md ring-1 ring-light/10">
                    <Image
                        src={content.section.image}
                        fill
                        alt="aathi's image"
                        className='object-cover transition-transform duration-700 group-hover:scale-105'
                    />
                    {/* bottom gradient wash */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                    {/* vignette */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,var(--color-ink)_100%)]" />
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <SectionHeading
                    eyebrow={content.section.label}
                    heading={content.section.headline}
                    maxW='tablet:max-w-lg max-w-xl'
                />

               <div className="flex flex-col gap-2">
                {content.section.questions.map((i,index)=>(
                 <p key={index} className="text-lg italic tablet:max-w-lg text-light/80" >{i}</p>
               ))}
               </div>

               <p className="text-base tablet:max-w-lg text-light/70">
                {content.section.description}
               </p>

               <p className="text-2xl tracking-wider tablet:max-w-lg text-light font-highlight">
                {content.section.closing}
               </p>

               <BookingButton text='book a seat and try'/>
                
            </div>
        </div>
      
    </div>
  )
}

export default AboutSection
