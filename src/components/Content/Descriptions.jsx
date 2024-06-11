import { MinusCircle, PlusCircle, TitleIcon } from "../../assets/icons";
import { Video } from "../../assets/images";
import { accordionItems } from "../../utils/data";

const Descriptions = ({ activeIndex, onItemClick }) => {
   return (
      <div className="mt-20 px-4 lg:px-20">
         <div className="flex items-center gap-2">
            <img src={TitleIcon} alt="Title-icon" className="w-5" />
            <h3 className="text-xl font-bold">معرفی فراخوان</h3>
         </div>
         <div className="px-6 space-y-6">
            <p className="mt-4 font-light">
               به تابستون چلنج خوش اومدی!
               تابستون چلنج برای همه‌ست. جونیور یا سنیور، محصل یا شاغل، بک یا فرانت، فرقی نداره؛ چون قراره تو تابستون‌چلنج به همه‌مون خوش بگذره و باهم تفریح کنیم.
               ۷ روز، ۷ چالش؛ هر روز با یک چالش متفاوت و باحال روبه‌رو میشی. سطح بعضی از چالش‌ها آسونه و بعضی‌هاش هم متوسط یا یکم سخته و خلاصه همه مدل چالشی داریم.
            </p>
            <div className="flex items-center gap-2 pt-4">
               <img src={TitleIcon} alt="Title-icon" className="w-5" />
               <h3 className="text-xl font-bold">ویدیوی معرفی فراخوان</h3>
            </div>
            <img src={Video} alt="video" />

            <div className="flex items-center gap-2 pt-4">
               <img src={TitleIcon} alt="Title-icon" className="w-5" />
               <h3 className="text-xl font-bold">سوالات متداول</h3>
            </div>

            {accordionItems.map((item, index) => (
               <div key={index} className="border-b py-8">
                  <div className="flex gap-2 cursor-pointer" onClick={() => onItemClick(index)}>
                     <div className="min-w-fit mt-1">
                        {activeIndex === index ?
                           <img src={MinusCircle} alt="Minus-circle" className="w-5" />
                           :
                           <img src={PlusCircle} alt="Plus-circle" className="w-5" />
                        }
                     </div>
                     <div>
                        <h3 className="text-lg">{item.title}</h3>
                     </div>
                  </div>
                  {activeIndex === index && (
                     <p className="font-light pt-4 pr-8">{item.content}</p>
                  )}
               </div>
            ))}
         </div>
      </div>
   )
}

export default Descriptions
