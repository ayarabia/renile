import React ,{useState} from "react";
import arrow from "../../assets/arrow-left.svg";
import { Link } from "react-router-dom";
import CustomeButton from "../../components/customeButton";
function FarmSystem() {
    const [farmSystemType, setFarmSystemType] = useState(null);
    const [show, setShow] = useState(false);
    const handlefarmSystemSelected = (index) => {
        setFarmSystemType(index === farmSystemType ? null : index);
        setShow(true)
      };
      const isSelected = (index) => index === farmSystemType;
  const systems = [
    {
      title: "Manual Setting",
      image: "bg-manualSetting",
      text: "Lorem ipsum dolor sit amet consectetur. Vel in semper suspendisse nunc ut. Lacus erat risus quisque in amet.",
    },
    {
      title: "Automated Settings",
      image: "bg-automatedSetting",
      text: "Lorem ipsum dolor sit amet consectetur. Vel in semper suspendisse nunc ut. Lacus erat risus quisque in amet.",
    },
  ];
  return (
    <div className="p-8">
      <div className="flex items-center">
       <img src={arrow} alt="left arrow" className="block me-3 " />
        <Link to="/" className="text-2xl  font-medium text-[#041300]">
          Back
        </Link>
      </div>
      <div className="flex justify-center items-center flex-col flex-wrap">
        <p className="font-semibold md:text-[32px] text-[24px] mb-10 mt-[74px]">
          Choose Farm System
        </p>

        <div className="flex items-center md:justify-between justify-center flex-wrap">
          {systems.map((item ,index) => {
            return (
              <div
              onClick={() => handlefarmSystemSelected(index)}
                key={item.image}
                className={`bg-white mb-4 cursor-pointer rounded-[20px] shadow-3xl border  ${isSelected(index)? 'border-primary' : 'border-transparant'} flex items-center justify-center flex-col p-8 w-[304px] me-8`}
              >
                <p className="text-xl font-medium text-[#041300]">
                  {item.title}
                </p>
                <div
                  className={`${item.image} bg-no-repeat w-[135px] h-[135px]
     rounded-full flex items-center justify-center z-20 mt-5 mb-4`}
                ></div>
                <p className="font-normal text-base text-[#041300]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
        {show && (<CustomeButton to="/dashboard" text="Continue"    className="bg-primary text-white md:w-[640px] w-full  mt-14
      "/> )}
      </div>
    </div>
  );
}
export default FarmSystem;