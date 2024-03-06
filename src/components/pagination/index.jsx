import React, { useState } from "react";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
function Pagination({ currentPage, totalPages ,handlePageChange}) {

  return (
    
    <div className="mt-4 flex justify-between items-center flex-wrap px-8 pb-8 pt-3">
      <span className="text-primary">
        Page {currentPage} of {totalPages}
      </span>
      <div className="flex">
        <button
          className={`ml-2 px-4 py-2 bg-blue-500 text-white rounded ${
            currentPage === 1 ? "bg-gray-400 cursor-not-allowed" : ""
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
        <FaArrowLeft/>
        </button>
        <button
          className={`ml-2 px-4 py-2 bg-blue-500 text-white rounded ${
            currentPage === totalPages ? "bg-gray-400 cursor-not-allowed" : ""
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <FaArrowRight/>
         
        </button>
      </div>
    </div>
  );
}

export default Pagination;
