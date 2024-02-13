import React from "react";
import filter from "../../assets/filter.svg";
import forecast from "../../assets/chart-breakout.svg";
function TableData(props) {
  return (
    <div className="bg-white rounded-[20px] shadow-3xl px-6 py-8 mt-8">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[#121811] font-medium text-2xl mb-2">
            Ammonia Toxicity Data
          </p>
          <p className="text-[#646464] text-xs font-normal">
            Forecast Ammonia Toxicity data for the next months.
          </p>
        </div>
        <div className="flex items-center">
          <button className="flex items-center bg-white py-2 px-3 rounded-xl text-primary shadow-3xl text-base font-medium border border-[#D0D5DD] ">
            <img src={filter} alt="filtaration" className="me-2" />
            Filter
          </button>
          <button className="ms-4 flex items-center bg-primary py-2 px-3 rounded-xl text-white shadow-3xl text-base font-semibold">
            <img src={forecast} alt="Forecast image" className="me-2" />
            Forecast Data
          </button>
        </div>
      </div>
      <table class="table-auto w-full mt-[34px] ">
  <thead className="bg-[#F8F8F8] text-[#041300]  text-left rounded-t-lg font-medium text-xs ">
    <tr>
      <th className="py-6 px-8">Date</th>
      <th>Dissolved Oxygen</th>
      <th>PH Levels</th>
      <th>Temperature</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody className="text-start text-sm font-normal ">
    <tr className="border-b border-[#EAECF0] ">
      <td className="py-4 px-8">Jan 6, 2022</td>
      <td>5.3%</td>
      <td>2.1%</td>
      <td className="text-[#F14F4F]">32ْ</td>
      <td>....</td>
    </tr>
   
    <tr className="border-b border-[#EAECF0] ">
      <td className="py-4 px-8">Jan 6, 2022</td>
      <td>5.3%</td>
      <td>2.1%</td>
      <td className="text-[#F14F4F]">32ْ</td>
      <td>....</td>
    </tr>
  </tbody>
</table>
    </div>
  );
}

export default TableData;
