import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Overview from "../Overview";
import filter from "../../assets/filter.svg";
import LiveFilterByDate from "../../components/liveFilterByDate";
function Analytics() {
  const links = [
    // {path:"overview",titel:"Overview"} ,
    { path: "ammonia", titel: "Ammonia" ,style:""},
    { path: "growthrate", titel: "Growth Rate" ,style:"disabled-link"},
    { path: "feedrate", titel: "Feed Rate",style:"" },
  ];

  return (
    <div className="pt-14 px-[30px]">
      <p className="text-[#041300] text-[32px] font-medium mb-6">Analytics</p>
        <div className="bg-[#F3F8EF] rounded-[20px] lg:-mb-[55px] w-fit shadow-3xl px-1 py-2 flex flex-wrap items-center justify-start">
          {links.map((item, index) => {
            return (
              <NavLink
                key={item}
                to={`${item.path}`}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#589130" : "#444544",
                    background: isActive ? "#fff" : "",
                  };
                }}
                className={`rounded-[300px] px-3 py-4 lg:me-7 font-medium lg:text-base text-sm ${item.style}`}
              >
                {item.titel}
              </NavLink>
            );
          })}
        </div>
       {/* <Overview/> */}
      <Outlet />
    </div>
  );
}
export default Analytics;