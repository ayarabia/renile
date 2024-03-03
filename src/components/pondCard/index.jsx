import React from "react";
import image from "../../assets/ocean.svg";
function PondCard(props) {
  const pondDetaile = props.item;
  return (
    <div className="bg-white rounded-[20px] shadow-3xl mb-2 lg:mb-0  ">
      {/* <img
        src={image}
        alt="pond image"
        className="block w-full  rounded-t-[20px] h-[350px] object-cover"
      /> */}
      <div className="p-4">
        <p className={`mb-2 text-base font-semibold text-primary `}>
          {pondDetaile.name.charAt(0).toUpperCase() + pondDetaile.name.slice(1)}
        </p>
        <div className="flex items-center justify-between lg:pe-12 mb-2 flex-wrap ">
          <p className="  font-normal lg:text-[17px] text-[15px] ">
            Type Of Fish:{" "}
            <span className="text-base font-medium text-[#999] ">
              {pondDetaile.typeOfFish}
            </span>
          </p>
          <p className=" font-normal lg:text-[17px] text-[15px] ">
            Temperature :
            <span className="text-base font-medium text-[#999] ">
              {pondDetaile.temperature} °C
            </span>
          </p>
        </div>
        <div className="flex items-center justify-between lg:pe-12 mb-2 flex-wrap">
          <p className="  font-normal lg:text-[17px] text-[15px] ">
            Number Of Fish :
            <span className="text-base font-medium text-[#999] ">
              {pondDetaile.numberOfFish}
            </span>
          </p>
          <p className=" font-normal lg:text-[17px] text-[15px]">
            Average Weight :
            <span className="text-base font-medium text-[#999] ">
              {pondDetaile.averageWeight}
            </span>
          </p>
        </div>

        <div className="flex items-center justify-between lg:pe-12 mb-2 flex-wrap ">
          <p className="  font-normal lg:text-[17px] text-[15px] ">
          Food Amount:
            <span className="text-base font-medium text-[#999] ">
              {pondDetaile.foodAmount}
            </span>
          </p>
          <p className=" font-normal lg:text-[17px] text-[15px] ">
          Food Since Start Of Day:
            <span className="text-base font-medium text-[#999] ">
              {pondDetaile. foodSinceStartOfDay} 
            </span>
          </p>
        </div>
        <div className="flex items-center justify-between lg:pe-12 mb-2 flex-wrap">
          <p className="  font-normal lg:text-[17px] text-[15px] ">
          Food Since Start Of Pond:
            <span className="text-base font-medium text-[#999] ">
              {pondDetaile.foodSinceStartOfPond}
            </span>
          </p>
          <p className=" font-normal lg:text-[17px] text-[15px]">
            Average Weight :
            <span className="text-base font-medium text-[#999] ">
              {pondDetaile.averageWeight}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PondCard;
