import React  , { useState ,useEffect }from "react";
import filter from "../../assets/filter.svg";
import forecast from "../../assets/chart-breakout.svg";
import Popup from "../popup";
function TableData(props) {
  const [rows,setRows]=useState([{
    date: 'Jan 6, 2022',
    dissolvedOxygen: '5.3%',
    pHLevels:'2.1%',
    temperature:'32ْ'

  }])
  const [newRow,setNewRow]=useState({
    date: '',
    dissolvedOxygen: '',
    pHLevels:'',
    temperature:''
})
  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = () => {
 
    setPopupOpen(true);
  };
  const closePopup = () => {
    setNewRow({
      date: '',
      dissolvedOxygen: '',
      pHLevels:'',
      temperature:''
  });
    setPopupOpen(false);
  };
  const addRow=()=>{
    setRows([...rows, newRow]);
    setNewRow({
      date: '',
      dissolvedOxygen: '',
      pHLevels:'',
      temperature:''
  });
  localStorage.setItem('ammoniData', JSON.stringify([...rows, newRow]));
  setPopupOpen(false);
  }
  useEffect(() => {
    const ammoniData = localStorage.getItem('ammoniData');
    if (ammoniData) {
      setRows(JSON.parse(ammoniData));
    }
  }, []);
  return (
    <div className="bg-white rounded-[20px] shadow-3xl px-6 py-8 mt-8 ">
      <div className="flex justify-between items-center flex-wrap">
        <div>
          <p className="text-[#121811] font-medium text-2xl mb-2">
            Ammonia Toxicity Data
          </p>
          <p className="text-[#646464] text-xs font-normal">
            Forecast Ammonia Toxicity data for the next months.
          </p>
        </div>
        <div className="flex items-center lg:mt-0 mt-4">
          <button className="flex items-center bg-white py-2 px-3 rounded-xl text-primary shadow-3xl text-base font-medium border border-[#D0D5DD] ">
            <img src={filter} alt="filtaration" className="me-2" />
            Filter
          </button>
          <button onClick={openPopup} className="ms-4 flex items-center bg-primary py-2 px-3 rounded-xl text-white shadow-3xl text-base font-semibold">
            <img src={forecast} alt="Forecast image" className="me-2" />
            Forecast Data
          </button>
        </div>
        <Popup isOpen={isPopupOpen} onClose={closePopup} addRow={addRow}  setNewRow={setNewRow} data={newRow} />
      </div>
      <div className="overflow-x-auto">
      <table class="table-auto mt-[34px] min-w-full  ">
  <thead className="bg-[#F8F8F8] text-[#041300]  text-left rounded-t-lg font-medium text-xs ">
    <tr>
      <th className="py-6 px-8">Date</th>
      <th className="py-6 px-8">Dissolved Oxygen</th>
      <th className="py-6 px-8">PH Levels</th>
      <th className="py-6 px-8">Temperature</th>
      <th className="py-6 px-8">Action</th>
    </tr>
  </thead>
  <tbody className="text-start text-sm font-normal ">
  
   {rows.map((row,index)=>{
return ( <tr className="border-b border-[#EAECF0]" key={index}>
 <td className="py-4 px-8">{row.date}</td>
      <td className="py-4 px-8">{row.dissolvedOxygen}</td>
      <td className="py-4 px-8">{row.pHLevels}</td>
      <td className="text-[#F14F4F] py-4 px-8">{row.temperature}</td>
<td className="py-4 px-8">....</td>
</tr>)
   })}
  </tbody>
</table>
      </div>
    
    </div>
  );
}

export default TableData;
