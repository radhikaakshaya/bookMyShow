import React from 'react'
import Slider from 'react-slick'
import Posters from '../Poster/Poster.component'
import settings from '../../config/SlideSettings'
const Events = (props) => {
  return (
    <>
     <div className='flex flex-col px-3'>
           <h2 className= {`text-2xl font-bold  ${props.isDark?'text-white':'text-gray-800'}`}  >{props.title}</h2>
            <h2 className={`text-xl  ${props.isDark?'text-white':'text-gray-800'}`}>{props.subtitle}</h2>
        </div>
      <Slider {...settings}>
      {
props.images.map((image)=>(
 <Posters {...image} isDark={props.isDark}/>
))}

    </Slider>
    </>
  )
}

export default Events