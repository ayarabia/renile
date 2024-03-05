import React from "react";
import location from "../../assets/location.svg";
import farmImage from "../../assets/savannah.svg";
import farm1 from "../../assets/farm1.jpeg";
import farm2 from "../../assets/farm2.jpeg";
import farm3 from "../../assets/farm3.jpeg";
import { Link } from "react-router-dom";

function FarmCard(props) {
  const farmDetaile = props.item;
  const storeFarmId = () => {
    sessionStorage.setItem("farmId", farmDetaile.id);
    sessionStorage.setItem("farmName", farmDetaile.name);
  };
  console.log(farmDetaile);
  const addFarmImage = (id) => {
    if (id == 1) {
      return farm1;
    } else if (id == 2) {
      return farm2;
    }
    return farm3;
  };
  return (
    <Link
      to="/dashboard"
      state={{ name: farmDetaile.name, id: farmDetaile.id }}
      onClick={storeFarmId}
    >
      <div className="bg-white rounded-[20px] shadow-3xl  ">
        <img
          src={addFarmImage(farmDetaile.id)}
          alt="farm image"
          className="block w-full  rounded-t-[20px]"
        />
        <div className="p-4 lg:h-[155px] h-auto">
          <p
            className={`mb-2 text-base font-semibold ${
              farmDetaile.health ? "text-primary" : "text-[#F14F4F]"
            }`}
          >
            {" "}
            {farmDetaile.name}
          </p>
          <p className="flex items-start">
            {" "}
            <img src={location} alt="map" className="me-2 mt-[2px]" />
            <span className="text-[#999] font-normal text-[15px]">
              {farmDetaile.address}
            </span>
          </p>
          <p className="text-[#F14F4F]  italic   text-base font-semibold mt-5 ">
            {farmDetaile.notes}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default FarmCard;
