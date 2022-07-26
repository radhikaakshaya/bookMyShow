import React, { useEffect, useState } from 'react'
import EntertainmentPage from '../components/Entertainment/Entertainment.component'
import Events from '../components/Events/Event.component'
import Navbar from '../components/navbar/navbar.component'
import TempImages from '../config/TempImages'
import HeroCarousel from '../components/HeroImages/Hero.component'
import axios from 'axios'
const HomePage = () => {
  //IN premier posters
  const[popularimages,setPopularImages]=useState([])
  useEffect(()=>{
    const popularImages=async()=>{
      const getPopularImages=await axios.get('/movie/popular');
      setPopularImages(getPopularImages.data.results)
    
    }
    popularImages();
  },[])
//Events happing 

  // online streming upcoming movies
  const[upcomingMovies,setUpcomingMovies]=useState([])
  useEffect(()=>{
    const UpcomingMovies=async()=>{
      const getUpcomingMovies=await axios.get('/movie/upcoming');
      setUpcomingMovies(getUpcomingMovies.data.results)
     
    }
    UpcomingMovies();
  },[])
  //outdoor events topmovies
  const[topRatedMovies,setTopRatedMovies]=useState([])
  useEffect(()=>{
    const TopRatedMovies=async()=>{
      const getTopRatedMovies=await axios.get('/movie/top_rated');
      setTopRatedMovies(getTopRatedMovies.data.results)
     
    }
    TopRatedMovies();
  },[])

  return (
    <>
<Navbar/>
<HeroCarousel/>
    <div className=' flex flex-col gap-10'>
      <div className='container mx-auto'> 
    <h1 className='font-bold text-2xl text-black-400 my-4'>The best of Entertainment</h1>  
      <EntertainmentPage/>
      </div>
      <div className='bg-bgColors-700 py-10 '>
        <div className='container mx-auto'>
        <div className=''>
        {/*--------- rupay and premier icon image -------*/}
          <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-rupay-banner-web-collection-202104230555.png" alt="premiere image" />
        </div>
        
 <Events images={popularimages} title='Premieres' subtitle='Brand new releases every Friday' isDark='true'/>

</div>
      </div>
      {/* /// */}
      <div className='container mx-auto'>
        <Events images={popularimages} title='Events Happening Near You'/>
      </div>
       <div className='container mx-auto'>
        <Events images={upcomingMovies} title='Online Streaming Events'/>
      </div>
       <div className='container mx-auto'>
         <Events images={topRatedMovies} title='Outdoor Events'/>
      </div>
    </div>
    </>
  )
}

export default HomePage