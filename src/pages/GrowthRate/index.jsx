import React from "react";
import MortalityChart from "../../components/mortalityChart";
import GrowthAnalysis from "../../components/growthAnalysis";
import TableData from "../../components/table";

function GrowthRate() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-6 mt-[30px] gap-4">
        <div className="lg:col-start-1 lg:col-span-4">
          <MortalityChart />
        </div>
        <div className=" lg:col-start-5 lg:col-span-7">
          <GrowthAnalysis />
        </div>
      </div>
      <TableData url="predict/weight"/>
    </div>
  );
}
export default GrowthRate;