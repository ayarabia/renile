import React, { useState, useEffect } from "react";
import PondCard from "../pondCard";
import { instance } from "../../networking/baseInstance";
import LoadingSpinner from "../loadingSpinner";
import CustomeButton from "../customeButton";
function AllPonds(props) {
  const farmId=props.farmId
  const [ponds, setPonds] = useState([]);
  const [load, setLoad] = useState(true);
  const fetchPonds=()=>{
    instance
      .get(`pond?farm=${farmId}`)
      .then((response) => {
        setPonds(response.data.results);
        console.log(response.data.results);
        setLoad(false);
      })
      .catch((error) => {
        setLoad(false);
        console.error("Error fetching data:", error);
      });
  }
  useEffect(() => {
    fetchPonds()
}, []);
const deletePond = (cardId) => {
    setPonds((prevCards) => prevCards.filter((card) => card.id !== cardId));
    instance
    .delete(`pond/${cardId}`)
    .then((response) => {
      fetchPonds()
})
    .catch((error) => {
   console.error("Error fetching data:", error);
    });
  //   localStorage.setItem("ammoniData", JSON.stringify([...updatedRows]));
  };
  return (
    <div
      className={` ${
        ponds.length > 0 ? "grid" : "h-screen flex justify-center items-center "
      } lg:grid-cols-2  grid-cols-1 gap-8 `}
    >
      {/* {load ? (
        <LoadingSpinner />
      ) : 
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
      )} */}
      {load ===true ? (
        <LoadingSpinner />
      ) : (
        <>
          {ponds.length == 0 ? (
          <div className=" text-2xl text-center ">
          <h2>
            No Ponds available
            <CustomeButton to="/allfarms" text="Select Farm" className="bg-[#F3F7F3] shadow-none text-base text-primary"/>
          </h2>
        </div>
          ) : 
            <>
            {ponds.map((item, index) => {
              return (
                <div key={index}>
                  <PondCard  item={item}  deletePond={deletePond} />
                </div>
              );
            })}
            </>
          }
        </>
      )}

    </div>
  );
}
export default AllPonds;
