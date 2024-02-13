import React from "react";
import ReactApexChart from "react-apexcharts";

function MortalityChart() {
  const state = {
    series: [
      {
        name: "Feed",
        data: [44, 55, 41, 67, 22, 43],
      },
      {
        name: "Weight",
        data: [13, 23, 20, 8, 13, 27],
      },
      {
        name: "Mortality",
        data: [11, 17, 15, 15, 21, 14],
      },
    
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
        show: false, // Set this to false to hide the text labels on the bars
      },      
      colors: ['#F89537', '#DBC754', '#6AC627'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '13%',
          borderRadius: 6,
      
        },grouped: true,

      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
     //   categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],          },

      },
      legend: {
        position: "top",
        
      },
      fill: {
        opacity: 1,
      },
    },
  };
  return (
    <div className='bg-white rounded-[20px] shadow-3xl p-6 mortality'>
        <p className='text-[#041300] text-lg font-medium mb-4'>Growth/Mortality Chart</p>

      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={275}
      />
    </div>
  );
}

export default MortalityChart;
