import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import arrowDown from "../../assets/arrow-down.svg";
import { instance } from "../../networking/baseInstance";
function WaterActivity(props) {
  const [phLevels, setPhLevels] = useState([]);
  const [dissolved, setDissolved] = useState([]);
  const [ammonia, setAmmonia] = useState([]);
  const [temp, setTemp] = useState([]);
  const [weight, setWeight] = useState([]);
  const [feed, setFeed] = useState([]);
  const [dates, setDates] = useState([]);
  const startDate=props.startDate
  const endDate=props.endDate
  useEffect(() => {
    // GET request
    //instance.get("waterquality/feed/chart")
    instance.get(`waterquality/feed/chart?start_date=${startDate}&end_date=${endDate}`)
      .then((response) => {
        setPhLevels(response.data.data.ph);
        setDissolved(response.data.data.do);
        setTemp(response.data.data.temperature);
        setAmmonia(response.data.data.ammonia);
        setWeight(response.data.data.weight);
        setFeed(response.data.data.predicted_feed);
        setDates(response.data.data.date);
       // console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [startDate,endDate]);
  const state = {
    series: [ {
      name: "Predicted feed",
      data: feed,
    },
      {
        name: "Weight",
        data: weight,
      },
      {
        name: "Ammonia",
        data: ammonia,
      },
      {
        name: "Temp",
        data: temp,
      },
      {
        name: "PH Levels",
        data: phLevels,
      },
      {
        name: "Dissolved Oxygen",
        data: dissolved,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        zoom: {
          enabled: false,
        },
      },
      toolbar: {
        show: false, // Set show to false to hide the toolbar
      },
      colors: ["#F89537", "#DBC754", "#6AC627"],
      dataLabels: {
        enabled: false,
      },

      stroke: {
        curve: "smooth",
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
      },

      xaxis: {
        categories: dates,
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };
  return (
    <div className="bg-white rounded-[20px] shadow-3xl p-6 ">
      <div className="flex justify-between items-center flex-wrap">
        <p className="text-[#041300] text-lg font-medium">
        Water Quality Activity
        </p>
        {/* <div className="relative my-4 md:my-0">
          <img src={arrowDown} alt="arrow" className="absolute end-4 top-4" />
          <select className="z-20 py-2 px-4 bg-white border border-[#D0D5DD] rounded-xl text-lg font-medium w-fit outline-none appearance-none">
            <option className="text-primary " selected>
              Monthly
            </option>
          </select>
        </div> */}
      </div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={273}
      />
    </div>
  );
}

export default WaterActivity;

// import React from 'react'
// import ReactApexChart from 'react-apexcharts';
// import arrowDown from "../../assets/arrow-down.svg"
// function WaterActivity() {
//     const state =
//     {

//         series: [{
//           name: 'Electricity',
//           data: [100, 40, 28, 51, 42, 109, 500]
//         }, {
//           name: 'Molten Salts',
//           data: [11, 232, 45, 148, 434, 52, 41]
//         },
//         {
//             name: 'Dissolved Oxygen',
//             data: [15, 239, 165, 437, 84, 52, 271]
//           },
//           {
//             name: 'Water abundance',
//             data: [215, 39, 365, 137, 284, 152, 271]
//           }, {
//             name: 'PH Levels',
//             data: [215, 139, 465, 437, 84, 52, 271]
//           }, {
//             name: 'Salinity',
//             data: [115, 539, 365, 437, 84, 52, 271]
//           }

//         ],
//         options: {
//           chart: {
//             height: 310,
//             type: 'area',
//             zoom: {
//                 enabled: false
//               }
//           },
//           colors: ['#01565B', '#FF7A00', '#5ABA8A','#E1F296','#F14F4F','#FF983F'],
//           dataLabels: {
//             enabled: false
//           },

//           stroke: {
//             curve: 'smooth'
//           },
//           legend: {
//             position: 'top',
//             horizontalAlign: 'left'
//           },
//           xaxis: {
//             categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],          },
//           tooltip: {
//             x: {
//               format: 'dd/MM/yy HH:mm'
//             },
//           },
//         },

//       };
//     return (
//         <div className='bg-white rounded-[20px] shadow-3xl p-6  '>
//         <div className='flex justify-between items-center flex-wrap'>
//             <p className='text-[#041300] text-lg font-medium'>Water Quality Activity</p>
//             <div className="relative  my-4 md:my-0 ">
//                 <img src={arrowDown} alt="arrow" className='absolute end-[1px] top-[13px]' />
//                 <select className="z-20 py-2 ps-2 pe-4 bg-white border border-[#D0D5DD] rounded-xl text-base font-medium  outline-none appearance-none">
//                    <option className='text-primary ' selected>Monthly</option>
//                 </select>
//             </div>
//         </div>
//     <ReactApexChart options={state.options} series={state.series} type="area" height={274} />
//     </div>
//       )
// }

// export default WaterActivity
