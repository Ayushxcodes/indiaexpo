import AboutIEML from '@/components/landing/AboutSection'
import Facilities from '@/components/landing/Facilities'
import Hero from '@/components/landing/HeroSection'
import SectorsWeServe from '@/components/landing/SectorWeServe'
import StatsTicker from '@/components/landing/Ticker'
import UpcomingEvents from '@/components/landing/Upcoming'
import WhyChooseUs from '@/components/landing/WhyChooseUs'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero />
      <StatsTicker />
      <AboutIEML />
      <UpcomingEvents />
      <Facilities />
      <WhyChooseUs />
      <SectorsWeServe />
    </div>
  )
}

export default Home