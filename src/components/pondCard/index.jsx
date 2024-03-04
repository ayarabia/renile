import React from "react";
import image from "../../assets/ocean.svg";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { MdDone } from "react-icons/md";
function PondCard(props) {
  const pondDetaile = props.item;
  const {  deletePond } = props;
  return (
    <div className="bg-white rounded-[20px] shadow-3xl mb-2 lg:mb-0  ">
      {/* <img
        src={image}
        alt="pond image"
        className="block w-full  rounded-t-[20px] h-[350px] object-cover"
      /> */}
      <div className="p-4">
        <div className="flex justify-between items-center">
          <p className={`mb-2 text-base font-semibold text-primary `}>
            {pondDetaile.name.charAt(0).toUpperCase() +
              pondDetaile.name.slice(1)}
          </p>
          <div>
  <button
              className="delete-button text-[#F14F4F] "
              onClick={() => deletePond(pondDetaile.id)}
            >
              <FiTrash2 />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between lg:pe-12 mb-2 flex-wrap ">
          <p className="  font-normal lg:text-[17px] text-[15px] ">
            Type Of Fish:
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
              {pondDetaile.foodSinceStartOfDay}
            </span>
          </p>
        </div>

        <p className="text-[#20563F]  italic   text-base font-semibold mt-5 ">
        {pondDetaile.notes}
                        </p>



      </div>
    </div>
  );
}

export default PondCard;
