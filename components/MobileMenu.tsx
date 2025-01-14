import React from "react";

interface MobileMenuProps{
    // label:string
    visible?:boolean
}

const MobileMenu :React.FC<MobileMenuProps> =({visible}) =>{
    if(!visible){
        return null;
    }
    return(
        <div className="bg-black w-56 absolute top-8 left-0 px-5 flex-col border-2 border-gray-800 flex">
            <div className="flex flex-col gap-4">
                <div className="px-3 text-center text-white hover:underline">
                    HOME
                </div>
                <div className="px-3 text-center text-white hover:underline">
                    SERIES
                </div>
                <div className="px-3 text-center text-white hover:underline">
                    FILMS
                </div>
                <div className="px-3 text-center text-white hover:underline">
                    New & Popular
                </div>
                <div className="px-3 text-center text-white hover:underline">
                    My List
                </div>
                <div className="px-3 text-center text-white hover:underline">
                    Browse By Languages
                </div>
            </div>
        </div>
    )
}

export default MobileMenu;