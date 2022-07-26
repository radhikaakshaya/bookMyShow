import React from 'react'
import Navbar from '../components/navbar/navbar.component'

const Movieslayout = (props) => {
  return (
    <>
    <Navbar/>
    {props.children}
    </>
  )
}

export default Movieslayout