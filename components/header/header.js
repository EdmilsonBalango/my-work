import React from "react";
import { Popover, Typography } from "@mui/material"
import { ProfileIcon, SearchIcon } from "../icons/SvgIcons"
import {HiOutlineMenuAlt2} from 'react-icons/hi'

const HeaderComponent = () => {

  
    return (
        <div className={`sticky top-0 h-[70px] w-full bg-white shadow-md p-[10px] flex justify-between items-center`}>
            
            <div className=" flex flex-row items-center justify-between w-[65%]">
                <button type="button" data-modal-toggle="popup-modal" className="lg:hidden hover: cursor-pointer hover:bg-blue-light p-1 rounded-md">
                    <HiOutlineMenuAlt2  size={30} color="#385980" />
                </button>
                <div className={` w-[80%] bg-[#f9f9f9] hover:shadow-md focus:border-blue-core border rounded-[5px] px-[10px] flex flex-row justify-between items-center`}>
                    <input className={`h-[40px] w-[85%] outline-none bg-transparent `} placeholder="Search" />
                    <SearchIcon className={`stroke-1 stroke-[#aaa] fill-none hover:cursor-pointer `} />
                </div>
            </div>
            <div data-popover-target="popover-default" type="button" aria-describedby="id" className={`flex relative flex-row items-center hover:bg-[rgba(0,0,0,.05)] cursor-pointer p-[5px] rounded-[8px]`}>
                <ProfileIcon />
                <div className={`flex-col mx-[5px] hidden lg:flex`}>
                    <span className={`text-[12pt] font-bold text-blue-core leading-none`}>Edmilson Balango</span>
                    <span className={`text-[9pt] text-[#999] leading-none`}>Secretário</span>
                </div>
            </div>
            <div data-popover id="popover-default" role="tooltip" className="inline-block absolute invisible z-10 w-[200px] text-sm font-light text-gray-500 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 transition-opacity duration-300 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                <div className="py-2 px-3 bg-gray-100 rounded-t-lg border-b border-gray-200 dark:border-gray-600 dark:bg-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Popover title</h3>
                </div>
                <div className="py-2 px-3">
                    <p>And here's some amazing content. It's very engaging. Right?</p>
                </div>
            </div>
            
        </div>
    )
}

export default HeaderComponent