import { Building, Close, Logout, TrophyActive } from "../../assets/icons"
import { Profile } from "../../assets/images"

const Sidebar = ({ isSidebarOpen, toggleSidebar, gradient }) => {

   return (
      <aside className={`bg-white border-l border-l-slate-200 text-black lg:w-64 w-64 space-y-6 absolute lg:relative inset-y-0 right-0 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 transition duration-200 ease-in-out overflow-y-auto z-10`}>
         <div className={`${gradient} h-1`}></div>
         <div onClick={toggleSidebar} className="absolute top-0 left-0 text-4xl pl-5 lg:hidden">
            <img src={Close} alt="Close" className="w-5" />
         </div>
         <div className="px-2 py-8">
            <div className="flex gap-3 items-center pb-10">
               <img src={Profile} alt="Profile-photo" className="w-10" />
               <h2 className="text-xl font-semibold">همکاران سیستم</h2>
            </div>
            <ul>
               <li className="mt-4"><a href="#" className="block py-3 px-4 bg-[#E8E6FA] text-[#1004A4] rounded-md font-semibold">
                  <span className="flex gap-3">
                     <img src={TrophyActive} alt="trophy" className="w-6" />
                     فراخوان ها
                  </span>
               </a></li>
               <li className="mt-4"><a href="#" className="block py-3 px-4 hover:bg-[#E8E6FA] hover:text-[#1004A4] rounded-md font-semibold">
                  <span className="flex gap-3">
                     <img src={Building} alt="trophy" className="w-6" />
                     مشخصات شرکت
                  </span>
               </a></li>
            </ul>

            <div className="mt-4"><a href="#" className="absolute w-[90%] bottom-10 py-6 px-4 rounded-md font-semibold border-t border-t-slate-300">
               <span className="flex gap-3">
                  <img src={Logout} alt="trophy" className="w-6" />
                  خروج
               </span>
            </a></div>
         </div>
      </aside>
   )
}

export default Sidebar
