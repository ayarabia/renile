import React from "react";
import MortalityChart from "../../components/mortalityChart";
import GrowthAnalysis from "../../components/growthAnalysis";
import TableData from "../../components/table";

function GrowthRate() {
  return (
    <div>
      <div className="grid grid-cols-6 mt-[30px] gap-4">
        <div className="col-start-1 col-span-4">
          <MortalityChart />
        </div>
        <div className=" col-start-5 col-span-7">
          <GrowthAnalysis />
        </div>
      </div>
      <TableData/>
    </div>
  );
}
export default GrowthRate;