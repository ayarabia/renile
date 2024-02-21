import React ,{useState,useEffect} from 'react'
import FarmCard from '../../components/farmCard'
import axios from 'axios';
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
    // const [allfarms, setAllfarms] = useState([]);
    // useEffect(() => {
    //   // GET request
    //   axios.get('http://159.65.161.165/farms')
    //     .then(response => {
    //       console.log(response);
    //       setAllfarms(response.results);
    //     })
    //     .catch(error => {
    //       console.error('Error fetching data:', error);
    //     });
    // }, []);
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