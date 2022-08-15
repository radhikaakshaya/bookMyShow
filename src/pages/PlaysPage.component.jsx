import React from 'react'
import PlaysFilters from '../components/PlaysFilters.component'
import Navbar from '../components/navbar/navbar.component'

import Posters from '../components/Poster/Poster.component'
const PlaysPage = () => {
  return (
   <>
    <Navbar/>
    <br /><br />
    <div className='container mx-auto '>
     <div className='w-full lg:flex flex-row-reverse'>
      
  <div className=' lg:w-3/4 '> 
  <h1 className='text-3xl font-bold text-black px-3 '> Plays in Bengaluru</h1>
 {/* <div className='flex flex-wrap md:w-3/4 w-1/2'> 
 {
   TempImages.map((images)=>{
    return(
    <Posters {...images}/>
    )
   })
  }
  </div> */}

  </div>

    <div className='lg:w-3/12 '>
     <h1 className='text-3xl font-bold text-black'>Filters</h1>
    <div className='shadow-lg px-2 py-5'>
     <PlaysFilters title="Date" tags={['Today','Tomorrow','This Weekend']}/>
    </div>
     <div className='shadow-lg px-2 py-5'>
     <PlaysFilters title="Language" tags={['Kanada','Tamil','Hindi','Telugu','Bengali','Oria']}/>
    </div>
<div className='shadow-lg px-2 py-5'>
     <PlaysFilters title="Categories" tags={['Theatre','Storytelling']}/>
    </div>
    <div className='shadow-lg px-2 py-5'>
     <PlaysFilters title="Genries" tags={['Drama','comedy','Thriller']}/>
    </div>
    <div className='shadow-lg px-2 py-5'>
     <PlaysFilters title="Price" tags={['Free','0-500', '501-2000','above 2000']}/>
    </div>

    </div>
    </div>
  </div>
</>
  )
}
  

export default PlaysPage