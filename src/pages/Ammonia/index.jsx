import React from "react";
import AmmoniaChart from "../../components/ammoniaChart";
import AmmoniaAnalysis from "../../components/ammoniaAnalysis";
import TableData from "../../components/table";

function Ammonia() {
  return (
    <div>
      <div className="grid grid-cols-6 mt-[30px] gap-4">
        <div className="col-start-1 col-span-4">
          <AmmoniaChart />
        </div>
        <div className="col-start-5 col-span-7">
          <AmmoniaAnalysis />
        </div>
      </div>
      <TableData/>
    </div>
  );
}

export default Ammonia;
