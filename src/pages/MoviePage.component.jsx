import React,{useEffect,useContext} from 'react'
import MovieNavbar from '../components/MoviePageDetails/MovieNav.component'
import MovieStreamingInfo from '../components/MoviePageDetails/MovieStreamingInfo.component'
import { BsShare } from 'react-icons/bs'
import MovieBelowPage from '../components/MoviePageDetails/MovieBelowPage.component'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { MovieContext } from '../context/movie.context'

const MoviePage = () => {
   const {movie,setMovie}=useContext(MovieContext)

   const {id}=useParams()
  useEffect(()=>{
    const MovieDetails=async ()=>{
      const getDetails=await axios.get(`/movie/${id}`)
      setMovie(getDetails.data)
      console.log('first',getDetails)
    }
    MovieDetails();
  },[id])
 
  return (
    <>
   <MovieNavbar />
   {/*--------- mobile screen----------- */}
   <div className='md:hidden w-full  relative' style={{height:'calc(180vw)'}}>
    <div  className='w-full h-56 z-10 bottom-0 bg-black bg-opacity-50 absolute'/>
     <div className='bottom-4 left-5 absolute z-30'>
        <MovieStreamingInfo />
      </div>
     <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className=' w-full h-full' alt={movie.original_title} />

    
   </div>
   {/*-------------- Tab ----------- */}
   <div className='hidden lg:hidden md:block w-full  relative' style={{height:'calc(100vw)'}}>
      <div  className='w-full h-56 z-10 bottom-0 bg-black bg-opacity-50 absolute'/>
      <div className='bottom-4 left-5 absolute z-30'>
        <MovieStreamingInfo />
      </div>
     <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className=' w-full h-full' alt={movie.original_title} />
   </div>
   {/*---------------- pc ------------ */}
   <div className='hidden lg:block h-96 w-full relative'>
      <div  className='w-full h-full absolute z-10'
      style={{backgroundImage:'linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)'}}/>
      
      <div className='flex absolute justify-around inset-5 z-30 '>
        <div className='flex gap-5 items-center'>
          {/*poster image */}
<div className='w-52 h-80 '>
  <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}className=' w-full h-full' alt={movie.original_title} />
</div>
{/* poster-content */}
 <div className=''><MovieStreamingInfo /></div>
</div>
{/* share button */}
<div>
 <button className='flex  float-right gap-2 text-xl items-center rounded  text-white bg-gray-400 p-2 bg-opacity-1'>
  <BsShare className='w-full h-full '/> Share
</button>
</div>
      </div>
  
     <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className=' w-full h-full' alt={movie.original_title}/>
   </div>
    <div className='m-3' > <MovieBelowPage /> </div>
   

    </>
  )
}

export default MoviePage