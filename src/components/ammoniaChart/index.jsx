import React, { useState ,useEffect } from 'react'
import ReactApexChart from 'react-apexcharts';
import arrowDown from "../../assets/arrow-down.svg"
import { instance } from "../../networking/baseInstance";
function AmmoniaChart(props) {
const [phLevels,setPhLevels]=useState([])
 const [dissolved,setDissolved]=useState([])
const [actualAmmonia,setActualAmmonia]=useState([])
const [predictedAmmonia,setPredictedAmmonia]=useState([])
const [temp,setTemp]=useState([])
const [dates,setDates]=useState([])
 const startDate=props.startDate
 const endDate=props.endDate
useEffect(() => {
  // GET request
   //instance.get("waterquality/ammonia/chart")
   const farmId = sessionStorage.getItem('farmId');
  instance.get(`waterquality/ammonia/chart?start_date=${startDate}&end_date=${endDate}`)
    .then((response) => {
        setPhLevels(response.data.data.ph);
        setDissolved(response.data.data.do)
        setTemp(response.data.data.temperature)
        setActualAmmonia(response.data.data.actual_ammonia)
        setPredictedAmmonia(response.data.data.predicted_ammonia)
        setDates(response.data.data.date)
       // console.log(response.data.data.date);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}, [startDate,endDate]);


    const state = 
    {
          
      series: [
      //   {
      //   name: 'Actual Ammonia',
      //   data: actualAmmonia
      // },
      {
        name: 'Predicted Ammonia',
        data: predictedAmmonia
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
          colors: ['#F89537', '#DBC754', '#6AC627','#0288D1' ,'#607D8B'],
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
        <p className='text-[#041300] text-lg font-medium'>Ammonia Toxicity Chart</p>
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

export default AmmoniaChart