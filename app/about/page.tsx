import AboutHero from '@/components/AboutHero';
import HowItWorks from '@/components/HowItWorks';
import Journey from '@/components/Journey';
import ScrollTransition from '@/components/ScrollTransition';
import Testimonials from '@/components/Testimonials';
import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <HowItWorks />
      <ScrollTransition />
      <Journey />
      <ScrollTransition />
      <Testimonials />
    </div>
  )
}

export default About;
