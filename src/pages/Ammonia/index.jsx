import React ,{ useState ,useEffect } from "react";
import AmmoniaChart from "../../components/ammoniaChart";
import AmmoniaTable from "../../components/ammoniaTable";
import filter from "../../assets/filter.svg";
import { instance } from "../../networking/baseInstance";


function Ammonia() {
 
  const columns=[{key:"Date",value:"date"},{key:"PH Levels",value:"ph"},
  {key:"Dissolved oxygen",value:"dissolved_oxygen"},{key:"temperature",value:"temperature"},{key:"Predicted Ammonia",value:"predicted_ammonia"},{key:"Actual Ammonia",value:"actual_ammonia"}]

  // const columns=["Date","PH Levels","Dissolved Oxygen","Temperature" ,"Predicted Ammonia","Actual Ammonia"]
  const [notes,setNotes]=useState([])
  const [ponds,setPonds]=useState([])
  const today = new Date().toISOString().split("T")[0];
  const [showPlacholder, setShowPlacholder] = useState(true);
   const [startDate, setStartDate] = useState("");
   const [endDate, setEndDate] = useState("");
   const [pondId,setPondId]=useState("")
    const[farm,setFarm]=useState("")
  
  const fetchPonds=()=>{
    const farmId = sessionStorage.getItem('farmId');
    if (farmId!==null) {
      setFarm(farmId)
    }
    instance
      .get(`pond?farm=${farmId}`)
      .then((response) => {
        setPonds(response.data.results);
        // console.log(response.data.results);
        
      })
      .catch((error) => {
         console.error("Error fetching data:", error);
      });
  }
  useEffect(() => {
    fetchPonds()
}, []);
  useEffect(()=>{
    const farmId = sessionStorage.getItem('farmId');
    if (farmId!==null) {
      setFarm(farmId)
    }
   instance
.get( `ammonia/notes?farm=${farm}&pond=${pondId}&start_date=${startDate}&end_date=${endDate}`)

        .then((response) => {
        setNotes(response.data.data);
        //  console.log(response.data.data);
        
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
  
  },[startDate,endDate,pondId,farm])
  
 

   const handelSelectId=(e)=>{
    setPondId(e.target.value)
  }
  return (
    <div>
      {/* <div className="grid grid-cols-1 lg:grid-cols-6  mt-[30px] gap-4">
        <div className="lg:col-start-1 lg:col-span-4">
          <AmmoniaChart />
        </div>
        <div className="lg:col-start-5 lg:col-span-7">
          <AmmoniaAnalysis />
        </div>
      </div> */}
          <div className="flex items-center lg:justify-end lg:mt-0 mt-4 flex-wrap lg:mb-10 ">
          <div className="flex items-center relative mb-4 lg:mb-0 bg-white py-2 px-3 rounded-xl text-primary shadow-3xl text-base font-medium border border-[#D0D5DD]  ">
            <img src={filter} alt="filtaration" className="me-2" />
            <span className="ms-2 bg-transparnt whitespace-nowrap  text-primary  text-base font-normal">
              {showPlacholder ? "start date" : startDate}
            </span>
            <input
              type="date"
              name="date"
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value);
                setShowPlacholder(false);
              }}
              className="bg-transparnt w-full z-20 placeholder: text-primary  text-base font-normal"
            />
          </div>
          <div className="flex lg:ms-3 items-center relative mb-4 lg:mb-0 bg-white py-2 px-3 rounded-xl text-primary shadow-3xl text-base font-medium border border-[#D0D5DD]  ">
            <img src={filter} alt="filtaration" className="me-2" />
            <span className="ms-2 bg-transparnt whitespace-nowrap  text-primary  text-base font-normal">
              {showPlacholder ? "end date" : endDate}
            </span>
            <input
              type="date"
              name="date"
              value={endDate}
              onChange={(e) => {
                setEndDate(e.target.value);
                setShowPlacholder(false);
              }}
              className="bg-transparnt z-20  w-full placeholder: text-primary  text-base font-normal"
            />
          </div>
        </div>
        <div className="relative my-4  md:my-0 ">
            {/* <img src={arrowDown} alt="arrow" className='absolute end-4 top-4' /> */}
            <select onChange={(e)=>{handelSelectId(e)}} className="z-20 py-2 px-4 bg-white border border-[#D0D5DD] rounded-xl text-lg font-medium w-fit outline-none appearance-none">
                <option className='text-primary text-[14px] ' value="">All Ponds</option>
           {ponds.map((item)=>{
               return( <option  className='text-primary ' key={item.id} value={item.id} >{item.name}</option>)
           })}
            </select>
        </div>
      <div className="mt-[30px]">
      <AmmoniaChart startDate={startDate} endDate={endDate} pondid={pondId}/>
      </div>
        {notes.length >0 ?( <div className="text-[#20563F]  italic rounded-2xl gradient shadow-3xl  py-2 pe-4 ps-[38px] text-lg font-semibold mt-5 ">
       { notes.map((item)=>{
            return(  <p className="mb-3 md:mb-0" key={item}>{item}</p>)
          })   } </div>):null}
        <AmmoniaTable text="Predicted Toxic Ammonia" url="predict/ammonia" 
     columns={columns}  startDate={startDate} endDate={endDate} pondid={pondId}/>
    </div>
  );
}

export default Ammonia;
