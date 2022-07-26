import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import axios from 'axios'

const EntertainmentPage = () => {
  const[entertainment,setEntertainment]=useState([])
  
  useEffect(()=>{
    const EntertainmentMovies=async()=>{
      const getMovies=await axios.get(`/movie/now_playing`);
      setEntertainment(getMovies.data.results)
    }
    EntertainmentMovies();
  },[])

  
 const EntertainmentCard=(props)=>{
  return (
    <>
   <div className='w-full h-60 px-2'>
<img className='w-full h-full rounded-xl' 
src={`https://image.tmdb.org/t/p/original/${props.src}`}
alt={props.original_title} />
   </div>
    </>
  )
 }
 const settings={
   infinite:false,
   slidesToShow: 4,
  slidesToScroll: 4,
  InitialSlide:0,
  responsive:[
  {
    breakpoints:1024,
  settings:{
  //  arrows: true,
   slidesToShow: 4,
   slidesToScroll: 2,
   Infinite:false
  }},
  {
   breakpoint: 768,
      settings: {
        // arrows: true,
        slidesToShow: 3,
        slidesToScroll:1,
        InitialSlide:1,
      }
     },
  {
     breakpoint: 480,
      settings: {
         slidesToShow: 2,
        slidesToScroll: 1
       
  }
 }
  ]
 }
 
  return (
     <>
     
     <Slider {...settings}>
      {entertainment.map((image)=>(
<EntertainmentCard src={image.poster_path} key={image.id}/>
      ))}
     </Slider>
    
    </>
  )
}

export default EntertainmentPage