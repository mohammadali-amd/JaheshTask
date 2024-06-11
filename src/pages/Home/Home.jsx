import { useState } from "react";

import Tabs from "../../components/Tabs/Tabs"
import Timeline from "../../components/Timeline/Timeline"
import Content from "../../components/Content/Content"

import { Building } from "../../assets/icons";

const Home = () => {
   const [activeTab, setActiveTab] = useState('descriptions');

   return (
      <main className="max-h-screen py-8 w-full mx-auto">
         <div className="px-4 xl:px-80">
            <div className="flex gap-2 items-center py-8">
               <img src={Building} alt="building" className="w-5" />
               <h3>کارشناسی توسط شرکت</h3>
            </div>
            <h2 className="text-2xl font-bold">فراخوان حل چالش کنونی همکاران سیستم به زبان پایتون</h2>
            <Tabs setActiveTab={setActiveTab} />
         </div>
         <div className="md:px-4 xl:px-80 py-8 bg-slate-100 border-t border-gray-200 w-full h-full">
            {activeTab === 'descriptions' && <Timeline />}
            <Content activeTab={activeTab} />
         </div>
      </main>
   )
}

export default Home
