import React from 'react'
import ReactApexChart from 'react-apexcharts';
import arrowDown from "../../assets/arrow-down.svg"
function WaterActivity() {
    const state = 
    {
          
        series: [{
          name: 'Electricity',
          data: [100, 40, 28, 51, 42, 109, 500]
        }, {
          name: 'Molten Salts',
          data: [11, 232, 45, 148, 434, 52, 41]
        },
        {
            name: 'Dissolved Oxygen',
            data: [15, 239, 165, 437, 84, 52, 271]
          },
          {
            name: 'Water abundance',
            data: [215, 39, 365, 137, 284, 152, 271]
          }, {
            name: 'PH Levels',
            data: [215, 139, 465, 437, 84, 52, 271]
          }, {
            name: 'Salinity',
            data: [115, 539, 365, 437, 84, 52, 271]
          }
        
        
        
        ],
        options: {
          chart: {
            height: 310,
            type: 'area',
            zoom: {
                enabled: false
              }
          },
          colors: ['#01565B', '#FF7A00', '#5ABA8A','#E1F296','#F14F4F','#FF983F'],
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
        <div className='bg-white rounded-[20px] shadow-3xl p-6  '>
        <div className='flex justify-between items-center'>
            <p className='text-[#041300] text-lg font-medium'>Water Quality Activity</p>
            <div className="relative ">
                <img src={arrowDown} alt="arrow" className='absolute end-4 top-4' />
                <select className="z-20 py-2 px-4 bg-white border border-[#D0D5DD] rounded-xl text-lg font-medium w-fit outline-none appearance-none">
                   
                    <option className='text-primary ' selected>Monthly</option>
                    <option>Laravel 9 with React</option>
                    <option>React with Tailwind CSS</option>
                    <option>React With Headless UI</option>
                </select>
            </div>
        </div>
    <ReactApexChart options={state.options} series={state.series} type="area" height={274} />
    </div>
      )
}

export default WaterActivity