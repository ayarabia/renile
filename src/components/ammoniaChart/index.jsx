import React from 'react'
import ReactApexChart from 'react-apexcharts';
import arrowDown from "../../assets/arrow-down.svg"
function AmmoniaChart() {
    const state = 
    {
          
        series: [{
          name: 'Temp',
          data: [100, 40, 28, 51, 42, 109, 500]
        }, {
          name: 'PH Levels',
          data: [11, 232, 45, 148, 434, 52, 41]
        },
        {
            name: 'Dissolved Oxygen',
            data: [15, 239, 165, 437, 84, 52, 271]
          }],
        options: {
          chart: {
            height: 350,
            type: 'area',
            zoom: {
                enabled: false
              }
          },
          toolbar: {
            show: false, // Set show to false to hide the toolbar
          },
          colors: ['#F89537', '#DBC754', '#6AC627'],
          dataLabels: {
            enabled: false
          },
         
          stroke: {
            curve: 'smooth'
          },
          legend: {
            position: 'top',
            horizontalAlign: 'left'
          },
         
          xaxis: {
     
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
        },
      
      
      };
  return (
    <div className='bg-white rounded-[20px] shadow-3xl p-6 '>
    <div className='flex justify-between items-center flex-wrap'>
        <p className='text-[#041300] text-lg font-medium'>Ammonia Toxicity Chart</p>
        <div className="relative my-4 md:my-0">
            <img src={arrowDown} alt="arrow" className='absolute end-4 top-4' />
            <select className="z-20 py-2 px-4 bg-white border border-[#D0D5DD] rounded-xl text-lg font-medium w-fit outline-none appearance-none">
                <option className='text-primary ' selected>Monthly</option>
           
            </select>
        </div>
    </div>
<ReactApexChart options={state.options} series={state.series} type="area" height={273} />
</div>
  )
}

export default AmmoniaChart