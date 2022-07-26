import React, { useEffect, useState }  from 'react'
import settings from '../../config/SlideSettings'
import CastCrewPosters from '../Poster/CastCrewPosters'
import Slider from 'react-slick'
import CrewCastSettings from '../../config/CrewCastSettings'


const CastCrewEvent = (props) => {
   return (
    <>
     <div className='flex flex-col px-3'>
           <h2 className= {`text-2xl font-bold  ${props.isDark?'text-white':'text-gray-800'}`}  >{props.title}</h2>
            <h2 className={`text-xl  ${props.isDark?'text-white':'text-gray-800'}`}>{props.subtitle}</h2>
        </div>
      <Slider {...CrewCastSettings}>
      {
props.castimage.map((image)=>(
 <CastCrewPosters {...image} isDark={props.isDark}/>
))}

    </Slider>
    </>
  )
}

export default CastCrewEvent