import { useState } from 'react';

import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

const Layout = ({ children }) => {
   const [isSidebarOpen, setSidebarOpen] = useState(false);

   const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
   };

   const gradient = 'bg-gradient-to-r from-[#C72D80] from-18% via-[#1004A4] via-51% to-[#49B3F3] to-82%'

   return (
      <div className="flex flex-1 overflow-hidden">
         <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} gradient={gradient} />

         <div className='flex-1 bg-white overflow-y-auto'>
            <div className={`${gradient} relative top-0 h-1`}></div>
            <Header toggleSidebar={toggleSidebar} />

            {children}
         </div>
      </div>
   )
}

export default Layout
