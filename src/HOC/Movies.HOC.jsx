import React from 'react'
import Movieslayout from '../layouts/Movies.layout'
import { Route ,Routes} from 'react-router-dom'
const MoviesHoc = ({component:Component , ...rest}) => {
  return (
    <>
    <Routes>
  <Route
  {...rest}
  component={(props)=>{return(
    <Movieslayout>
     <Component {...props}/>
    </Movieslayout>
    )}}
    /></Routes>
    </>
  )
}

export default MoviesHoc