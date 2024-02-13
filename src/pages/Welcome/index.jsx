import React from "react";
import logo from "../../assets/Logo.svg";
import plusIcon from "../../assets/plusIcon.svg";
import CustomeButton from "../../components/customeButton";
function Welcome() {
  return (
  <div className="flex items-center justify-center">
      <div className="bg-white rounded-[20px] shadow-3xl flex items-center justify-center flex-col pb-[67px]">
      <img src={logo} alt="logo" className="block mx-[139px] pt-10 " />
      <div className="bg-addNewFarm bg-no-repeat w-[180px] h-[180px] rounded-full flex items-center justify-center z-20 mt-8 mb-6">
        <img src={plusIcon} alt="plusIcon" />
      </div>
      <CustomeButton
        text="Add New Farm"
        to="/createnewfarm"
        className="bg-primary text-white w-[259px] "
      />
    </div>
  </div>
  );
}
export default Welcome;