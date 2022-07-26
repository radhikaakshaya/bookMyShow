import React from 'react'
import DefaultLayout from '../layouts/Default.layout'
import { Route ,Routes} from 'react-router-dom'

const DefaultHoc = ({component:Component ,...rest})=> {
  return (
    <>
   <Routes>
  <Route
  {...rest}
  component={(props)=>{return(
    <DefaultLayout>
     <Component {...props}/>
     </DefaultLayout>
    )}}
    /></Routes>
   
     
   

    </>
  )
}

export default DefaultHoc