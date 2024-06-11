import { useState } from "react";

import Descriptions from "./Descriptions";
import Proposals from "./Proposals";

const Content = ({ activeTab }) => {
   const [activeIndex, setActiveIndex] = useState(null);

   const onItemClick = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
   };

   return (
      <div className="md:mt-8">
         {activeTab === 'descriptions' && (
            <Descriptions onItemClick={onItemClick} activeIndex={activeIndex} />
         )}
         {activeTab === 'proposals' && (
            <Proposals onItemClick={onItemClick} activeIndex={activeIndex} />
         )}
      </div>
   );
};

export default Content;
