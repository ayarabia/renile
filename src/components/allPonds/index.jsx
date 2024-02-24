import React, { useState, useEffect } from "react";
import PondCard from '../pondCard';
import { instance } from "../../networking/baseInstance";
import LoadingSpinner from "../loadingSpinner";
function AllPonds() {
    const [ponds, setPonds] = useState([]);
    useEffect(() => {
      // GET request
      instance.get("pond")
        .then((response) => {
            setPonds(response.data.results);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);
  return (
    <div className={`${ponds.length > 0 ?"grid":""} lg:grid-cols-2  grid-cols-1 gap-8 `}>
 
    {ponds.length > 0 ? (
      ponds.map((item ,index) => {
        return (
          <div key={index}>
          <PondCard item={item}/>
          </div>
        );
      })
    ) : (
      <LoadingSpinner />
    )}
  </div>
  )
}

export default AllPonds