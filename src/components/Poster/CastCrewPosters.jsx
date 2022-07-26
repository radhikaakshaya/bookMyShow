import React from 'react'


const CastCrewPosters = (props) => {
 return (
    <div className='flex flex-col gap-3 px-3 py-3'>
     
     <div className='md:w-28 md:h-28 w-16 h-16' key={props.id}>

      <img src={`https://image.tmdb.org/t/p/w500/${props.profile_path}`}  alt={props.original_name}
      className='w-full h-full  rounded-full'/></div>
     <div>
      <h5 className={ `text-xl font-bold ${props.isDark? "text-white":"text-gray-700" }`} >{props.original_name}</h5>
       <h5  className={ `text-sm ${props.isDark? "text-white":"text-gray-700" }`}>{props.character}</h5>
        
     </div>
    </div>
  )
}

export default CastCrewPosters