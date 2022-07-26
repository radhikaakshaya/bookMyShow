import React, { useContext, useState } from 'react'
import { MovieContext } from '../../context/movie.context'
import Payment from '../PaymentModel/Payment.component'
const  MovieStreamingInfo= () => {
  const[isOpen, setIsOpen] = useState(false)
  const[price , setPrice]=useState(0)
  
  const rentMovies=()=> {
    setIsOpen(true);
    setPrice(500)
  }

  const buyMovies=()=> {
    setIsOpen(true)
    setPrice(999);
  }

  
  const {movie} =useContext(MovieContext)
  const genres=movie.genres?.map(({name})=>name).join(",")
  return (
    <>
    <Payment isOpen={isOpen} setIsOpen={setIsOpen} price={price}/>
    <div className='flex flex-col-reverse lg:flex-col items-start '>
     <span className='text-white bg-slate-400 p-0.5 bg-opacity-1 rounded-xl'>Streaming now</span>
     <h1 className='text-white font-bold text-2xl'>{movie.original_title}</h1>
     <h1 className='text-white text-xl'> {movie.original_language} . lang Audio(4k), {movie.tagline} </h1>
     <h1 className='text-white text-xl'>{(movie.runtime/60).toFixed(2)} hr &bull; {genres} &bull; .  </h1>
    <h1 className='gap-4 text-white text-xl my-2'>{movie.release_date}</h1>
    <div className='flex gap-4'>
    <button className='bg-rose-700 w-40 text-white text-2xl rounded' onClick={rentMovies}>Rent</button>
    <button className='bg-rose-700  w-40 text-white text-2xl rounded'onClick={buyMovies} >Buy</button></div>
    </div>
    </>
  )
}

export default MovieStreamingInfo