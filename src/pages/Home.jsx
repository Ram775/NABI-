import React from 'react'
import Header from '../componets/Header'
import ImgSlider from '../componets/ImgSlider'
import SectionOne from '../componets/SectionOne'
import QuickLinks from '../componets/QuikLinks'
import GovtLogos from '../componets/GovtLogos'
import FooterTopLinks from '../componets/FooterTopLinks'
import CopyrightFooter from '../componets/CopyrightFooter'

const Home = () => {
  return (
   <div className=''>
    <Header/>
    <ImgSlider/>
    <SectionOne/>
    <QuickLinks/>
    <GovtLogos/>
    <FooterTopLinks/>
    <CopyrightFooter/>
   </div>
  )
}

export default Home