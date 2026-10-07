import React from 'react'
import { BookingLink } from '@/data/Links'
import { ArrowRight } from 'lucide-react';



function BookingButton({Bgcolor='bg-cream',text='get tickets',textColor='text-ink',width='w-fit',p='px-4 py-2',textSize='text-xl'}) {
  return (
    <a href={BookingLink} target='_blank' className={`${Bgcolor} ${textColor} ${p} tracking-wider uppercase ${width} h-fit font-medium  items-center font-highlight ${textSize} rounded-md text-center flex gap-2 hover:bg-light`}>
      {text}     <ArrowRight />

    </a>
  )
}

export default BookingButton
