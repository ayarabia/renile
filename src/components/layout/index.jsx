import React from 'react';
import Sidebar from '../sideBar';
import { Outlet, useLocation } from 'react-router-dom';
import userimage from "../../assets/user.svg"
const Layout = ({ children }) => {
  const location = useLocation();
  const hideSidebarPaths = ['/createnewfarm','/farmsystem',"/createnewpond"];
  const isSidebarHidden = hideSidebarPaths.includes(location.pathname);
  return (
    <div className="flex  ">
       {!isSidebarHidden && <Sidebar />}
      <div className="flex-1">
     <div className='flex items-center justify-end pe-4 pt-4 cursor-pointer'>
      <img src={userimage} alt="userprofile" className='block w-[48px] h-[48px] rounded-full border-0 ' />
     </div>
        {children}</div>
    </div>
  );
};

export default Layout;