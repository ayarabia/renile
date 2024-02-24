

import React from "react";
import MortalityChart from "../../components/mortalityChart";
import GrowthAnalysis from "../../components/growthAnalysis";
import TableData from "../../components/table";
import WaterActivity from "../../components/waterActivity";

function FeedRate() {
  return (
    <div>
      <div className="grid lg:grid-cols-6 grid-cols-1 mt-[30px] gap-4">
        <div className="lg:col-start-1 lg:col-span-4">
          <WaterActivity />
        </div>
        <div className=" lg:col-start-5 lg:col-span-7">
          <GrowthAnalysis />
        </div>
      </div>
      <TableData url="predict/feed"/>
    </div>
  );
}
export default FeedRate;