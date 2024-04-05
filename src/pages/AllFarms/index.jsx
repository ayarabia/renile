import React, { useState, useEffect } from "react";
import FarmCard from "../../components/farmCard";
import { instance } from "../../networking/baseInstance";
import LoadingSpinner from "../../components/loadingSpinner";
function AllFarms() {
  const [allfarms, setAllfarms] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    // GET request
    instance
      .get("farms")
      .then((response) => {
        setAllfarms(response.data.results);
        setLoad(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoad(false);
      });
  }, []);
  return (
    <>
      <p className="text-center text-primary font-semibold lg:text-2xl text-xl">
        All Farms
      </p>
      <div
        className={`${allfarms.length > 5 ? "" : "h-screen"}  ${
          allfarms.length > 0
            ? "grid"
            : "h-screen flex justify-center items-center"
        } lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 px-[30px] pt-14`}
      >
        {load === true ? (
          <LoadingSpinner />
        ) : (
          <>
            {allfarms.length == 0 ? (
              <div className=" text-2xl text-center ">
                <h2>No Farms available</h2>
              </div>
            ) : (
              <>
                {allfarms.map((item, index) => {
                  return (
                    <div key={item.id}>
                      <FarmCard item={item} index={index + 1} />
                    </div>
                  );
                })}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}
export default AllFarms;