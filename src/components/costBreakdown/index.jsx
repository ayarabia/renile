import React from 'react'
import ReactApexChart from "react-apexcharts";
function CostBreakdown() {
    const state = {
        series: [50, 20, 12, 17],
        options: {
          chart: {
            type: 'donut',
          },
          colors:["#F89537","#DBC754","#BBE05C","#6AC627"],
          labels:["Feed","Labor","Utilities","Equipment"],
          dataLabels: {
            enabled: false,
            show: false, // Set this to false to hide the text labels on the bars
          },  
          legend: {
            position: 'bottom',
           labels: {
                colors: ['#fff' ,'#fff','#fff','#fff'], // Set the text color of the legend
                fontSize: '12px',
                fontWeight: 'bold',
              },
          },
        
        },
      
      
      };


  return (
    <div className='rounded-[20px] shadow-3xl pt-3 pb-4 flex flex-col items-center md:px-[30px] relative' style={{background:` linear-gradient(33deg, #006263 -12.71%, rgba(3, 101, 100, 0.70) 100%, rgba(0, 103, 102, 0.70) 100%)`

    }}>
        <p className='text-white text-center text-xl font-medium '>Cost Breakdown</p>
        {/* <div className='w-[100px] h-[100px] bg-white hidden lg:flex rounded-full absolute inset-[29%] text-xl font-medium   justify-center items-center'>
        $40,000
        </div> */}
        <ReactApexChart options={state.options} series={state.series} type="donut" />

    </div>
  )
}

export default CostBreakdown