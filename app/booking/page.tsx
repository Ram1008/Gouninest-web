import BookingForm from '@/components/BookingForm'
import BookNowHero from '@/components/BookNowHero'
import ScrollTransition from '@/components/ScrollTransition'
import React from 'react'

const Booking = () => {
  return (
    <div className="min-h-screen">
      <BookNowHero />
      <ScrollTransition />
      <BookingForm />
    </div>
  )
}

export default Booking
