
import React, { useEffect } from 'react'
 import question from "../../assets/question.svg";
 import forecast from "../../assets/chart-breakout.svg";
import CustomeButton from '../../components/customeButton';
import AllPonds from '../../components/allPonds';
import { useLocation } from 'react-router-dom';
function Dashboard() {
   const location = useLocation();
    const farmName = location.state?.name  ?? "All Ponds" ;
    // const farmId = location.state?.id  ?? "" ;
   var farm =   sessionStorage.getItem('farmId');
   
  return (

<div>
      <div className=" px-[30px] pt-14 lg:col-start-1 lg:col-span-5 h-screen ">
         {/* <span className="text-[#20563F] block  font-medium text-base -mb-2 ">
             Hello,
           </span> */}
        
           <div className="flex justify-between items-center flex-wrap mb-8">
             <p className="text-[#041300] font-medium text-[32px]">{farmName !==null ?farmName:"All Farms"} </p>
             <div className="flex items-center flex-wrap">
              {/* <button className="md:mx-4 my-4 lg:my-0 flex items-center bg-primary py-2 px-3 rounded-xl text-white shadow-3xl text-base font-semibold">
                 <img src={forecast} alt="Forecast image" className="me-2" />
                 Monitor Your Farm
               </button> */}
               {/* <button className="flex items-center bg-white py-2 px-3 rounded-xl text-primary shadow-3xl text-base font-medium border border-[#D0D5DD] ">
                 <img src={question} alt="add question" className="me-2" />
                 Ask Consultantiii
               </button> */}
            <CustomeButton to="https://renile.net" target="_blank" text="Monitor Your Farm" className="md:ms-4 my-4  lg:my-0 flex items-center bg-primary  rounded-xl text-white shadow-3xl  font-semibold"/>
            <CustomeButton to="https://renile.net" target="_blank" text="Ask Consultant" className="md:ms-4 my-4 me-2  lg:my-0 flex items-center text-primary    rounded-xl  shadow-3xl  font-semibold" />
               <CustomeButton to="/createnewpond" text="Add Pond" className="md:ms-4 my-4  lg:my-0 flex items-center bg-primary  rounded-xl text-white shadow-3xl  font-semibold"/>
            
             </div>
           </div>
      
          <AllPonds farmId={farm}/>
         </div>
       </div>

  )
}

export default Dashboard

