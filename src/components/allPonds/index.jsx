import React, { useState, useEffect } from "react";
import PondCard from "../pondCard";
import { instance } from "../../networking/baseInstance";
import LoadingSpinner from "../loadingSpinner";
function AllPonds() {
  const [ponds, setPonds] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    // GET request
    instance
      .get("pond")
      .then((response) => {
        setPonds(response.data.results);
        setLoad(true);
      })
      .catch((error) => {
        setLoad(false);
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div
      className={` ${
        ponds.length > 0 ? "grid" : "h-screen flex justify-center items-center "
      } lg:grid-cols-2  grid-cols-1 gap-8 `}
    >
      {load === true ? (
        ponds.length > 0 ? (
          ponds.map((item, index) => {
            return (
              <div key={index}>
                <PondCard item={item} />
              </div>
            );
          })
        ) : (
        
          <div className=" text-2xl text-center ">
          <h2>
            No Ponds avaliable... <br></br>
            you can create one
          </h2>
        </div>
        )
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}   
export default AllPonds;