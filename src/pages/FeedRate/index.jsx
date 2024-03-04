import React, { useEffect, useState } from "react";
import MortalityChart from "../../components/mortalityChart";
import GrowthAnalysis from "../../components/growthAnalysis";
import TableData from "../../components/table";
import filter from "../../assets/filter.svg";
import WaterActivity from "../../components/waterActivity";
import FeedTable from "../../components/feedTable";
import FeedBars from "../../components/feedBars";
import arrowDown from "../../assets/arrow-down.svg"
import { instance } from "../../networking/baseInstance";
function FeedRate() {
  const columns = [
    "Date",
    "Length",
    "Weight",
    "Avg Biomass",
    "Feed Amount",
    "Growth Rate",
    "Feed Rate",
  ];
  const [ponds,setPonds]=useState([])
  const fetchPonds=()=>{
    instance
      .get("pond")
      .then((response) => {
        setPonds(response.data.results);
        console.log(response.data.results);
        
      })
      .catch((error) => {
         console.error("Error fetching data:", error);
      });
  }
  useEffect(() => {
    fetchPonds()
}, []);
  const [notes,setNotes]=useState([])
useEffect(()=>{
 instance
      .get("feed/notes")
      .then((response) => {
      setNotes(response.data.data);
       console.log(response.data.data);
      
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

},[])
  const [showPlacholder, setShowPlacholder] = useState(true);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [pondId,setPondId]=useState()
  const handelSelectId=()=>{
    
  }
  return (
    <div>
      <div className="flex items-center lg:justify-end lg:mt-0 mt-4 flex-wrap lg:mb-10 ">
        <div className="flex items-center relative mb-4 lg:mb-0 bg-white py-2 px-3 rounded-xl text-primary shadow-3xl text-base font-medium border border-[#D0D5DD]  ">
          <img src={filter} alt="filtaration" className="me-2" />
          <span className="ms-2 bg-transparnt whitespace-nowrap  text-primary  text-base font-normal">
            {showPlacholder ? "start date" : startDate}
          </span>
          <input
            type="date"
            name="date"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
              setShowPlacholder(false);
            }}
            className="bg-transparnt w-full z-20  placeholder: text-primary  text-base font-normal"
          />
        </div>
        <div className="flex lg:ms-3 items-center relative mb-4 lg:mb-0 bg-white py-2 px-3 rounded-xl text-primary shadow-3xl text-base font-medium border border-[#D0D5DD]  ">
          <img src={filter} alt="filtaration" className="me-2" />
          <span className="ms-2 bg-transparnt whitespace-nowrap  text-primary  text-base font-normal">
            {showPlacholder ? "end date" : endDate}
          </span>
          <input
            type="date"
            name="date"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
              setShowPlacholder(false);
            }}
            className="bg-transparnt w-full z-20  placeholder: text-primary  text-base font-normal"
          />
        </div>
      </div>
   <div className="relative my-4 md:my-0">
            <img src={arrowDown} alt="arrow" className='absolute end-4 top-4' />
            <select className="z-20 py-2 px-4 bg-white border border-[#D0D5DD] rounded-xl text-lg font-medium w-fit outline-none appearance-none">
                <option className='text-primary text-[14px] ' >Pond name</option>
           {ponds.map((item)=>{
               return( <option className='text-primary ' >{item.name}</option>)
           })}
            </select>
        </div>
      <div className="grid lg:grid-cols-6 grid-cols-1 mt-[30px] gap-4">
        <div className="lg:col-start-1 lg:col-span-4">
          <WaterActivity startDate={startDate} endDate={endDate} />
        </div>
        <div className=" lg:col-start-5 lg:col-span-7">
          <FeedBars startDate={startDate} endDate={endDate} pondid={pondId} />
        </div>
      </div>
      {notes.length >0 ?( <div className="text-[#20563F]  italic rounded-2xl gradient shadow-3xl  py-2 pe-4 ps-[38px] text-lg font-semibold mt-5 ">
       { notes.map((item)=>{
            return(  <p className="mb-3 md:mb-0" key={item}>{item}</p>)
          })   } </div>):null}
                      
      <FeedTable
        url="predict/feed"
        text="Predicted Amount of Food"
        columns={columns}
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  );
}
export default FeedRate;
