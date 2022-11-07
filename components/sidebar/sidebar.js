import { useEffect, useState } from 'react'
import styles from './Sidebar.module.css'
import {ReportIcon, SettingsIcon, WorkspaceIcon,DashboardIcon, ArrowBack, ForwardIcon} from '../icons/SvgIcons'
import Link from 'next/link'



const buttons = [
    {
        label: 'Dashboard',
        icon: <DashboardIcon/>,
        link: '/dashboard'
    },
    {
        label: 'workspace',
        icon: <WorkspaceIcon />,
        link: '/workspace'
    },
    {
        label: 'Report',
        icon: <ReportIcon />,
        link: '/report'
    }
]



const Sidebar = () => {
    const [ isOpen, setIsOpen ] = useState(true)
    const [ toggleSidebar, setToggleSidebar ] = useState(true)
    let delay = ''
    
    useEffect(() => {
        if(!toggleSidebar)
        setTimeout(() =>{
            delay = 'hidden'  
            console.log(delay)
        },500)
    },[toggleSidebar])

    return (
        <>
        <div className={` hidden lg:flex   sticky top-0 ${isOpen ? 'w-80' : 'w-[60px]'} h-screen bg-blue-core flex-col`}>
            <div className={`${isOpen ? 'text-[18pt]' : 'text-[10pt]'} font-bold text-white flex justify-center items-center h-[70px] p-2.5`}>{isOpen ? 'OGM-NÍVEL II': 'OGM'}</div>
            <div className={`${isOpen ? 'self-end': 'self-center'} flex mx-[10px] h-[25px] w-[25px] rounded-[5px] bg-white justify-center items-center hover:cursor-pointer hover:scale-[1.07]`} onClick={()=> setIsOpen(!isOpen)}>
                <ArrowBack className={`${isOpen ? 'rotate-0' : 'rotate-180'} delay-300 duration-300`}/>
            </div>
            <div className={'flex flex-1 flex-col justify-center items-center'}>
                {buttons.map(button => (
                    <Link key={button.label} className={'w-[85%]'} href={button.link}>
                    <button className={`bg-trasparent border-none text-[11pt] font-bold h-[45px] w-full m-[5px] rounded-[5px] flex flex-row items-center px-[20px] uppercase hover:bg-white-trans ${!isOpen && 'justify-center w-[86%]'}`}>
                        <span>{button.icon}</span>
                        <span className={`${!isOpen && 'scale-0 delay-250 hidden'} px-[10px] text-white`}>{button.label}</span>
                    </button>
                    </Link>
                ))}               
            </div>
            <div className={`flex h-[2rem] w-[85%] px-[10px]  ${!isOpen ? 'self-center' : 'self-start'}`}>
                <SettingsIcon className={`hover:rotate-[40deg] cursor-pointer`} />
            </div>
        </div>
        {/* <div  className={`z-50 fixed flex flex-row w-screen h-screen ${toggleSidebar ? 'bg-[rgba(0,0,0,.8)] ': 'bg-[rgba(0,0,0,0)]'} ${delay}`}>
            <div className={` ${toggleSidebar ? 'w-80' : 'w-0'} z-50 flex lg:hidden fixed top-0 w-80 h-screen bg-blue-core flex-col`}>
                <div onClick={()=> setToggleSidebar(!toggleSidebar)} className={`text-[18pt] font-bold text-white flex justify-center items-center h-[70px] p-2.5`}>OGM-NÍVEL II</div>

                <div className={'flex flex-1 flex-col justify-center items-center'}>
                    {buttons.map(button => (
                        <Link key={button.label} className={'w-[85%]'} href={button.link}>
                        <button className={`bg-trasparent border-none text-[11pt] font-bold h-[45px] w-full m-[5px] rounded-[5px] flex flex-row items-center px-[20px] uppercase hover:bg-white-trans ${!isOpen && 'justify-center w-[86%]'}`}>
                            <span>{button.icon}</span>
                            <span className={`px-[10px] text-white`}>{button.label}</span>
                        </button>
                        </Link>
                    ))}               
                </div>
                <div className={`flex h-[2rem] w-[85%] px-[10px]  self-center'`}>
                    <SettingsIcon className={`hover:rotate-[40deg] cursor-pointer`} />
                </div>
            </div>
            <div onClick={()=> setToggleSidebar(!toggleSidebar)} className='flex flex-1'>

            </div>
        </div> */}
        </>
    )
}

export default Sidebar