import React, { useRef, useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'

const Task = ({task, onClick}) => {

    const [ editing, setEditing ] = useState(false)
    const tref = useRef().current
    const spanRef = useRef().current

    function statusColor () {
        if(task.status === 'stuck'){
            return 'bg-[#E2445C]'
        }else if(task.status === 'working on'){
            return 'bg-amber-500'
        }else{ 
            return 'bg-[#00C875]'
        }
    }
    function backgroundColor () {
        if(task.status === 'stuck'){
            return 'bg-[#F8C4CC]'
        }else if(task.status === 'working on'){
            return 'bg-amber-100'
        }else{ 
            return 'bg-[#AAEED2]'
        }
    }
    function seeChanges({e}){
        setEditing(true)
    }

    function onFocus(e){
        e.target.value = task.task 
        e.target.select()

    }

    //Changes to make: count number of characters and define the width
    
    return (
        <div onClick={()=> onClick(task.id)} className={`h-10 ${backgroundColor()} hover:scale-[1.01] hover:cursor-pointer flex flex-row items-center border-b border-b-white`}>
            <span className={` ${statusColor()} w-[1.5%] h-full mr-1.5`} /> 
            { !editing ? <div className='w-[50%]'><span onDoubleClick={e => seeChanges(e)} className={`font-semibold line-clamp-1`} >{task.task}</span></div>
            : <input ref={tref} autoFocus  onBlur={() => setEditing(false)} type={'text'} className={` h-7 font-semibold outline-none border-none w-[50%]`} onFocus={(e)=>onFocus(e)} />}
            <div className="border-r border-r-white h-full ml-2" />
            
            <div class="flex -space-x-4 pl-2 pr-2 w-[20%] justify-center">
                <img class="w-7 h-7 rounded-full border-2 border-white dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="" />
                <img class="w-7 h-7 rounded-full border-2 border-white dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="" />
                <a class="flex justify-center items-center w-7 h-7 text-xs font-medium text-white bg-gray-700 rounded-full border-2 border-white hover:bg-gray-600 dark:border-gray-800" href="#">+{task.coll}</a>
            </div>
            
            <div className="border-r border-r-white h-full " />
            <span className={`w-[20%] bg- text-[10pt] text-white font-medium ${statusColor()} pl-2 pr-2 h-full flex justify-center items-center`}>
                {task.status}
            </span>
            <div className="border-r border-r-white h-full " />
            <span className="text-[11pt] text-[#444] pr-2 pl-2 w-[20%]">
                {task.deadline}
            </span>
            <div className="border-r border-r-white h-full " />
            <span className="pr-2 pl-2">
                <BsThreeDots />
            </span>
            
        </div>
    )
}

export default Task