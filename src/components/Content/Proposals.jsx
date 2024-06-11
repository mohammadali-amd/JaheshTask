import SelectOption from "../SelectOption/SelectOption"
import ProposalCard from '../Cards/ProposalCard';
import Pagination from "../Pagination/Pagination";

import { FilterFunnel, TitleIcon, Trophy } from "../../assets/icons"
import { rating, sorting } from "../../utils/data";

const Proposals = () => {
   return (
      <>
         <div className="relative hidden md:grid grid-cols-8 gap-8 border-b border-slate-200 pb-6 mb-16 z-20">
            <div className="col-span-3 space-y-2">
               <h3>فیلتر کردن براساس</h3>
               <div className="flex items-center gap-2 bg-white border border-slate-400 rounded-lg p-3 text-gray-600">
                  <input type="checkbox" name="filter" id="filter" className="scale-125" />
                  <img src={Trophy} alt="trophy" className="h-5" />
                  <label htmlFor="filter">فقط پیشنهاد‌های برنده</label>
               </div>
            </div>
            <div className="col-span-3">
               <div className="space-y-2">
                  <h3>تعداد ستاره‌ها</h3>
                  <SelectOption
                     option={rating}
                     defaultValue={'یک مورد را انتخاب کنید.'}
                     rating
                  />
               </div>
            </div>
            <div className="col-span-2">
               <div className="space-y-2">
                  <h3>مرتب کردن براساس</h3>
                  <SelectOption
                     option={sorting}
                     defaultValue={'جدیدترین'}
                  />
               </div>
            </div>
         </div>

         <div className="md:hidden flex items-center justify-between px-4 pb-8">
            <div className="flex items-center gap-2">
               <img src={TitleIcon} alt="title-icon" className="h-5" />
               <h4 className="font-bold text-xl">پیشنهاد‌ها</h4>
            </div>
            <div className="flex items-center gap-2">
               <div className="relative">
                  <img src={FilterFunnel} alt="filter-funnel" className="h-5 m-1" />
                  <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-500 border-2 border-white" />
               </div>
               <h4>فیلتر‌ها</h4>
            </div>
         </div>

         <div className="md:space-y-8 pb-24 border-b border-b-slate-300">
            <ProposalCard winner />
            <ProposalCard />
         </div>

         {/* Pagination */}
         <div className="md:flex justify-center text-center md:justify-between items-center pt-8">
            <div className="font-light text-sm text-gray-700">
               درحال نمایش <b>۸</b>  از  <b>۴۲۸</b>  پیشنهاد
            </div>
            <div className="flex justify-center">
               <Pagination />
            </div>
         </div>
      </>
   )
}

export default Proposals
