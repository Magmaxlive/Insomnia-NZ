'use client'

import React, { useEffect } from 'react'
import Script from 'next/script'
import SectionHeading from './SectionHeading'

const posts = [
  'https://www.instagram.com/reel/DeJUitCDh_-/',
  'https://www.instagram.com/reel/DeVUJzmtgDU/',
  'https://www.instagram.com/reel/DePvf7UTmQN/',
]

function SocialSection() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.instgrm) {
      window.instgrm.Embeds.process()
    }
  }, [])

  return (
    <section id='buzz' className='relative px-8 py-20 bg-ink'>
      <Script
        src='https://www.instagram.com/embed.js'
        strategy='afterInteractive'
        onLoad={() => {
          if (typeof window !== 'undefined' && window.instgrm) {
            window.instgrm.Embeds.process()
          }
        }}
      />

      <div className='max-w-7xl mx-auto flex flex-col gap-12'>
        <SectionHeading
          eyebrow='The Buzz'
          heading='In The Spotlight'
          align='items-center justify-center'
          textAlign='text-center'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
          {posts.map((url) => (
            <blockquote
              key={url}
              className='instagram-media w-full'
              data-instgrm-permalink={url}
              data-instgrm-version='14'
              style={{
                background: '#2a2522',
                border: '1px solid rgba(244, 239, 232, 0.1)',
                borderRadius: '12px',
                boxShadow: '0 10px 30px 0 rgba(0,0,0,0.4)',
                margin: 0,
                maxWidth: '540px',
                minWidth: '0',
                padding: 0,
                width: '100%',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialSection
