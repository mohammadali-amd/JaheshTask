import { useState, useRef, useEffect } from "react";

import toPersianNumber from "../../utils/toPersianNumber";
import { ChevronDown, Star } from "../../assets/icons";

const SelectOption = ({ option, defaultValue, rating }) => {
   const [isOpen, setIsOpen] = useState(false);
   const [selectedOption, setSelectedOption] = useState(null);
   const dropdownRef = useRef(null);

   const onOptionClicked = (value) => {
      setSelectedOption(value);
      setIsOpen(false);
   };

   const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
         setIsOpen(false);
      }
   };

   useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);

   return (
      <div ref={dropdownRef} className="relative flex flex-col items-center rounded-lg">
         <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-full flex justify-between items-center tracking-wider bg-white border border-slate-400 active:border-black rounded-lg p-3 text-gray-600"
         >
            {selectedOption !== null ? (
               <div className="flex gap-2 items-center">
                  {rating ? (
                     <>
                        <div className="flex">
                           {Array.from({ length: selectedOption }).map((_, i) => (
                              <img key={i} src={Star} alt="star" className="h-5" />
                           ))}
                        </div>
                        <h3>{toPersianNumber(selectedOption)} {Number.isInteger(selectedOption) && 'ستاره'}</h3>
                     </>
                  ) : (
                     <>{toPersianNumber(selectedOption)}</>
                  )}
               </div>
            ) : (
               defaultValue
            )}
            <img src={ChevronDown} alt="chevron-down" className={`w-3 ${isOpen ? "rotate-180" : ""}`} />
         </button>
         {isOpen && (
            <div className="bg-white absolute top-14 flex flex-col rounded-md items-start p-2 w-full shadow-md border border-slate-300">
               {option.map((item, index) => (
                  <button onClick={() => onOptionClicked(item)} key={index} className="flex w-full gap-2 hover:bg-slate-200 text-sm text-gray-700 cursor-pointer rounded-md p-3">
                     {rating ? (
                        <>
                           <div className="flex">
                              {Array.from({ length: item }).map((_, i) => (
                                 <img key={i} src={Star} alt="star" className="h-5" />
                              ))}
                           </div>
                           <h3>{toPersianNumber(item)} {Number.isInteger(item) && 'ستاره'}</h3>
                        </>
                     ) : (
                        <>{toPersianNumber(item)}</>
                     )}
                  </button>
               ))}
            </div>
         )}
      </div>
   );
};

export default SelectOption;
