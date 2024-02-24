import React from 'react'
import arrowDown from "../../assets/arrow-down.svg"
function CustomeDropDown({defaultValue,optios ,name}) {
  return (
    <div className="relative my-4 md:my-0">
            <img src={arrowDown} alt="arrow" className='absolute end-4 top-4' />
            <select className="z-20 py-2 px-4 bg-white border border-[#D0D5DD] rounded-xl text-lg font-medium w-fit outline-none appearance-none">
                <option className='text-primary ' selected>Monthly</option>
           
            </select>
        </div>
  )
}

export default CustomeDropDown