// import React from "react";
// import question from "../../assets/question.svg";
// import forecast from "../../assets/chart-breakout.svg";
// import festival from "../../assets/festival.svg";
// import savannah from "../../assets/savannah.svg";
// import ocean from "../../assets/ocean.svg";
// import indicator from "../../assets/indicator.svg";
// import kerala from "../../assets/kerala.svg";
// import stackedArea from "../../assets/stackedArea.svg";
// import fishmortality from "../../assets/fishmortality.svg";
// import fishgrowth from "../../assets/fishgrowth.svg";
// import WaterActivity from "../../components/waterActivity";
// import SalesTable from "../../components/salesTable";
// import CostBreakdown from "../../components/costBreakdown";
// function Dashboard() {
//   const data = [
//     { image: savannah, title: "Temperature", value: "22 Cْ", time: "2m ago" },
//     { image: festival, title: "PH Levels", value: "25%", time: "2m ago" },
//     { image: ocean, title: "Dissolved Oxygen", value: "25%", time: "2m ago" },
//   ];
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-7  gap-4">
//       <div className=" ps-[30px] pe-3  lg:col-start-1 lg:col-span-5 ">
//         <span className="text-[#20563F] block pt-[37px] font-medium text-base -mb-2 ">
//           Hello,
//         </span>
//         <div className="flex justify-between items-center flex-wrap">
//           <p className="text-[#041300] font-medium text-[32px]">Green Farm</p>
//           <div className="flex items-center flex-wrap">
//             <button className="flex items-center bg-white py-2 px-3 rounded-xl text-primary shadow-3xl text-base font-medium border border-[#D0D5DD] ">
//               <img src={question} alt="add question" className="me-2" />
//               Ask Consultant
//             </button>
//             <button className="md:ms-4 my-4 lg:my-0 flex items-center bg-primary py-2 px-3 rounded-xl text-white shadow-3xl text-base font-semibold">
//               <img src={forecast} alt="Forecast image" className="me-2" />
//               Manual Update
//             </button>
//           </div>
//         </div>
//         <div className="grid md:grid-cols-6 grid-cols-1 mt-4 gap-4">
//           <div className="md:col-start-1 md:col-span-4">
//             <WaterActivity />
//             <div className="text-[#20563F] flex items-center flex-wrap  italic rounded-2xl gradient shadow-3xl  py-2 pe-4 ps-[38px] text-lg font-semibold mt-5 ">
//               <p className="mb-3 md:mb-0"> Ammonia Toxicity 85 ppm</p>
//               <div className="flex items-center">
//                 <img src={indicator} alt="indicator" className="mx-2" />
//                 <span className="text-[#04CE00]">-0.6%</span>
//               </div>
//             </div>
//           </div>
//           <div className=" md:col-start-5 md:col-span-7">
//             {data.map((item) => {
//               return (
//                 <div
//                   className="bg-white  py-6 mb-4 px-5 rounded-[20px] shadow-3xl flex items-center  "
//                   key={item.title}
//                 >
//                   <img
//                     src={item.image}
//                     alt="image"
//                     className="w-[48px] h-[48px] block me-4   rounded-full"
//                   />
//                   <div className="flex-grow">
//                     <p className="text-[#5C7CAF] font-normal text-xs mb-2">
//                       {item.title}
//                     </p>
//                     <div className="flex items-center justify-between ">
//                       <p className="text-base font-semibold me-8">
//                         {item.value}
//                       </p>
//                       <p className="text-[#999] font-normal text-[10px]">
//                         {item.time}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         <div className="grid md:grid-cols-6  grid-cols-1 mt-4 gap-4">
//           <div className="md:col-start-1 md:col-span-4">
//             <SalesTable />
//           </div>
//           <div className=" md:col-start-5 md:col-span-7">
//             <CostBreakdown />
//           </div>
//         </div>
//       </div>
//       <div className="lg:col-start-6 lg:col-span-7 ">
//         <img
//           src={kerala}
//           alt="image"
//           className="w-full h-[455px] hidden lg:block"
//         />
//         <img
//           src={stackedArea}
//           alt="image"
//           className="w-full -mt-[240px] hidden lg:block"
//         />
//         <div className="bg-[#153040] lg:pb-20 flex-grow px-8   lg:pt-0 pt-16     text-white lg:-mt-48">
//           <p className="md:text-xl text-base font-medium mb-2 ">
//             Average Fish Weight
//           </p>
//           <p className=" md:text-lg text-base md:font-bold  font-medium flex mb-14">
//             400Kg
//             <img src={indicator} alt="indicator" className="ms-3 me-2" />
//             <span>+1.3%</span>
//           </p>
//           <div className=" shadow-3xl flex items-center pb-6 border-b border-[#343E47]  ">
//             <img
//               src={fishgrowth}
//               alt="image"
//               className="w-[56px] h-[56px] block me-6  rounded-xl"
//             />
//             <div>
//               <p className="md:font-semibold font-medium text-sm md:text-base mb-2">
//                 Fish Growth Rate
//               </p>

//               <p className="text-base font-normal me-8 bg-[#1F3B4C] rounded-[300px] w-fit px-4 ">
//                 +36%
//               </p>
//             </div>
//           </div>
//           <div className=" shadow-3xl flex items-center py-6 border-b border-[#343E47]  ">
//             <img
//               src={fishmortality}
//               alt="image"
//               className="w-[56px] h-[56px] block me-6  rounded-xl"
//             />
//             <div>
//               <p className="md:font-semibold font-medium text-sm md:text-base mb-2">
//                 Fish Growth Rate
//               </p>

//               <p className="text-base font-normal me-8 bg-[#1F3B4C] rounded-[300px] w-fit px-4 ">
//                 +36%
//               </p>
//             </div>
//           </div>
//           <p></p>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Dashboard;