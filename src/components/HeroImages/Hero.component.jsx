import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import axios from 'axios'
import { NextArrow,PrevArrow } from './ArrowFunctions.component';
const HeroCarousel = () => {
const[images,setImages]=useState([])

useEffect(()=>{
  const HeroNewPlayingImages=async()=>{
    const getHeroImages=await axios.get('/movie/now_playing');
    setImages(getHeroImages.data.results)
    
  }
  HeroNewPlayingImages();
},[])


 const settingsLG = {
   arrows: true,
        centerMode: true,
        centerPadding: '300px',
    infinite: true,
    slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextarrow:<NextArrow/>,
  prevarrow:<PrevArrow/>
  };
  const settingsSM = {
   arrows: true,
    infinite: true,
    slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextarrow:<NextArrow/>,
  prevarrow:<PrevArrow/>
  };
  return (
    <> 
     <div className='hidden lg:block'>
       <Slider {...settingsLG}>
     {
      images.map((image,index)=>(
       <div className='w-20 h-80 px-3 py-2'><img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} key={index} alt='nature images' className='w-full h-full'/>
</div> 
      
      ))
     }
    </Slider>
     </div>
     <div className='lg:hidden'>
      <Slider {...settingsSM} >
     {
      images.map((image)=>(
       <div className='w-full h-80 py-2'><img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} key={image.id} alt='nature images' className='w-full h-full'/>
</div> 
      
      ))
     }
    </Slider>
     </div>
     
    </>
  )
}

export default HeroCarousel