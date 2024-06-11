import { TimelineData } from "../../utils/data";

const Timeline = () => {
   const currentStep = 1;
   const progressPercentage = ((currentStep - 1) + 0.5) / TimelineData.length * 100;
   const progressPercentageLarge = ((currentStep - 1) + 2) / TimelineData.length * 100

   return (
      <div className="p-4 rtl">
         {/* Desktop View */}
         <div className="hidden lg:grid lg:grid-cols-4 space-y-10 lg:space-y-0 text-gray-500">
            {TimelineData.map((item) => (
               <div className={item.id === 1 ? '' : 'font-light'} key={item.id}>
                  <p className="font-light">{item.title}</p>
                  <p className={item.id === 1 ? 'font-semibold' : ''}>{item.subTitle}</p>

                  <div className={`-rotate-90 lg:rotate-0 flex items-center my-4 h-1 ${item.id < 4 ? 'bg-gray-200' : ''}`}>
                     <div className={`h-3 w-3 rounded-full ${item.id === 1 ? 'bg-blue-500' : 'bg-gray-200'}`} />
                     {item.id === 1 && (
                        <div className="h-1 bg-blue-500 rounded-full" style={{ width: `${progressPercentageLarge}%` }} />
                     )}
                  </div>

                  <p>{item.day}</p>
                  <p>{item.time}</p>
               </div>
            ))}
         </div>

         {/* Mobile View */}
         <div className="relative flex flex-col md:hidden space-y-16 ">
            {TimelineData.map((step) => (
               <div key={step.id} className="pr-8">
                  <h3 className="text-lg font-semibold">{step.title} {step.subTitle}</h3>
                  <p className="text-sm">{step.day}  |  {step.time}</p>
               </div>
            ))}
            {/* Progressbar */}
            <div className="absolute inset-0 w-full h-full -top-16">
               {/* Lines */}
               <div className="absolute top-0 right-1 w-1 h-full bg-gray-200">
                  <div className="w-1 bg-blue-500" style={{ height: `${progressPercentage}%` }} />
               </div>
               {/* Circules */}
               <div className="flex flex-col justify-between absolute top-0 right-0 h-full">
                  {TimelineData.map((step, index) => (
                     <div key={step.id} className={`w-3 h-3 rounded-full ${index < currentStep ? 'bg-blue-500' : 'bg-gray-200'}`} />
                  ))}
               </div>
            </div>

         </div>
      </div>
   );
};

export default Timeline;
