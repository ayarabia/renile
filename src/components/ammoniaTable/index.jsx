import React, { useState, useEffect } from "react";
import filter from "../../assets/filter.svg";
import forecast from "../../assets/chart-breakout.svg";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { MdDone } from "react-icons/md";
import Popup from "../popup";
import "../table/table.css"
import { instance } from "../../networking/baseInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagination from "../pagination";

function AmmoniaTable(props) {
    const columns=props.columns
    const startDate=props.startDate
    const endDate=props.endDate
    const [amount, setAmount] = useState();
    const [showAmmoniaAmount, setShowAmmoniaAmount] = useState(false);
    const [rows,setRows]=useState([])
    const pondid=props.pondid
    const [farm,setFarm]=useState("")
  
    useEffect(() => {
      const farmId = sessionStorage.getItem('farmId');
      if (farmId!==null) {
        setFarm(farmId)
      }
      // GET request
      instance.get(`waterquality/ammonia/table?farm=${farm}&pond=${pondid}&start_date=${startDate}&end_date=${endDate}  `)
        .then((response) => {
          setRows(response.data.data)
         })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, [pondid,farm,startDate,endDate]);
    //console.log(rows);
    const editRow = (row) => {
      const updatedRows = rows.map((r) => {
        if (r === row) {
          return { ...r, editing: true };
        }
        return r;
      });
      setRows(updatedRows);
    //   localStorage.setItem("ammoniData", JSON.stringify([...updatedRows]));
    };
  
    const saveRow = (row) => {
      const updatedRows = rows.map((r) => {
        if (r === row) {
          return { ...r, editing: false };
        }
        return r;
      });
      setRows(updatedRows);
    //   localStorage.setItem("ammoniData", JSON.stringify([...updatedRows]));
    };
  
    const deleteRow = (index) => {
      const updatedRows = [...rows];
      updatedRows.splice(index, 1);
      setRows(updatedRows);
    //   localStorage.setItem("ammoniData", JSON.stringify([...updatedRows]));
    };
   
   
    const filteredData = rows.filter((item) => {
      
      const itemDate = new Date(item.date);
      const startFilterDate = startDate !== "" ? new Date(startDate) : null;
      const endFilterDate = endDate !== "" ? new Date(endDate) : null;
       // return itemDate >= startFilterDate && itemDate <= endFilterDate;
      if (startFilterDate && itemDate < startFilterDate) {
        return false;
      }
  
      if (endFilterDate && itemDate > endFilterDate) {
        return false;
      }
       return true;
    
    });
  
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(rows.length / 20);
    const startIndex = (currentPage - 1) * 20;
    const endIndex = Math.min(startIndex + 20 - 1, rows.length - 1);
    const handlePageChange = (newPage) => {
      if (newPage >= 1 && newPage <= totalPages) {
        setCurrentPage(newPage);
      }
    };
  
    const today = new Date().toISOString().split("T")[0];
  const [newRow, setNewRow] = useState({
      date: today,
      dissolved_oxygen: "",
      ph: "",
      temperature: "",
    });
    const [isPopupOpen, setPopupOpen] = useState(false);
    const openPopup = () => {
      setPopupOpen(true);
    };
    const closePopup = () => {
      setNewRow({
        date: "",
        dissolved_oxygen: "",
        ph: "",
        temperature: "",
      });
      setPopupOpen(false);
      setShowAmmoniaAmount(false);
    };
    const [load ,setLoad]=useState(false)
    const predictLevel = (bodyData) => {
      setLoad(true)
      const url = props.url;
      console.log(url);
      instance
        .post(url, bodyData)
        .then((response) => {
          console.log(response.data.result);
          toast.success(response.data.message, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
          });
        
          setAmount(response.data.result);
          setShowAmmoniaAmount(true);
          // setNewRow({
          //   date: "",
          //   dissolved_oxygen: "",
          //   ph: "",
          //   temperature: "",
          // })
          setLoad(false)
        })
        .catch((error) => {
          setLoad(false)
          toast.error(error.response.data.message, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
          });
          // console.error("Error from base URL 2:", error);
        });
    };
    const getAmount = () => {
    
     predictLevel(newRow);
    };
    const createWaterQuality = (bodyData) => {
      instance
        .post("waterquality", bodyData)
        .then((response) => {
          console.log(response.data.result);
          toast.success(response.data.message, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
          });
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
          });
          // console.error("Error from base URL 2:", error);
        });
    };
    const addRow = () => {
      createWaterQuality(newRow);
      setRows([...rows, newRow]);
      setNewRow({
        date: "",
        dissolved_oxygen: "",
        ph: "",
        temperature: "",
      });
    //   localStorage.setItem("ammoniData", JSON.stringify([...rows, newRow]));
      setPopupOpen(false);
      setShowAmmoniaAmount(false);
    };
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const sortedData = [...rows].sort((a, b) => {
      if (sortConfig.key && a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      if (sortConfig.key && a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      return 0;
    });

    const handleSort = (key) => {
      console.log(key);
      const direction = sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
      setSortConfig({ key, direction });
      console.log(sortConfig);
    };
   
   // console.log(rows);
  console.log(sortedData);
  return (
    <div className="bg-white rounded-[20px] shadow-3xl px-6 py-8 mt-8 ">
    <div className="flex justify-between items-center flex-wrap">
      <div>
        <p className="text-[#121811] font-medium text-2xl mb-2">
          Ammonia Toxicity Data
        </p>
        <p className="text-[#646464] text-xs font-normal">
          Forecast Ammonia Toxicity data for the next months.
        </p>
      </div>
      <div className="lg:flex items-center justify-end lg:mt-0 mt-4 ">
        
        <button
          onClick={openPopup}
          className=" flex items-center  mb-4 lg:mb-0 bg-primary py-2 px-3 rounded-xl text-white shadow-3xl text-base font-semibold"
        >
          <img src={forecast} alt="Forecast image" className="me-2" />
          Forecast Data
        </button>

      <div className="relative my-4  md:my-0 lg:ms-3 ">
            <select onChange={(e) => handleSort(e.target.value)} className="z-20 py-2 px-2 bg-white border border-[#D0D5DD] rounded-xl text-base font-medium w-fit outline-none appearance-none">
            <option value="null"  selected>Sort By</option>
         {columns?.map((item)=>{
          return (<option value={item.value}>{item.key}</option>)
         })}
            </select>
        </div>
      </div>
      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        addRow={addRow}
        setNewRow={setNewRow}
        data={newRow}
        amount={amount}
        showAmmoniaAmount={showAmmoniaAmount}
        getAmount={getAmount}
        load={load}
        text={props.text}
      />
   
    </div>
    <ToastContainer />
    <div className="overflow-x-auto tableData w-full shadow-3xl mt-12">
      <table>
        <thead className="bg-[#F8F8F8] text-center text-[#041300]   rounded-t-lg font-medium text-xs ">
          <tr>
             {columns?.map((item)=>{
              return ( <th className="py-6 cursor-pointer  " key={item}  onClick={() => handleSort(item.value)}>{item.key}
              {sortConfig.key ===item.value && (
                 <span
                className="text-primary text-lg "
               >
                 { sortConfig.direction === 'asc' ? ' ⬇' : '  ⬆'}
               </span>
              )}
              </th>)
            })}
            <th className="py-6 ">Action</th>
          </tr>
        </thead>
        <tbody className=" text-center">
          {sortedData.slice(startIndex, endIndex + 1).map((row, index) => (
            <tr key={index}>
              {!row.editing && <td className="py-6 px-3 ">{row.date}</td>}
              {!row.editing && (
                <td className="py-6 px-3">{row.ph}</td>
              )}
              {!row.editing && <td className="py-6 px-3">{row.dissolved_oxygen}</td>}
              {!row.editing && (
                <td className="py-6 px-3">{row.temperature}</td>
              )}
              {!row.editing && (
                <td className="py-6 px-3">{row.predicted_ammonia}</td>
              )}
              {!row.editing && (
                <td className="py-6 px-3">{row.actual_ammonia}</td>
              )}
              {row.editing && (
                <td className="py-6 ps-3">
                  <input
                    type="text"
                    value={row.date}
                    onChange={(e) => {
                      const updatedRows = [...rows];
                      updatedRows[index].date = e.target.value;
                      setRows(updatedRows);
                    }}
                   
                  />
                </td>
              )}
              {row.editing && (
                <td className="py-6 ps-3">
                  <input
                    type="number"
                    value={row.ph}
                    onChange={(e) => {
                      const updatedRows = [...rows];
                      updatedRows[index].ph = e.target.value;
                      setRows(updatedRows);
                    }}
                    className="w-full text-center"
                  />
                </td>
              )}
              {row.editing && (
                <td className="py-6 ps-3">
                  <input
                    type="number"
                    value={row.dissolved_oxygen}
                    onChange={(e) => {
                      const updatedRows = [...rows];
                      updatedRows[index].dissolved_oxygen = e.target.value;
                      setRows(updatedRows);
                    }}
                    className="w-full text-center"
                  />
                </td>
              )}
              {row.editing && (
                <td className="py-6 ps-3">
                  <input
                    type="number"
                    value={row.temperature}
                    onChange={(e) => {
                      const updatedRows = [...rows];
                      updatedRows[index].temperature = e.target.value;
                      setRows(updatedRows);
                    }}
                    className="w-full text-center"
                  />
                </td>
              )}
                {row.editing && (
                <td className="py-6 ps-3">
                  <input
                    type="number"
                    value={row.predicted_ammonia}
                    onChange={(e) => {
                      const updatedRows = [...rows];
                      updatedRows[index].predicted_ammonia = e.target.value;
                      setRows(updatedRows);
                    }}
                    className="w-full text-center"
                  />
                </td>
              )}
                {row.editing && (
                <td className="py-6 ps-3">
                  <input
                    type="number"
                    value={row.actual_ammonia}
                    onChange={(e) => {
                      const updatedRows = [...rows];
                      updatedRows[index].actual_ammonia = e.target.value;
                      setRows(updatedRows);
                    }}
                    className="w-full text-center"
                  />
                </td>
              )}
              <td>
                {!row.editing && (
                  <button
                    className="edit-button mb-2"
                    onClick={() => editRow(row)}
                  >
                    <FiEdit />
                  </button>
                )}
                {row.editing && (
                  <button
                    className="save-button mb-2"
                    onClick={() => saveRow(row)}
                  >
                    <MdDone />
                  </button>
                )}
                <button
                  className="delete-button"
                  onClick={() => deleteRow(index)}
                >
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination  handlePageChange={handlePageChange} totalPages={totalPages} currentPage={currentPage} />
    </div>
  </div>
  )
}
export default AmmoniaTable