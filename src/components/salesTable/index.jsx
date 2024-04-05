import React from "react";
function SalesTable() {
  return (
    <div className="overflow-x-auto">
        <p className="text-[#010E1E] font-medium  text-2xl mb-4 mt-6">Fish Sales</p>
      <table class="table-auto min-w-full   rounded-t-xl ">
        <thead className="bg-[#F8F8F8] text-[#003532]  text-left font-semibold text-xs ">
          <tr>
            <th className="py-6 px-8">Order</th>
            <th>#Fishes</th>
            <th>Cost</th>
            <th>Revenue</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody className="text-start text-sm font-medium text-[#033857] ">
          <tr className="border-b border-[#EAECF0] ">
            <td className="py-4 px-8">No. 26</td>
            <td>2332</td>
            <td>$2812</td>
            <td>$7,982</td>
            <td>$5170</td>
          </tr>
          <tr className="border-b border-[#EAECF0] ">
            <td className="py-4 px-8">No. 26</td>
            <td>2332</td>
            <td>$2812</td>
            <td>$7,982</td>
            <td>$5170</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;
