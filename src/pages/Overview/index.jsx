import React from "react";
import AmmoniaChart from "../../components/ammoniaChart";
import GrowthAnalysis from "../../components/growthAnalysis";
import WaterActivity from "../../components/waterActivity";
import AmmoniaAnalysis from "../../components/ammoniaAnalysis";

function Overview() {
  return (
    <div>
      <div className="grid grid-cols-6 mt-[30px] gap-4">
        <div className="col-start-1 col-span-4">
          <AmmoniaChart />
        </div>
        <div className=" col-start-5 col-span-7">
          <GrowthAnalysis />
        </div>
      </div>
      <div className="grid grid-cols-7 mt-[30px] gap-4">
        <div className="col-start-1 col-span-3">
          <AmmoniaAnalysis />
        </div>
        <div className="col-start-4 col-span-7 ">
          <WaterActivity />
        </div>
      </div>
    </div>
  );
}
export default Overview;