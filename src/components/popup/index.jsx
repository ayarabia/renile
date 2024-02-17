import React from 'react'

function Popup({ isOpen, onClose ,data,setNewRow,addRow }) {
  const formData=data

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRow({
      ...formData,
      [name]: value,
    });
  };
  const allValuesTruthy = Object.values(formData).every(value => value);

  return (
    <div className={`fixed inset-0 ${isOpen ? '' : 'hidden'} bg-gray-800 bg-opacity-50 flex items-center justify-center`}>
  
    <div className="bg-white rounded-[20px] shadow-3xl  pb-[41px] pt-6 px-8 w-[380px]">
     
     <form action="">
       <input
         type="text"
         name="date"
         value={formData.date}
         onChange={handleInputChange}
         placeholder="Date"
         className="mb-4 py-3 ps-4 rounded-xl w-full border placeholder:font-normal placeholder:text-base placeholder:text-[#999999]  border-[#EAECF0]"
       />
       <input
         type="text"
         name="dissolvedOxygen"
         value={formData.dissolvedOxygen}
         onChange={handleInputChange}
         placeholder="Dissolved Oxygen"
         className="py-3  mb-4 ps-4 rounded-xl w-full border placeholder:font-normal placeholder:text-base placeholder:text-[#999999]  border-[#EAECF0]"
       />
       <input
         type="text"
         name="pHLevels"
         value={formData.pHLevels}
         onChange={handleInputChange}
         placeholder="PH Levels"
         className=" mb-4 py-3 ps-4 rounded-xl w-full border placeholder:font-normal placeholder:text-base placeholder:text-[#999999]  border-[#EAECF0]"
       />
       <input
         type="text"
         name="temperature"
         value={formData.temperature}
         onChange={handleInputChange}
         placeholder="Temperature"
         className="py-3 mb-10 ps-4 rounded-xl w-full border placeholder:font-normal placeholder:text-base placeholder:text-[#999999]  border-[#EAECF0]"
       />
     </form>
  <div className='flex items-center justify-between'>
  <button className="px-6  h-[48px] py-[9px] rounded-xl shadow-3xl  font-semibold text-base text-primary bg-white " onClick={onClose}>
        Close
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