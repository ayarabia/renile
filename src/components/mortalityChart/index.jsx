
import React, { useState ,useEffect } from 'react'
import ReactApexChart from 'react-apexcharts';
import arrowDown from "../../assets/arrow-down.svg"
import { instance } from "../../networking/baseInstance";
function MortalityChart(props) {
  const [phLevels,setPhLevels]=useState([])
 const [dissolved,setDissolved]=useState([])
const [ammonia,setAmmonia]=useState([])
const [temp,setTemp]=useState([])
 const [weight,setWeight]=useState([])
const [dates,setDates]=useState([])
const startDate=props.startDate
const endDate=props.startDate
useEffect(() => {
  // GET request
    // console.log(`waterquality/weight/chart?${startDate}=&${endDate}=`);
  // instance.get(`waterquality/weight/chart?${startDate}=&${endDate}=`)
   instance.get("waterquality/weight/chart")
.then((response) => {
      setPhLevels(response.data.data.ph);
      setDissolved(response.data.data.do)
      setTemp(response.data.data.temperature)
      setAmmonia(response.data.data.ammonia)
        setWeight(response.data.data.predicted_weight )
         setDates(response.data.data.date)
        console.log(response.data.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}, []);
    const state = 
    {
          
      series: [{
        name: 'Predicted Weight',
        data: weight
      },{
        name: 'Ammonia',
        data: ammonia
      },{
        name: 'Temp',
        data: temp
      }, {
        name: 'PH Levels',
        data:phLevels
      },
      {
          name: 'Dissolved Oxygen',
          data: dissolved
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
        categories:dates,  },
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
        <p className='text-[#041300] text-lg font-medium'>Growth/Mortality Chart</p>
        {/* <div className="relative my-4 md:my-0">
            <img src={arrowDown} alt="arrow" className='absolute end-4 top-4' />
            <select className="z-20 py-2 px-4 bg-white border border-[#D0D5DD] rounded-xl text-lg font-medium w-fit outline-none appearance-none">
                <option className='text-primary ' selected>Monthly</option>
           
            </select>
        </div> */}
    </div>
<ReactApexChart options={state.options} series={state.series} type="area" height={273} />
</div>
  )
}

export default MortalityChart







// import React from "react";
// import ReactApexChart from "react-apexcharts";

// function MortalityChart() {
//   const state = {
//     series: [
//       {
//         name: "Feed",
//         data: [44, 55, 41, 67, 22, 43],
//       },
//       {
//         name: "Weight",
//         data: [13, 23, 20, 8, 13, 27],
//       },
//       {
//         name: "Mortality",
//         data: [11, 17, 15, 15, 21, 14],
//       },
    
//     ],
//     options: {
//       chart: {
//         type: "bar",
//         height: 350,
//         stacked: true,
//         toolbar: {
//           show: true,
//         },
//         zoom: {
//           enabled: true,
//         },
//       },
//       dataLabels: {
//         enabled: false,
//         show: false, // Set this to false to hide the text labels on the bars
//       },      
//       colors: ['#F89537', '#DBC754', '#6AC627'],
//       responsive: [
//         {
//           breakpoint: 480,
//           options: {
//             legend: {
//               position: "bottom",
//               offsetX: -10,
//               offsetY: 0,
//             },
//           },
//         },
//       ],
//       plotOptions: {
//         bar: {
//           horizontal: false,
//           columnWidth: '13%',
//           borderRadius: 6,
      
//         },grouped: true,

//       },
//       xaxis: {
//         categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//      //   categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],          },

//       },
//       legend: {
//         position: "top",
        
//       },
//       fill: {
//         opacity: 1,
//       },
//     },
//   };
//   return (
//     <div className='bg-white rounded-[20px] shadow-3xl p-6 mortality'>
//         <p className='text-[#041300] text-lg font-medium mb-4'>Growth/Mortality Chart</p>

//       <ReactApexChart
//         options={state.options}
//         series={state.series}
//         type="bar"
//         height={275}
//       />
//     </div>
//   );
// }

// export default MortalityChart;
