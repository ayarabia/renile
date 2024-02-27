import React, { useState, useEffect } from "react";
import filter from "../../assets/filter.svg";
import forecast from "../../assets/chart-breakout.svg";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { MdDone } from "react-icons/md";
import Popup from "../popup";
import "./table.css";
import { instance } from "../../networking/baseInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function TableData(props) {
  const columns=props.columns

  const [ammoniaAmount, setAmmoniaAmount] = useState();
  const [showAmmoniaAmount, setShowAmmoniaAmount] = useState(false);

  const [rows, setRows] = useState(props.rows);
  const editRow = (row) => {
    const updatedRows = rows.map((r) => {
      if (r === row) {
        return { ...r, editing: true };
      }
      return r;
    });
    setRows(updatedRows);
    localStorage.setItem("ammoniData", JSON.stringify([...updatedRows]));
  };

  const saveRow = (row) => {
    const updatedRows = rows.map((r) => {
      if (r === row) {
        return { ...r, editing: false };
      }
      return r;
    });
    setRows(updatedRows);
    localStorage.setItem("ammoniData", JSON.stringify([...updatedRows]));
  };

  const deleteRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
    localStorage.setItem("ammoniData", JSON.stringify([...updatedRows]));
  };
  const [showPlacholder, setShowPlacholder] = useState(true);
  const today = new Date().toISOString().split("T")[0];
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
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

  const [newRow, setNewRow] = useState({
    date: "",
    dissolvedOxygen: "",
    pHLevels: "",
    temperature: "",
  });
  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = () => {
    setPopupOpen(true);
  };
  const closePopup = () => {
    setNewRow({
      date: "",
      dissolvedOxygen: "",
      pHLevels: "",
      temperature: "",
    });
    setPopupOpen(false);
    setShowAmmoniaAmount(false);
  };

  const predictLevel = (bodyData) => {
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
        setAmmoniaAmount(response.data.result);
        setShowAmmoniaAmount(true);
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
      dissolvedOxygen: "",
      pHLevels: "",
      temperature: "",
    });
    localStorage.setItem("ammoniData", JSON.stringify([...rows, newRow]));
    setPopupOpen(false);
    setShowAmmoniaAmount(false);
  };

  useEffect(() => {
    const ammoniData = localStorage.getItem("ammoniData");
    if (ammoniData) {
      setRows(JSON.parse(ammoniData));
    }
  }, []);
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
          {/* <button className="flex items-center bg-white py-2 px-3 rounded-xl text-primary shadow-3xl text-base font-medium border border-[#D0D5DD] ">
            <img src={filter} alt="filtaration" className="me-2" />
            Filter
          </button> */}
          {/* <div className="flex items-center relative bg-white py-2 px-3 rounded-xl text-primary shadow-3xl text-base font-medium border border-[#D0D5DD]  ">
            <img src={filter} alt="filtaration" className="me-2" />
            <span className="ms-2 bg-transparnt whitespace-nowrap  text-primary  text-base font-normal">
             
              {showPlacholder ? "Filter by date" :filterDate}
            </span>
            <input
              type="date"
              name="date"
              value={filterDate}
              onChange={(e) => {
                setFilterDate(e.target.value);
                setShowPlacholder(false)
               }}
              className="bg-transparnt w-full placeholder: text-primary  text-base font-normal"
            />
          </div> */}
        
          <button
            onClick={openPopup}
            className=" flex items-center bg-primary py-2 px-3 rounded-xl text-white shadow-3xl text-base font-semibold"
          >
            <img src={forecast} alt="Forecast image" className="me-2" />
            Forecast Data
          </button>
        </div>
        <Popup
          isOpen={isPopupOpen}
          onClose={closePopup}
          addRow={addRow}
          setNewRow={setNewRow}
          data={newRow}
          ammoniaAmount={ammoniaAmount}
          showAmmoniaAmount={showAmmoniaAmount}
          getAmount={getAmount}
        />
        <ToastContainer />
      </div>
      <div className="overflow-x-auto tableData w-full shadow-3xl mt-12">
        <table>
          <thead className="bg-[#F8F8F8] text-[#041300]  text-left rounded-t-lg font-medium text-xs ">
            <tr>
              {/* <th className="py-6 px-8">Date</th>
              <th className="py-6 px-8">Dissolved Oxygen</th>
              <th className="py-6 px-8">PH Levels</th>
              <th className="py-6 px-8">Temperature</th>
              <th className="py-6 px-8">Action</th> */}
              {columns?.map((item)=>{
                return ( <th className="py-6 px-8" key={item}>{item}</th>)
              })}
              <th className="py-6 px-8">Action</th>
            </tr>
          </thead>
          <tbody className=" text-left ">
            {filteredData.map((row, index) => (
              <tr key={index}>
                {!row.editing && <td className="py-6 px-8">{row.date}</td>}
                {!row.editing && (
                  <td className="py-6 px-8">{row.ph}</td>
                )}
                {!row.editing && <td className="py-6 px-8">{row.dissolved_oxygen}</td>}
                {!row.editing && (
                  <td className="py-6 px-8">{row.temperature}</td>
                )}
                {row.editing && (
                  <td className="py-6 ps-8">
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
                  <td className="py-6 ps-8">
                    <input
                      type="number"
                      value={row.dissolvedOxygen}
                      onChange={(e) => {
                        const updatedRows = [...rows];
                        updatedRows[index].dissolvedOxygen = e.target.value;
                        setRows(updatedRows);
                      }}
                    />
                  </td>
                )}
                {row.editing && (
                  <td className="py-6 ps-8">
                    <input
                      type="number"
                      value={row.pHLevels}
                      onChange={(e) => {
                        const updatedRows = [...rows];
                        updatedRows[index].pHLevels = e.target.value;
                        setRows(updatedRows);
                      }}
                    />
                  </td>
                )}
                {row.editing && (
                  <td className="py-6 px-8">
                    <input
                      type="number"
                      value={row.temperature}
                      onChange={(e) => {
                        const updatedRows = [...rows];
                        updatedRows[index].temperature = e.target.value;
                        setRows(updatedRows);
                      }}
                    />
                  </td>
                )}
                <td>
                  {!row.editing && (
                    <button
                      className="edit-button"
                      onClick={() => editRow(row)}
                    >
                      <FiEdit />
                    </button>
                  )}
                  {row.editing && (
                    <button
                      className="save-button"
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
      </div>
    </div>
  );
}

export default TableData;
