import React from "react";
import AmmoniaChart from "../../components/ammoniaChart";
import GrowthAnalysis from "../../components/growthAnalysis";
import WaterActivity from "../../components/waterActivity";
import AmmoniaAnalysis from "../../components/ammoniaAnalysis";

function Overview() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-6  mt-[30px] gap-4">
        <div className="lg:col-start-1 lg:col-span-4">
          <AmmoniaChart />
        </div>
        <div className=" lg:col-start-5 lg:col-span-7">
          <GrowthAnalysis />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-7 mt-[30px] gap-4">
        <div className="lg:col-start-1 lg:col-span-3">
          <AmmoniaAnalysis />
        </div>
        <div className="lg:col-start-4 lg:col-span-7 ">
          <WaterActivity />
        </div>
      </div>
    </div>
  );
}
export default Overview;