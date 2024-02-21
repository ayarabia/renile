import React from 'react';
import Sidebar from '../sideBar';
import { Outlet, useLocation } from 'react-router-dom';
const Layout = ({ children }) => {
  const location = useLocation();
  const hideSidebarPaths = ['/createnewfarm','/farmsystem'];
  const isSidebarHidden = hideSidebarPaths.includes(location.pathname);
  return (
    <div className="flex  ">
       {!isSidebarHidden && <Sidebar />}
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;