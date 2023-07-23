/* eslint-disable react/prop-types */
// import React from 'react'

function TopButton({setQuery}) {
  const cities =[
    {
      id:1,
      title:'America'
    },
    {
      id:2,
      title:'Australia'
    },
    {
      id:3,
      title:'Delhi'
    },
    {
      id:4,
      title:'Vancouver'
    },
    {
      id:5,
      title:'Kannur'
    },
    
  ]
  return (
    <div className='flex items-center justify-around my-6'>
      {cities.map((city,index)=>(
        <button onClick={()=>{setQuery({q:city.title})}} key={index} className='text-white text-lg font-medium'>{city.title}</button>
      ))}
    </div>
  )
}

export default TopButton
