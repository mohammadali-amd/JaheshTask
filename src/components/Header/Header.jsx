import { Bell, MobileMenu } from "../../assets/icons"
import { Logo } from "../../assets/images"

const Header = ({ toggleSidebar }) => {
   return (
      <header className="bg-white border-b border-b-slate-200 shadow-sm text-black pt-[24px] pb-[16px] px-4 lg:px-8 flex justify-between items-center">
         {/* Mobile Menu Icon */}
         <button className="lg:hidden" onClick={toggleSidebar}>
            <img src={MobileMenu} alt="Mobile Menu" className="w-7" />
         </button>

         <div className="hidden lg:block"></div>

         {/* Logo */}
         <img src={Logo} alt="Logo" className="w-24" />

         {/* Notifications */}
         <div className="relative">
            <img src={Bell} alt="Bell" className="w-5 m-1" />
            <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-500 border-2 border-white" />
         </div>
      </header>
   )
}

export default Header
