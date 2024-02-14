import React from "react";
import AmmoniaChart from "../../components/ammoniaChart";
import AmmoniaAnalysis from "../../components/ammoniaAnalysis";
import TableData from "../../components/table";

function Ammonia() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-6  mt-[30px] gap-4">
        <div className="lg:col-start-1 lg:col-span-4">
          <AmmoniaChart />
        </div>
        <div className="lg:col-start-5 lg:col-span-7">
          <AmmoniaAnalysis />
        </div>
      </div>
      <TableData/>
    </div>
  );
}

export default Ammonia;
