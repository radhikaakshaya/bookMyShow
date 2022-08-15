import React, { useContext, useEffect, useState } from 'react'
import CastCrewEvent from '../Events/CastCrewEvent'
import Events from '../Events/Event.component'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import {MovieContext } from '../../context/movie.context' 
const MovieBelowPage = () => {
  const {movie} =useContext(MovieContext)
  const [cast,setCast]=useState([]);
  const [crew,setCrew]=useState([]);
  const {id}=useParams();
  const [similar,setSimilar]=useState([]);
  //cast and crew images
  useEffect(()=>{
const requestCast=async ()=>{
  const getCast=await axios.get(`/movie/${id}/credits`)
  setCast(getCast.data.cast);
  setCrew(getCast.data.crew);
}
requestCast();
  },[id])
  //Similar movies
   useEffect(()=>{
const requestSimilar=async ()=>{
  const getMovies=await axios.get(`/movie/${id}/similar`)
  setSimilar(getMovies.data.results);
 console.log('similar',getMovies)
}
requestSimilar();
  },[id])
  return (
    <>
    {/* mobile  screen*/}

    {/* -----------ABOUT THE MOVIE---------- */}
<div className='hidden lg:block container mx-auto'>
 <h1 className='text-black font-bold text-xl'>About Movie</h1>
 <p>{movie.overview}</p>
 <br />
 <hr />
</div>
     {/* ------------------rating----------- */}
     <div className='flex bg-gray-200 p-2 rounded-xl justify-between lg:hidden'>
      <div className='flex flex-col m-2'>
       <h1 className='text-gray-800 font-bold'>Add your rating and review</h1>
       <h3 className='text-black'>Your ratings matter</h3>
      </div>
      <button className='bg-rose-600 text-white rounded p-1'>Rate now</button>
      
     </div>
    
 {/*-------------cast------------- */}
 <div className='lg:container mx-auto my-5'>
  <CastCrewEvent  title='Cast' castimage={cast}/>
 </div>
<hr className='m-4'/>
{/*-------------crew------------- */}
<div className='lg:container mx-auto'>
  <CastCrewEvent  title='Crew' castimage={crew}/>
 </div>
  {/* ------------------reviews----------- */}
     <div className=' hidden lg:block w-1/3 mx-28 my-5 '>
       <h1 className='text-xl text-black font-bold'>Reviews</h1>
     <br />
      <div className='flex bg-gray-200 p-2 rounded-xl justify-between'>
      <div className='flex flex-col m-2'>
       <h1 className='text-gray-800 font-bold'>Watched ? And Your rating & review</h1>
       <h3 className='text-black'>Your ratings matter</h3>
      </div>
      <button className='bg-rose-600 text-white rounded p-1'>Rate now</button>
      </div>
     </div>
 {/*-------------You may also like------------- */}
<div className='lg:container mx-auto'>
   <Events images={similar} title='You May Also Like'/>
 </div>
 <div className='lg:container mx-auto'>
   <Events images={similar} title='BMS Exclusive'/>
 </div>

   
    </>
  )
}

export default MovieBelowPage