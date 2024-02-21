import React  , { useState } from 'react'

function LiveFilterByDate({data}) {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const filteredData = data.filter((item) => {
        const itemDate = new Date(item.date);
        const startFilterDate = startDate !== '' ? new Date(startDate) : null;
        const endFilterDate = endDate !== '' ? new Date(endDate) : null;
    
        if (startFilterDate && itemDate < startFilterDate) {
          return false;
        }
    
        if (endFilterDate && itemDate > endFilterDate) {
          return false;
        }
    
        return true;
      });
  return (
    <div>
        <div className='flex items-center'>
        <div className="flex items-center relative bg-white py-2 px-3 rounded-xl text-primary shadow-3xl text-base font-medium border border-[#D0D5DD]  ">
           
            <input
              type="date"
              name="date"
              value={startDate}
             onChange={(e) => setStartDate(e.target.value)}
              className="bg-transparnt w-full placeholder: text-primary  text-base font-normal"
            />
          </div>
          <div className="flex items-center relative bg-white py-2 px-3 rounded-xl text-primary shadow-3xl text-base font-medium border border-[#D0D5DD]  ">
          
            <input
              type="date"
              name="date"
              value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
              className="bg-transparnt w-full placeholder: text-primary  text-base font-normal"
            />
          </div>
        </div>
    </div>
  )
}

export default LiveFilterByDate