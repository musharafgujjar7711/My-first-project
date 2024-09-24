import React from 'react'

function Topbutton({setQuery}) {
  const TopCity=[
    {
      id:1,
      name:"Karachi"
    },
    {
      id:2,
      name:"London"
    },
    {
      id:3,
      name:"washington DC"
    },
    {
      id:4,
      name:"Sydney"
    },
  ]
  return (
    <div className='text-white p-4 flex justify-center gap-24 items-center font-bold'>
      {TopCity.map((city)=>{
       return <button key={city.id} className=' hover:bg-slate-500 p-2 rounded' onClick={()=>setQuery({q: city.name})}>{city.name}</button>
      })}
      
    </div> 
  )
}

export default Topbutton