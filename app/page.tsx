import Hero from '@/components/Hero'
import LocationTabs from '@/components/LocationTabs'
import ScrollTransition from '@/components/ScrollTransition'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero />
      <ScrollTransition />
      <LocationTabs />
      <Testimonials />
    </div>
  )
}

export default Home
