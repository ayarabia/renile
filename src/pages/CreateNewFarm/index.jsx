import React, { useEffect, useState } from "react";
import logo from "../../assets/nojo.svg";
import arrow from "../../assets/arrow-left.svg";
import { Link } from "react-router-dom";
import {  useNavigate } from "react-router-dom";
import { instance } from "../../networking/baseInstance";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateNewFarm() {
  const farmtypes = ["fish", "plant", "mixed", "other"];
  const [formData, setFormData] = useState({
    name: "",
    type: "fish",
    address: "",
    phone: "",
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
  
  const navigate = useNavigate();
  const createFarm = () => {
    instance
      .post("farms", formData)
      .then((response) => {
        toast.success(response.data. message, {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
      });
      navigate("/allfarms");
    })
      .catch((error) => {
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        // console.error("Error from base URL 2:", error);
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
          <img src={logo} alt="logo" className="block h-[70px] m-auto" />
          <p className="md:text-[32px] text-[20px] font-medium text-start text-[#041300] mt-10 mb-3">
            Create New Farm
          </p>
          <div>
          
            <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Farm name"
            className="py-3  mb-4 ps-4 rounded-xl w-full border placeholder:font-normal placeholder:text-base placeholder:text-[#999999]  border-[#EAECF0]"
          />
            <div className="relative ">
              {/* <img
                src={arrowDown}
                alt="arrow"
                className="absolute end-4 top-4 "
              /> */}

              <select
                value={formData.type}
                name="type"
                onChange={handleInputChange}
                className="py-3 cursor-pointer mb-4 ps-4 rounded-xl w-full border placeholder:font-normal placeholder:text-base placeholder:text-[#999999]  border-[#EAECF0] z-20  bg-white   outline-none "
              >
                <option value="" disabled selected>
                  Farm Type
                </option>
                {farmtypes.map((item) => {
                  return (
                    <option
                      key={item}
                      className="text-primary text-base "
                      value={item}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </option>
                  );
                })}
              </select>
            </div>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Farm Address"
              className=" mb-4 py-3 ps-4 rounded-xl w-full border placeholder:font-normal placeholder:text-base placeholder:text-[#999999]  border-[#EAECF0]"
            />
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Farm Phone"
              className="py-3 mb-10 ps-4 rounded-xl w-full border placeholder:font-normal placeholder:text-base placeholder:text-[#999999]  border-[#EAECF0]"
            />
          
              <button className="w-full bg-primary text-white px-3 block   py-[9px] rounded-xl shadow-3xl  font-semibold  text-center "
               onClick={createFarm} disabled={!areAllInputsFilled()}>
               Continue
              </button>
         
          </div>
        </div>
      </div>
      <ToastContainer />
    
    </div>
  );
}
export default CreateNewFarm;