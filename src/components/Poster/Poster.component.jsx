import React from 'react'
import { Link } from 'react-router-dom'

const Posters = (props) => {
 
  return (
    <Link to={`/movies/${props.id}`}>
    <div className='flex flex-col gap-3 px-3 py-3'>
     <div className='h-40 md:h-80' key={props.id}>
      <img src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} alt={props.original_title}
      className='w-full h-full rounded-xl'/></div>
     <div>
      <h5 className={ `text-xl font-bold ${props.isDark? "text-white":"text-gray-700" }`} >{props.original_title}</h5>
       <h5  className={ `text-sm ${props.isDark? "text-white":"text-gray-700" }`}>{props.title}</h5>
        
     </div>
    </div></Link>
  )
}

export default Posters