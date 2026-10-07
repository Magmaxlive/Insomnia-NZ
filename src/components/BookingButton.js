import React from 'react'
import { BookingLink } from '@/data/Links'
import { ArrowRight } from 'lucide-react';



function BookingButton({Bgcolor='bg-cream',text='get tickets',textColor='text-ink',width='w-fit'}) {
  return (
    <a href={BookingLink} target='_blank' className={`${Bgcolor} ${textColor} px-4 py-2 tracking-wider uppercase ${width} h-fit font-medium  items-center font-highlight text-xl rounded-md text-center flex gap-2 hover:bg-light`}>
      {text}     <ArrowRight />

    </a>
  )
}

export default BookingButton
