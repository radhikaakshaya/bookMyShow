import React from 'react'
import HeroCarousel from '../components/HeroImages/Hero.component'
import Navbar from '../components/navbar/navbar.component'

const DefaultLayout = (props) => {
  return (
    <>
    <Navbar/>
     <HeroCarousel />
    {props.children}
    </>
  )
}

export default DefaultLayout