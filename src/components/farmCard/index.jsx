import React from 'react'
import location from '../../assets/location.svg'
import { Link } from 'react-router-dom'
function FarmCard(props) {   
    const farmDetaile=props.item
  return (
<Link to="/dashboard">
<div className='bg-white rounded-[20px] shadow-3xl  '>
       <img src={farmDetaile.logo} alt="farm image" className='block w-full  rounded-t-[20px]' />
       <div className='p-4'>
        <p className={`mb-2 text-base font-semibold ${farmDetaile.health?"text-primary":"text-[#F14F4F]"}`}> {farmDetaile.name}</p>
        <p className='flex items-start'>        <img src={location} alt="map" className='me-2 mt-[2px]' />
 <span className='text-[#999] font-normal text-[15px]'>{farmDetaile.address}</span></p>
       </div>
    </div>
</Link>
  )
}

export default FarmCard