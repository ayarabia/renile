import React , { useState ,useEffect }from "react";
import MortalityChart from "../../components/mortalityChart";
import GrowthAnalysis from "../../components/growthAnalysis";
import TableData from "../../components/table";
import filter from "../../assets/filter.svg";
import { instance } from "../../networking/baseInstance";
import WeightTable from "../../components/weightTable";
function GrowthRate() {
  const columns=["Date","PH Levels","Dissolved Oxygen","Temperature" ,"Ammonia","Predicted Weight"]

  const [showPlacholder, setShowPlacholder] = useState(true);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  return (
    <div >
      {/* <div className="grid grid-cols-1 lg:grid-cols-6 mt-[30px] gap-4">
        <div className="lg:col-start-1 lg:col-span-4">
          <MortalityChart />
        </div>
        <div className=" lg:col-start-5 lg:col-span-7">
          <GrowthAnalysis />
        </div>
      </div> */}
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
              className="bg-transparnt w-full  placeholder: text-primary  text-base font-normal"
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
              className="bg-transparnt w-full placeholder: text-primary  text-base font-normal"
            />
          </div>
        </div>
      <MortalityChart startDate={startDate} endDate={endDate}/>
      <WeightTable text="Predicted Weight" url="predict/weight" columns={columns} 
      startDate={startDate} endDate={endDate}
      />
    </div>
  );
}
export default GrowthRate;
