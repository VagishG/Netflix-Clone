import { ImNpm } from "react-icons/im";
import NavbarItem from "./Navbaritem";
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import AccountMenu from "./AccountMenu";

const TOP_OFFSET= 66;

const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showBaground, setShowBaground] = useState(false);
    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY>=TOP_OFFSET){
                setShowBaground(true);
            }
            setShowBaground(false);
        }
        window.addEventListener("scroll",handleScroll);
        return()=>{
            window.removeEventListener("scroll",handleScroll);
        }
    },[])

    return (
        <nav className="w-full fixed z-40 ">
            <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBaground&&'bg-zinc-900 bg-opacity-90'} `}>
                <img src="/images/logo.png" alt="" className="h-4 lg:h-24" />
                <div className="flex-row ml-8 gap-7 hidden lg:flex">
                    <NavbarItem label="Home" />
                    <NavbarItem label="Series" />
                    <NavbarItem label="Films" />
                    <NavbarItem label="New  & Popular" />
                    <NavbarItem label="My List" />
                    <NavbarItem label="Browse by languages" />
                </div>
                <div onClick={() => setShowMobileMenu((prev) => !prev)} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer">
                    <p className="text-white text-sm">Browse</p>
                    <BsChevronDown className="text-white transition" />
                    <MobileMenu visible={showMobileMenu} />
                </div>
                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
                        <BsSearch />
                    </div>
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
                        <BsBell />
                    </div>
                    <div onClick={()=>setShowAccountMenu((prev)=>!prev)} className="flex flex-row items-center gap-2 cursor-pointer relative">
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                            <img src="/images/profile.jpg" alt="" />
                        </div>
                        <BsChevronDown className="text-white transition"/>
                        <AccountMenu visible={showAccountMenu} />
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;