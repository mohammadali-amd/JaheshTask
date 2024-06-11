import toPersianNumber from "../../utils/toPersianNumber";
import { ArrowLeft } from "../../assets/icons";

const Pagination = () => {
   const renderPageButton = (page, isCurrent = false) => (
      <a
         href="#"
         key={page}
         className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${isCurrent
            ? "bg-slate-200"
            : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            } focus:z-20 focus:outline-offset-0`}
         aria-current={isCurrent ? "page" : undefined}
      >
         {toPersianNumber(page)}
      </a>
   );

   return (
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
         <div className="flex sm:flex-1 sm:items-center sm:justify-between">
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
               <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-lg px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
               >
                  <img src={ArrowLeft} alt="chevron-right" className="rotate-180 h-3" />
               </a>
               {renderPageButton(1, true)}
               {renderPageButton(2)}
               <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                  ...
               </span>
               {renderPageButton(9)}
               {renderPageButton(10)}
               <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-lg px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
               >
                  <img src={ArrowLeft} alt="chevron-left" className="h-3" />
               </a>
            </nav>
         </div>
      </div>
   );
};

export default Pagination;
