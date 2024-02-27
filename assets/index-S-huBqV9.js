import{r as i,i as y,j as e}from"./index-rw0F91Ua.js";import{_ as O}from"./react-apexcharts.min-if_qc7C2.js";import{f as C}from"./filter-4UfVbWB8.js";import{f as E,P as W,F as T,M as B,a as L}from"./table-KeYeWRiI.js";import{Q as M,B as j}from"./ReactToastify-rLLV0sG1.js";function H(){const[r,c]=i.useState([]),[u,p]=i.useState([]),[x,m]=i.useState([]),[o,l]=i.useState([]),[b,v]=i.useState([]),[N,g]=i.useState([]);i.useEffect(()=>{y.get("waterquality/weight/chart").then(d=>{c(d.data.data.ph),p(d.data.data.do),l(d.data.data.temperature),m(d.data.data.ammonia),v(d.data.data.predicted_weight),g(d.data.data.date),console.log(d.data.data)}).catch(d=>{console.error("Error fetching data:",d)})},[]);const h={series:[{name:"Predicted Weight",data:b},{name:"Ammonia",data:x},{name:"Temp",data:o},{name:"PH Levels",data:r},{name:"Dissolved Oxygen",data:u}],options:{chart:{height:350,type:"area",zoom:{enabled:!1}},toolbar:{show:!1},colors:["#F89537","#DBC754","#6AC627"],dataLabels:{enabled:!1},stroke:{curve:"smooth"},legend:{position:"top",horizontalAlign:"left"},xaxis:{categories:N},tooltip:{x:{format:"dd/MM/yy HH:mm"}}}};return e.jsxs("div",{className:"bg-white rounded-[20px] shadow-3xl p-6 ",children:[e.jsx("div",{className:"flex justify-between items-center flex-wrap",children:e.jsx("p",{className:"text-[#041300] text-lg font-medium",children:"Growth/Mortality Chart"})}),e.jsx(O,{options:h.options,series:h.series,type:"area",height:273})]})}function q(r){const c=r.columns,[u,p]=i.useState(),[x,m]=i.useState(!1),[o,l]=i.useState([]);i.useEffect(()=>{y.get(r.tableDataUrl).then(t=>{l(t.data.data)}).catch(t=>{console.error("Error fetching data:",t)})},[]);const b=t=>{const s=o.map(a=>a===t?{...a,editing:!0}:a);l(s)},v=t=>{const s=o.map(a=>a===t?{...a,editing:!1}:a);l(s)},N=t=>{const s=[...o];s.splice(t,1),l(s)},g=r.startDate,h=r.endDate,d=o.filter(t=>{const s=new Date(t.date),a=g!==""?new Date(g):null,n=h!==""?new Date(h):null;return!(a&&s<a||n&&s>n)}),[f,w]=i.useState({date:"",dissolved_oxygen:"",ph:"",temperature:""}),[P,D]=i.useState(!1),R=()=>{D(!0)},S=()=>{w({date:"",dissolved_oxygen:"",ph:"",temperature:""}),D(!1),m(!1)},A=t=>{const s=r.url;console.log(s),y.post(s,t).then(a=>{console.log(a.data.result),j.success(a.data.message,{position:"top-right",autoClose:4e3,hideProgressBar:!1,closeOnClick:!0}),p(a.data.result),m(!0)}).catch(a=>{j.error(a.response.data.message,{position:"top-right",autoClose:4e3,hideProgressBar:!1,closeOnClick:!0})})},F=()=>{A(f)},_=t=>{y.post("waterquality",t).then(s=>{console.log(s.data.result),j.success(s.data.message,{position:"top-right",autoClose:4e3,hideProgressBar:!1,closeOnClick:!0})}).catch(s=>{j.error(s.response.data.message,{position:"top-right",autoClose:4e3,hideProgressBar:!1,closeOnClick:!0})})},k=()=>{_(f),l([...o,f]),w({date:"",dissolved_oxygen:"",ph:"",temperature:""}),D(!1),m(!1)};return e.jsxs("div",{className:"bg-white rounded-[20px] shadow-3xl px-6 py-8 mt-8 ",children:[e.jsxs("div",{className:"flex justify-between items-center flex-wrap",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[#121811] font-medium text-2xl mb-2",children:"Weight Toxicity Data"}),e.jsx("p",{className:"text-[#646464] text-xs font-normal",children:"Forecast Weight Toxicity data for the next months."})]}),e.jsx("div",{className:"lg:flex items-center justify-end lg:mt-0 mt-4 ",children:e.jsxs("button",{onClick:R,className:" flex items-center bg-primary py-2 px-3 rounded-xl text-white shadow-3xl text-base font-semibold",children:[e.jsx("img",{src:E,alt:"Forecast image",className:"me-2"}),"Forecast Data"]})}),e.jsx(W,{isOpen:P,onClose:S,addRow:k,setNewRow:w,data:f,amount:u,showAmmoniaAmount:x,getAmount:F,text:r.text}),e.jsx(M,{})]}),e.jsx("div",{className:"overflow-x-auto tableData w-full shadow-3xl mt-12",children:e.jsxs("table",{children:[e.jsx("thead",{className:"bg-[#F8F8F8] text-[#041300]  text-left rounded-t-lg font-medium text-xs ",children:e.jsxs("tr",{children:[c==null?void 0:c.map(t=>e.jsx("th",{className:"py-6 px-8",children:t},t)),e.jsx("th",{className:"py-6 px-8",children:"Action"})]})}),e.jsx("tbody",{className:" text-left ",children:d.map((t,s)=>e.jsxs("tr",{children:[!t.editing&&e.jsx("td",{className:"py-6 px-8",children:t.date}),!t.editing&&e.jsx("td",{className:"py-6 px-8",children:t.ph}),!t.editing&&e.jsx("td",{className:"py-6 px-8",children:t.dissolved_oxygen}),!t.editing&&e.jsx("td",{className:"py-6 px-8",children:t.temperature}),!t.editing&&e.jsx("td",{className:"py-6 px-8",children:t.ammonia}),!t.editing&&e.jsx("td",{className:"py-6 px-8",children:t.predicted_weight}),t.editing&&e.jsx("td",{className:"py-6 ps-8",children:e.jsx("input",{type:"text",value:t.date,onChange:a=>{const n=[...o];n[s].date=a.target.value,l(n)}})}),t.editing&&e.jsx("td",{className:"py-6 ps-8",children:e.jsx("input",{type:"number",value:t.ph,onChange:a=>{const n=[...o];n[s].ph=a.target.value,l(n)}})}),t.editing&&e.jsx("td",{className:"py-6 ps-8",children:e.jsx("input",{type:"number",value:t.dissolved_oxygen,onChange:a=>{const n=[...o];n[s].dissolved_oxygen=a.target.value,l(n)}})}),t.editing&&e.jsx("td",{className:"py-6 px-8",children:e.jsx("input",{type:"number",value:t.temperature,onChange:a=>{const n=[...o];n[s].temperature=a.target.value,l(n)}})}),t.editing&&e.jsx("td",{className:"py-6 px-8",children:e.jsx("input",{type:"number",value:t.ammonia,onChange:a=>{const n=[...o];n[s].ammonia=a.target.value,l(n)}})}),t.editing&&e.jsx("td",{className:"py-6 px-8",children:e.jsx("input",{type:"number",value:t.predicted_weight,onChange:a=>{const n=[...o];n[s].predicted_weight=a.target.value,l(n)}})}),e.jsxs("td",{children:[!t.editing&&e.jsx("button",{className:"edit-button",onClick:()=>b(t),children:e.jsx(T,{})}),t.editing&&e.jsx("button",{className:"save-button",onClick:()=>v(t),children:e.jsx(B,{})}),e.jsx("button",{className:"delete-button",onClick:()=>N(s),children:e.jsx(L,{})})]})]},s))})]})})]})}function J(){const r=["Date","PH Levels","Dissolved Oxygen","Temperature","Ammonia","Predicted Weight"],[c,u]=i.useState(!0),[p,x]=i.useState(""),[m,o]=i.useState("");return e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center lg:justify-end lg:mt-0 mt-4 flex-wrap lg:mb-10 ",children:[e.jsxs("div",{className:"flex items-center relative mb-4 lg:mb-0 bg-white py-2 px-3 rounded-xl text-primary shadow-3xl text-base font-medium border border-[#D0D5DD]  ",children:[e.jsx("img",{src:C,alt:"filtaration",className:"me-2"}),e.jsx("span",{className:"ms-2 bg-transparnt whitespace-nowrap  text-primary  text-base font-normal",children:c?"start date":p}),e.jsx("input",{type:"date",name:"date",value:p,onChange:l=>{x(l.target.value),u(!1)},className:"bg-transparnt w-full  placeholder: text-primary  text-base font-normal"})]}),e.jsxs("div",{className:"flex lg:ms-3 items-center relative mb-4 lg:mb-0 bg-white py-2 px-3 rounded-xl text-primary shadow-3xl text-base font-medium border border-[#D0D5DD]  ",children:[e.jsx("img",{src:C,alt:"filtaration",className:"me-2"}),e.jsx("span",{className:"ms-2 bg-transparnt whitespace-nowrap  text-primary  text-base font-normal",children:c?"end date":m}),e.jsx("input",{type:"date",name:"date",value:m,onChange:l=>{o(l.target.value),u(!1)},className:"bg-transparnt w-full placeholder: text-primary  text-base font-normal"})]})]}),e.jsx(H,{}),e.jsx(q,{text:"Predicted Weight",url:"predict/weight",columns:r,tableDataUrl:"waterquality/weight/table"})]})}export{J as default};
