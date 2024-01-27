import React from 'react'
import SectionBanner from '../components/common/SectionBanner'
import Discover from '../components/common/Discover'

const About = () => {
  return (
    <div>
      <SectionBanner heading={'About'} subheading={'Insights into Our Transportation WebApp'}/>
      <div className=''>
        <Discover/>
      </div>
    </div>
  )
}

export default About
