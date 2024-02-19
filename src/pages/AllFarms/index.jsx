import React from 'react'
import FarmCard from '../../components/farmCard'
import farmImage from "../../assets/savannah.svg"
function AllFarms() {
    const allfarms=[
        {
            "name": "Sample Farm",
            "type": "fish",
            "code": "SF123",
            "logo": farmImage,
            "address": "123 Farm Lane, Farmville, FA 12345",
            "timezone": "UTC+0",
            "contactPhone": "+1234567890",
            "contactEmail": "contact@samplefarm.com",
            "order": 1,
            "is_archived": false,
            "health":true
          },
          {
            "name": "Sample Farm",
            "type": "fish",
            "code": "SF123",
            "logo": farmImage,
            "address": "123 Farm Lane, Farmville, FA 12345",
            "timezone": "UTC+0",
            "contactPhone": "+1234567890",
            "contactEmail": "contact@samplefarm.com",
            "order": 1,
            "is_archived": false,
            "health":true
          },
          {
            "name": "Sample Farm",
            "type": "fish",
            "code": "SF123",
            "logo": farmImage,
            "address": "123 Farm Lane, Farmville, FA 12345",
            "timezone": "UTC+0",
            "contactPhone": "+1234567890",
            "contactEmail": "contact@samplefarm.com",
            "order": 1,
            "is_archived": false,
            "health":false
          },
          {
            "name": "Sample Farm",
            "type": "fish",
            "code": "SF123",
            "logo": farmImage,
            "address": "123 Farm Lane, Farmville, FA 12345",
            "timezone": "UTC+0",
            "contactPhone": "+1234567890",
            "contactEmail": "contact@samplefarm.com",
            "order": 1,
            "is_archived": false,
            "health":true
          }
    ]
  return (
    <div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 p-8'>
      {allfarms.map((item)=>{
        return (  
        <div>
    <FarmCard item={item}/>
        </div>)
      })}
    </div>
  )
}

export default AllFarms