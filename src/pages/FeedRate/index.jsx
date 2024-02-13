

import React from "react";
import MortalityChart from "../../components/mortalityChart";
import GrowthAnalysis from "../../components/growthAnalysis";
import TableData from "../../components/table";
import WaterActivity from "../../components/waterActivity";

function FeedRate() {
  return (
    <div>
      <div className="grid grid-cols-6 mt-[30px] gap-4">
        <div className="col-start-1 col-span-4">
          <WaterActivity />
        </div>
        <div className=" col-start-5 col-span-7">
          <GrowthAnalysis />
        </div>
      </div>
      <TableData/>
    </div>
  );
}
export default FeedRate;