import React from "react";
import { Popover, Typography } from "@mui/material"
import { ProfileIcon, SearchIcon } from "../icons/SvgIcons"

const HeaderComponent = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <div className={`sticky top-0 h-[70px] w-full bg-white shadow-md p-[10px] flex justify-between items-center`}>
            <div className={` bg-[#f9f9f9] hover:shadow-md focus:border-blue-core border rounded-[5px] px-[10px] w-[50%] flex flex-row justify-between items-center`}>
                <input className={`h-[40px] w-[85%] outline-none bg-transparent `} placeholder="Search" />
                <SearchIcon className={`stroke-1 stroke-[#aaa] fill-none hover:cursor-pointer `} />
            </div>
            <div data-popover-target="popover-default" type="button" aria-describedby="id" className={`flex relative flex-row items-center hover:bg-[rgba(0,0,0,.05)] cursor-pointer p-[5px] rounded-[8px]`}>
                <ProfileIcon />
                <div className={`flex flex-col mx-[5px]`}>
                    <span className={`text-[12pt] font-bold text-blue-core leading-none`}>Edmilson Balango</span>
                    <span className={`text-[9pt] text-[#999] leading-none`}>Secretário</span>
                </div>
            </div>
            <div data-popover id="popover-default" role="tooltip" class="inline-block absolute invisible z-10 w-[200px] text-sm font-light text-gray-500 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 transition-opacity duration-300 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                <div class="py-2 px-3 bg-gray-100 rounded-t-lg border-b border-gray-200 dark:border-gray-600 dark:bg-gray-700">
                    <h3 class="font-semibold text-gray-900 dark:text-white">Popover title</h3>
                </div>
                <div class="py-2 px-3">
                    <p>And here's some amazing content. It's very engaging. Right?</p>
                </div>
            </div>
           
        </div>
    )
}

export default HeaderComponent