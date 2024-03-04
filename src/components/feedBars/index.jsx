


import React , { useState ,useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { instance } from "../../networking/baseInstance";
function FeedBars(props) {
    const [feedRate,setFeedRate]=useState([])
    const [ponds,setPonds]=useState([])
    const startDate=props.startDate
    const endDate=props.endDate
    const pondId=props.pondid
    useEffect(() => {
      // GET request
      instance.get(`feed/barchart?start_date=${startDate}&end_date=${endDate}&pond=${pondId}`)
       //instance.get("waterquality/weight/chart")
    .then((response) => {
            setFeedRate(response.data.data.average_feed_rate);
            setPonds(response.data.data.ponds)
           console.log(response.data.data.ponds);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },[startDate,endDate,pondId]);
  const state = {
    series: [
      {
        name: "Feed Rate",
        data:feedRate,
      }
    
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
        categories: ponds
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
        <p className='text-[#041300] text-lg font-medium mb-4'>Feed Chart</p>

      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={257}
      />
    </div>
  );
}

export default FeedBars;
