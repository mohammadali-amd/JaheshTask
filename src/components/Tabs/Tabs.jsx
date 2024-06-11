import { useState } from 'react';

import { Desc_File, Layers } from '../../assets/icons/index'

const Tabs = ({ setActiveTab }) => {
   const [activeTab, setActive] = useState('descriptions');

   const handleTabClick = (tab) => {
      setActive(tab);
      setActiveTab(tab);
   };

   return (
      <nav className="flex pt-8 space-x-4 gap-8 md:gap-16" aria-label="Tabs">
         <button
            onClick={() => handleTabClick('descriptions')}
            className={`flex gap-2 items-center px-3 py-2 font-medium  ${activeTab === 'descriptions' ? 'text-black border-b-2 border-black' : 'text-gray-400'}`}
         >
            <img src={Desc_File} alt="layers" className='h-5' />
            توضیحات
         </button>
         <button
            onClick={() => handleTabClick('proposals')}
            className={`flex gap-2 items-center px-3 py-2 font-medium  ${activeTab === 'proposals' ? 'text-black border-b-2 border-black' : 'text-gray-400'}`}
         >
            <img src={Layers} alt="layers" className='h-5' />
            پیشنهادها (۲۴۸)
         </button>
      </nav>
   );
};

export default Tabs;
