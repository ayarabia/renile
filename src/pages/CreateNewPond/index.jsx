import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo2.svg";
import arrow from "../../assets/arrow-left.svg";
import { Link } from "react-router-dom";
import CustomeButton from "../../components/customeButton";
import { instance } from "../../networking/baseInstance";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function CreateNewPond() {
  const [formData, setFormData] = useState({
    name: "",
    typeOfFish: "",
    numberOfFish: "",
    averageWeight: "",
   temperature:"",

  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const areAllInputsFilled = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };
  const createPond = () => {
    instance
      .post("pond", formData)
      .then((response) => {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        // console.log(response.data.message);
      })
      .catch((error) => {
        //  console.error("Error from base URL 2:", error.response.data.message );
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
        });
      });
  };


  return (
    <div className="p-8 h-screen">
      <div className="flex items-center mb-6">
       <img src={arrow} alt="left arrow" className="block me-3 " />
        <Link to="/" className="text-2xl  font-medium text-[#041300] ">
           Back
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-white rounded-[20px] shadow-3xl  pb-[41px] pt-6 px-8 md:w-[441px] w-[300px]">
          <img src={logo} alt="logo" className="block " />
          <p className="md:text-[32px] text-[20px] font-medium text-start text-[#041300] mt-10 mb-3">
            Create New Pond
          </p>
          <form action="">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Pond Name"
              className="mb-4 py-3 ps-4 rounded-xl w-full border placeholder:font-normal placeholder:text-base placeholder:text-[#999999]  border-[#EAECF0]"
            />
            <input
              type="text"
              name="typeOfFish"
              value={formData.typeOfFish}
              onChange={handleInputChange}
              placeholder="Pond Type"
              className="py-3  mb-4 ps-4 rounded-xl w-full border placeholder:font-normal placeholder:text-base placeholder:text-[#999999]  border-[#EAECF0]"
            />
            <input
              type="number"
              name="numberOfFish"
              value={formData.numberOfFish}
              onChange={handleInputChange}
              placeholder="Fish Initial Count e.g. (2000 fish)"
              className=" mb-4 py-3 ps-4 rounded-xl w-full border placeholder:font-normal placeholder:text-base placeholder:text-[#999999]  border-[#EAECF0]"
            />
            <input
              type="number"
              name="averageWeight"
              value={formData.averageWeight}
              onChange={handleInputChange}
              placeholder="Fish Initial Weight e.g. (250 kg)"
              className="py-3 mb-10 ps-4 rounded-xl w-full border placeholder:font-normal placeholder:text-base placeholder:text-[#999999]  border-[#EAECF0]"
            />
            <input
              type="number"
              name="temperature"
              value={formData.temperature}
              onChange={handleInputChange}
              placeholder="Temperature"
              className="py-3 mb-10 ps-4 rounded-xl w-full border placeholder:font-normal placeholder:text-base placeholder:text-[#999999]  border-[#EAECF0]"
            />
            {areAllInputsFilled() && (
              <button className="w-full" onClick={createPond}>
                <CustomeButton
                  to="#"
                  text="Continue"
                  className="bg-primary text-white w-full  "
                />
              </button>
             )} 
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
export default CreateNewPond;
