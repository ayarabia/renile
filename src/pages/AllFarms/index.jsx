import React, { useState, useEffect } from "react";
import FarmCard from "../../components/farmCard";
import farmImage from "../../assets/savannah.svg";
import { instance } from "../../networking/baseInstance";
import LoadingSpinner from "../../components/loadingSpinner";
function AllFarms() {
  // const allfarms=[
  //     {
  //         "name": "Sample Farm",
  //         "type": "fish",
  //         "code": "SF123",
  //         "logo": farmImage,
  //         "address": "123 Farm Lane, Farmville, FA 12345",
  //         "timezone": "UTC+0",
  //         "contactPhone": "+1234567890",
  //         "contactEmail": "contact@samplefarm.com",
  //         "order": 1,
  //         "is_archived": false,
  //         "health":true
  //       },
  //       {
  //         "name": "Sample Farm",
  //         "type": "fish",
  //         "code": "SF123",
  //         "logo": farmImage,
  //         "address": "123 Farm Lane, Farmville, FA 12345",
  //         "timezone": "UTC+0",
  //         "contactPhone": "+1234567890",
  //         "contactEmail": "contact@samplefarm.com",
  //         "order": 1,
  //         "is_archived": false,
  //         "health":true
  //       },
  //       {
  //         "name": "Sample Farm",
  //         "type": "fish",
  //         "code": "SF123",
  //         "logo": farmImage,
  //         "address": "123 Farm Lane, Farmville, FA 12345",
  //         "timezone": "UTC+0",
  //         "contactPhone": "+1234567890",
  //         "contactEmail": "contact@samplefarm.com",
  //         "order": 1,
  //         "is_archived": false,
  //         "health":false
  //       },
  //       {
  //         "name": "Sample Farm",
  //         "type": "fish",
  //         "code": "SF123",
  //         "logo": farmImage,
  //         "address": "123 Farm Lane, Farmville, FA 12345",
  //         "timezone": "UTC+0",
  //         "contactPhone": "+1234567890",
  //         "contactEmail": "contact@samplefarm.com",
  //         "order": 1,
  //         "is_archived": false,
  //         "health":true
  //       }
  // ]
  const [allfarms, setAllfarms] = useState([]);
  useEffect(() => {
    // GET request
    instance.get("farms")
      .then((response) => {
        setAllfarms(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className={`${allfarms.length > 0 ?"grid":""} lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 p-8`}>
      {allfarms.length > 0 ? (
        allfarms.map((item) => {
          return (
            <div key={item.code}>
              <FarmCard item={item} />
            </div>
          );
        })
      ) : (
        <LoadingSpinner />
      )}
    </div>
    
  );
}

export default AllFarms;
