import React ,{ useState} from "react";
import logo from "../../assets/Logo2.svg";
import arrow from "../../assets/arrow-left.svg";
import { Link } from "react-router-dom";
import CustomeButton from "../../components/customeButton";
function CreateNewFarm() {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    count:'',
    weight:''

  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const areAllInputsFilled = () => {
    return Object.values(formData).every((value) => value.trim() !== '');
  };


  return (
    <div>
      <div className="flex items-center"> <img src={arrow} alt="left arrow" className="block me-3 " />
      <Link to="/" className="text-2xl  font-medium text-[#041300]">  Back </Link>  
      </div>
   <div className="flex justify-center items-center">
   <div className="bg-white rounded-[20px] shadow-3xl  pb-[41px] pt-6 px-8 w-[441px]">
        <img src={logo} alt="logo" className="block " />
        <p className="text-[32px] font-medium text-start text-[#041300] mt-10 mb-3">
          Create New Farm
        </p>
        <form action="">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Farm Name"
            className="mb-4 py-3 ps-4 rounded-xl w-full border placeholder:font-normal placeholder:text-base placeholder:text-[#999999]  border-[#EAECF0]"
          />
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            placeholder="Farm Type"
            className="py-3  mb-4 ps-4 rounded-xl w-full border placeholder:font-normal placeholder:text-base placeholder:text-[#999999]  border-[#EAECF0]"
          />
          <input
            type="text"
            name="count"
            value={formData.count}
            onChange={handleInputChange}
            placeholder="Fish Initial Count e.g. (2000 fish)"
            className=" mb-4 py-3 ps-4 rounded-xl w-full border placeholder:font-normal placeholder:text-base placeholder:text-[#999999]  border-[#EAECF0]"
          />
          <input
            type="text"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
            placeholder="Fish Initial Weight e.g. (250 kg)"
            className="py-3 mb-10 ps-4 rounded-xl w-full border placeholder:font-normal placeholder:text-base placeholder:text-[#999999]  border-[#EAECF0]"
          />
        {areAllInputsFilled() && (<CustomeButton to="/dashboard" text="Continue"    className="bg-primary text-white w-full  "/> )}
        </form>
      </div>
   </div>
    </div>
  );
}
export default CreateNewFarm;