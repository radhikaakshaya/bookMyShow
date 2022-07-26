import React, { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import {FiChevronDown,FiChevronUp} from 'react-icons/fi'
import {BsFillCalendar2WeekFill} from 'react-icons/bs'
import Calendar from 'react-calendar';

const PlaysFilters = (props) => {
 const[cal,setCal]=useState(false);

  return (
    <>
   <Disclosure>
       {({ open }) => (
        <>
          <Disclosure.Button className='flex py-2 items-center gap-3 shadow-white-400'>
            {open ? <FiChevronUp/> : <FiChevronDown/>}
             <span className={ open?"text-rose-800 font-bold" :"text-green-800 font-bold"}>{props.title} </span>
            
          </Disclosure.Button>

          <Disclosure.Panel>
           <div className='flex  flex-wrap items-center gap-2' >
            {
             props.tags.map((tag)=>(
<>
<div className='border-2 border-gray-400 p-2'>
 <span className='text-red-400 text-xl'>{tag}</span>
</div>

</>
             ))
            }
           </div>
           {props.title==='Date' &&(
           <div className='py-3 flex gap-3 items-center'>
            {/* <input type="checkbox" onClick={()=>{setCal(!cal)}}/> <label htmlFor="">On Date Range</label> */}
<BsFillCalendar2WeekFill className='fill-blue-400 text-3xl' onClick={()=>{setCal(!cal)}} />
<label htmlFor="">On Date Range</label>
            {cal && (<Calendar/>)}
           </div>
           )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </>
  )
}

export default PlaysFilters