import React, {  createContext, useState } from 'react'

export const MovieContext=createContext();

const MovieProvider = ({children}) => {
 const[movie,setMovie]=useState({
  original_title:'',
  tagline:'',
  release_date:'',
  original_language: " ",
  overview:'',
  id:0,
  backdrop_path:'',
  poster_path:''
 })
  return (
    <MovieContext.Provider value={{movie , setMovie}}>{children}</MovieContext.Provider>
  )
}
export default MovieProvider

 