import{j as e}from"./index-GXZR3gQi.js";import{_ as t}from"./react-apexcharts.min-3tuCGLSk.js";import{a as s}from"./arrow-down-6s8fqfZ3.js";function n(){const a={series:[{name:"Electricity",data:[100,40,28,51,42,109,500]},{name:"Molten Salts",data:[11,232,45,148,434,52,41]},{name:"Dissolved Oxygen",data:[15,239,165,437,84,52,271]},{name:"Water abundance",data:[215,39,365,137,284,152,271]},{name:"PH Levels",data:[215,139,465,437,84,52,271]},{name:"Salinity",data:[115,539,365,437,84,52,271]}],options:{chart:{height:310,type:"area",zoom:{enabled:!1}},colors:["#01565B","#FF7A00","#5ABA8A","#E1F296","#F14F4F","#FF983F"],dataLabels:{enabled:!1},stroke:{curve:"smooth"},legend:{position:"top",horizontalAlign:"left"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}}}};return e.jsxs("div",{className:"bg-white rounded-[20px] shadow-3xl p-6  ",children:[e.jsxs("div",{className:"flex justify-between items-center flex-wrap",children:[e.jsx("p",{className:"text-[#041300] text-lg font-medium",children:"Water Quality Activity"}),e.jsxs("div",{className:"relative  my-4 md:my-0 ",children:[e.jsx("img",{src:s,alt:"arrow",className:"absolute end-[1px] top-[13px]"}),e.jsx("select",{className:"z-20 py-2 ps-2 pe-4 bg-white border border-[#D0D5DD] rounded-xl text-base font-medium  outline-none appearance-none",children:e.jsx("option",{className:"text-primary ",selected:!0,children:"Monthly"})})]})]}),e.jsx(t,{options:a.options,series:a.series,type:"area",height:274})]})}export{n as W};
