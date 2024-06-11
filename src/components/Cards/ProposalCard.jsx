import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { ArrowLeft, Star, TrophyGold } from "../../assets/icons"
import { Avatar } from "../../assets/images"
import { videos } from '../../utils/data';

const ProposalCard = ({ winner }) => {
   return (
      <div className="p-6 bg-white border md:border-slate-300 md:rounded-xl space-y-4 shadow-sm">
         {/* Author */}
         <div className="md:flex gap-8 items-center">
            {winner && (
               <div className='flex w-fit items-center gap-1 bg-amber-100 border border-amber-500 rounded-full p-1 text-sm text-amber-500 my-6 md:my-0'>
                  <img src={TrophyGold} alt="winner" className='h-5' />
                  <span>برنده فراخوان</span>
               </div>
            )}
            <div className='flex items-center gap-2'>
               <img src={Avatar} alt="avatar" className="h-8 object-cover rounded-full" />
               <h4>سمانه احمدی</h4>
               <span className="px-4 text-2xl text-slate-300"> | </span>
               <h4 className="text-gray-500 text-sm font-light">۲۵/ ۰۶ /۱۴۰۲</h4>
            </div>
         </div>

         {/* Title & Description */}
         <div className='space-y-4 py-4 border-b border-b-slate-300'>
            <h3 className='text-xl font-bold'>
               عنوان پیشنهادی که کاربر وارد کرده در این محل نمایش داده می‌شود...
            </h3>
            <p className='font-light w-full overflow-hidden text-ellipsis whitespace-nowrap'>
               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
            </p>
         </div>
         {/* Video Carousel */}
         <div className='border-b border-b-slate-300 py-2 mb-2'>
            <Swiper
               style={{
                  '--swiper-navigation-color': '#000',
                  '--swiper-navigation-size': '16px',
                  '--swiper-pagination-color': '#000',
               }}
               slidesPerView={'auto'}
               spaceBetween={30}
               navigation={true}
               pagination={{
                  clickable: true,
               }}
               autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
               }}
               modules={[Autoplay, Navigation, Pagination]}
            >
               {videos.map((item, index) => (
                  <SwiperSlide className='md:w-[80%] cursor-grab active:cursor-grabbing' key={index}>
                     <img src={item} alt="video" className='pb-10' />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
         {/* Rating & More Details */}
         <div className="flex justify-between place-items-center">
            <div className="hidden md:flex gap-2">
               <div className='flex'>
                  {Array.from({ length: 5 }).map((_, i) => (
                     <img key={i} src={Star} alt="star" className="h-5" />
                  ))}
               </div>
               <h4 className='text-amber-500 font-light'>۵ستاره</h4>
            </div>
            <div className="flex md:hidden gap-2">
               <img src={Star} alt="star" className="h-5" />
               <h4 className='text-amber-500 font-light'>{5}</h4>
            </div>

            <div className='flex gap-2 items-center cursor-pointer'>
               <h4>مشاهده جزئیات</h4>
               <img src={ArrowLeft} alt="arrow-left" className='h-4' />
            </div>
         </div>
      </div>
   )
}

export default ProposalCard
