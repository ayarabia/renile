import React, { useEffect, useState } from 'react'
 import calander from "../../assets/calendar.svg"
function Popup({ isOpen, onClose ,data,setNewRow,addRow,getAmount ,ammoniaAmount ,showAmmoniaAmount}) {
  const formData=data
 const [date,setDate]=useState('Date')
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRow({
      ...formData,
      [name]: value,
    });
if(name==="date"){
  setDate(e.target.value)
}
  };


  const allValuesTruthy = Object.values(formData).every(value => value);

  return (
    <div className={`fixed inset-0 ${isOpen ? '' : 'hidden'} bg-gray-800 bg-opacity-50 flex items-center justify-center`}>
  
    <div className="bg-white rounded-[20px] shadow-3xl  pb-[41px] pt-6 px-8 w-[380px]">
     
     <form action="" className='relative'>
     <div
      className="flex  items-center mb-4 py-3 ps-4 relative border border-[#EAECF0] rounded-xl  "
    >
      <img src={calander} alt="calendar"  className='-mt-1'/>
      <span
        className="ms-2 bg-transparnt whitespace-nowrap text-[#999999] text-base font-normal"
      >
 {date}
      </span>
      <input
       type="date"
        name="date"
        value={formData.date}
        onChange={handleInputChange}
        className="bg-transparnt w-full placeholder:text-[#4F4F4F] text-xs font-normal"
      />
    </div>

       {/* <input
         type="date"
         name="date"
         id="dateInput"
         value={formData.date}
         onChange={handleInputChange}
         placeholder="Date"
         className="mb-4 py-3 ps-4 rounded-xl w-full border placeholder:font-normal placeholder:text-base placeholder:text-[#999999]  border-[#EAECF0]"
       /> */}
       <input
         type="number"
         name="dissolvedOxygen"
         value={formData.dissolvedOxygen}
         onChange={handleInputChange}
         placeholder="Dissolved Oxygen"
         className="py-3  mb-4 ps-4 rounded-xl w-full border placeholder:font-normal placeholder:text-base placeholder:text-[#999999]  border-[#EAECF0]"
       />
       <input
         type="number"
         name="pHLevels"
         value={formData.pHLevels}
         onChange={handleInputChange}
         placeholder="PH Levels"
         className=" mb-4 py-3 ps-4 rounded-xl w-full border placeholder:font-normal placeholder:text-base placeholder:text-[#999999]  border-[#EAECF0]"
       />
       <input
         type="number"
         name="temperature"
         value={formData.temperature}
         onChange={handleInputChange}
         placeholder="Temperature"
         className="py-3 mb-10 ps-4 rounded-xl w-full border placeholder:font-normal placeholder:text-base placeholder:text-[#999999]  border-[#EAECF0]"
       />
     </form>
    {showAmmoniaAmount? (  <p className='mb-10'>Toxic ammonia amount : {ammoniaAmount}</p>):null} 
  <div className='flex items-center justify-between'>
  <button className=" px-6 block  h-[48px] py-[9px] rounded-xl shadow-3xl  font-semibold text-base bg-primary text-white" onClick={onClose}>
        Close
      </button>
      <button disabled={!allValuesTruthy} className="px-6  h-[48px] py-[9px] rounded-xl shadow-3xl  font-semibold text-base text-primary bg-white " onClick={getAmount}>
     Test
      </button> 
      <button disabled={!allValuesTruthy} className="px-6 block  h-[48px] py-[9px] rounded-xl shadow-3xl  font-semibold text-base bg-primary text-white" onClick={addRow}>
       Save
      </button> 
  </div>
   </div>
    
 
    <div>
    
  
 

    </div>
  </div>
  )
}

export default Popup