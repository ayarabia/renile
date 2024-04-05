import React from "react";
import Chart from "react-apexcharts";
function AmmoniaAnalysis() {
  const pHState = {
    chart: {
      height: 178, // Set the height of the chart
      type: "radialBar",
    },
    series: [46], // Sample data
    labels: [""],
    colors: ["#589130"],
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
      },
    },
  };
  const oxygenState = {
    chart: {
      height: 178, // Set the height of the chart
      type: "radialBar",
    },
    series: [74], // Sample data
    labels: [""],
    colors: ["#589130"],
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
      },
    },
  };

  const temperatureState = {
    chart: {
      // Set the width of the chart
      height: 178, // Set the height of the chart
      type: "radialBar",
    },
    series: [14], // Sample data
    labels: [""],
    colors: ["#589130"],
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-[20px] shadow-3xl p-6   ">
      <p className="text-[#041300] text-lg font-medium">
        Ammonia Toxicity Analysis
      </p>
      <p className="text-[#041300] text-xs font-normal mt-2.5 mb-[30px]">
        Show data: <span className="text-primary">2018 - 2019</span>
      </p>
      <div className="lg:flex items-center  ">
        <div className="flex flex-col items-center justify-center md:w-[33.33%] mx-auto" >
          <Chart
            options={pHState}
            series={pHState.series}
            type={pHState.chart.type}
            height={pHState.chart.height}
          />
          <p className="text-xs text-[#041300] font-medium italic ">
            PH Levels
          </p>
        </div>

        <div className="flex flex-col items-center justify-center  md:w-[33.33%] mx-auto" >
          <Chart
            options={oxygenState}
            series={oxygenState.series}
            type={oxygenState.chart.type}
            height={oxygenState.chart.height}
          />
          <p className="text-xs text-[#041300] font-medium italic ">
            Dissolved Oxygen
          </p>
        </div>
        <div className="flex flex-col items-center justify-center  md:w-[33.33%] mx-auto" >
          <Chart
            options={temperatureState}
            series={temperatureState.series}
            type={temperatureState.chart.type}
            height={temperatureState.chart.height}
          />
          <p className="text-xs text-[#041300] font-medium italic ">
            Temperature
          </p>
        </div>
      </div>
      <p className="text-center text-[#999] font-normal text-xs mt-4 mb-2">
      Lorem ipsum dolor sit amet consectetur. Amet odio erat urna feugiat elementum. 
      </p>
      <p className="text-[#20563F] italic font-medium  text-base">Ammonia Toxicity 85 ppm <span className="text-[#04CE00]">-0.6%</span></p>
    </div>
  );
}

export default AmmoniaAnalysis;
