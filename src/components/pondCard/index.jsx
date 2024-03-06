import React from "react";
import image from "../../assets/ocean.svg";
import NumberOfFish from "../../assets/NumberOfFish.svg";
import Counter from "../../assets/counter.svg";
import FoodAmount from "../../assets/FoodAmount.svg";
import AverageWeight from "../../assets/AverageWeight.svg";
import TypeOfFish from "../../assets/TypeOfFish.svg";
import Temperature from "../../assets/Temperature .svg";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { MdDone } from "react-icons/md";
function PondCard(props) {
  const pondDetaile = props.item;
  const { deletePond } = props;
  return (
    <div className="bg-white rounded-[20px] shadow-3xl mb-2 lg:mb-0  ">
      {/* <img
        src={image}
        alt="pond image"
        className="block w-full  rounded-t-[20px] h-[350px] object-cover"
      /> */}
      <div className="p-4">
        <div className="flex justify-between items-center">
          <p className={`mb-4 text-base font-semibold text-primary  `}>
            {pondDetaile.name.charAt(0).toUpperCase() +
              pondDetaile.name.slice(1)}
          </p>
          {/* <div>
            <button
              className="delete-button text-[#F14F4F] "
              onClick={() => deletePond(pondDetaile.id)}
            >
              <FiTrash2 />
            </button>
          </div> */}
        </div>
        <div className="flex items-center justify-between lg:pe-12 mb-4 flex-wrap ">
          <p className="  font-normal flex items-center lg:text-[17px] text-[15px] ">
            <img
              src={TypeOfFish}
              alt="image"
              className="md:h-[30px] md:w-[30px] h-[15px] w-[15px] me-2"
            />
            Type Of Fish:
            <span className="text-base font-medium text-[#999] ">
              {pondDetaile.typeOfFish}
            </span>
          </p>
          <p className=" font-normal flex items-center lg:text-[17px] text-[15px] ">
            <img
              src={Temperature}
              alt="image"
              className="md:h-[30px] md:w-[30px] h-[15px] w-[15px]  me-2"
            />
            Temperature :
            <span className="text-base font-medium text-[#999] ">
              {pondDetaile.temperature} °C
            </span>
          </p>
        </div>
        <div className="flex items-center justify-between lg:pe-12 mb-4 flex-wrap">
          <p className="  font-normal flex items-center lg:text-[17px] text-[15px] ">
            <img
              src={NumberOfFish}
              alt="image"
              className="md:h-[30px] md:w-[30px] h-[15px] w-[15px]  me-2"
            />
            Number Of Fish :
            <span className="text-base font-medium text-[#999] ">
              {pondDetaile.numberOfFish}
            </span>
          </p>
          <p className=" font-normal lg:text-[17px] flex items-center text-[15px]">
            <img
              src={AverageWeight}
              alt="image"
              className="md:h-[30px] md:w-[30px] h-[15px] w-[15px]  me-2"
            />
            Average Weight :
            <span className="text-base font-medium text-[#999] ">
              {pondDetaile.averageWeight}
            </span>
          </p>
        </div>
        <div className="flex items-center justify-between lg:pe-2.5  mb-5 flex-wrap ">
          <p className="  font-normal lg:text-[17px] text-[15px] flex items-center">
            <img
              src={FoodAmount}
              alt="image"
              className="md:h-[30px] md:w-[30px] h-[15px] w-[15px]  me-2"
            />
            Food Amount:
            <span className="text-base font-medium text-[#999] ">
              {pondDetaile.foodAmount}
            </span>
          </p>
          <p className=" font-normal lg:text-[17px] text-[15px] flex  items-center">
            <img src={Counter} alt="image" className="md:h-[30px] md:w-[30px] h-[15px] w-[15px]  me-2" />
            Food Since Start Of Day:
            <span className="text-base font-medium text-[#999] ">
              {pondDetaile.foodSinceStartOfDay}
            </span>
          </p>
        </div>

        <p className="text-[#20563F]  italic mb-3  text-base font-semibold mt-5 ">
          {pondDetaile.notes}
        </p>
      </div>
    </div>
  );
}

export default PondCard;
