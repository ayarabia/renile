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
     <div className='flex items-center justify-end px-[30px] pt-4 cursor-pointer'>
      <img src={userimage} alt="userprofile" className='block w-[58px] h-[58px] rounded-full border-0 ' />
     </div>
        {children}</div>
    </div>
  );
};

export default Layout;