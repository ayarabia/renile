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
  const [load, setLoad] = useState(true);
  useEffect(() => {
    // GET request
    instance.get("farms")
      .then((response) => {
        setAllfarms(response.data.results);
        setLoad(false)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoad(false)
      });
  }, []);
  return (
 <>
<p className="text-center text-primary font-semibold lg:text-2xl text-xl">All Farms</p>
<div className={`${allfarms.length > 5 ?"":"h-screen"}  ${allfarms.length > 0 ?"grid":"h-screen flex justify-center items-center"} lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 px-[30px] pt-14`}>
      {/* {allfarms.length > 0 ? (
        allfarms.map((item) => {
          return (
            <div key={item.code}>
              <FarmCard item={item} />
            </div>
          );
        })
      ) : (
        <LoadingSpinner />
      )} */}

      {load ===true ? (
        <LoadingSpinner />
      ) : (
        <>
          {allfarms.length == 0 ? (
          <div className=" text-2xl text-center ">
          <h2>
           No Farms  available
          
          </h2>
        </div>
          ) : 
            <>
            {allfarms.map((item, index) => {
              return (
                <div key={item.code}>
                <FarmCard item={item} index={index+1}/>
              </div>
              );
            })}
            </>
          }
        </>
      )}
    </div>
 </>
    
  );
}

export default AllFarms;
