import React from 'react'


export const NextArrow = (props) => {
  return (
   <>
    <div 
    className={props.className}
    style={{...props.style,backgroundColor:'#eb2f41' }}
    onClick={props.onClick}
    />
    </>
  )
}
// {...props}
export const PrevArrow = (props) => {
  return (
   <>
    <div  className={props.className}
    style={{...props.style,backgroundColor:'#eb2f41' }}
    onClick={props.onClick} />
    </>
  )
}

