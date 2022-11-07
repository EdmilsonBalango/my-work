import Link from 'next/link'
import {BsThreeDotsVertical, BsListUl, BsPeople} from 'react-icons/bs'
import { MdDeleteSweep,MdEdit ,MdOpenInFull } from 'react-icons/md'

const TaskCards = ({data}) => {
    return (
        
        <Link href={`workspace/${data.id}`}>
        <div onClick={()=>{}} className={` hover:cursor-pointer hover:scale-[1.03]  h-[150px] w-72 rounded-xl shadow-md bg-white p-4 flex justify-between flex-col m-2`}>
            <div className={`flex flex-row justify-between`}>
                <div className="flex flex-col">
                    <span className="font-bold text-[10pt] text-[#666] leading-none">Desenvolvimento do UI/UX</span>
                    <span className="text-[9pt] text-[#c4c4c4]">{data.area}</span>
                </div>
            </div>
            <div className='mt-2 '>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row, items-center'>
                        <span>
                            <BsListUl size={15} className='text-[#666]'/>
                        </span>
                        <span className='text-[#888] text-[8pt]'>Progresso</span>
                    </div>
                    <span className='text-[9pt] text-[#666] font-bold'>
                        {data.progress.done}/{data.progress.all}
                    </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 mt-1">
                    <div className="bg-[rgb(253,171,61)] h-full rounded-full w-[50%]" ></div>
                </div>

            </div>
            <div className='flex flex-row justify-between items-center'>
                <span className='text-[8pt] font-bold text-[rgb(253,171,61)] bg-[rgba(253,171,61,.25)] px-2 py-1 rounded-xl '>
                    {data.deadline}
                </span>
                <span className='flex flex-row items-center text-[#666]'>
                    <BsPeople className='' />
                    <span className='text-[11pt] ml-1'>
                        {data.collaborators}
                    </span>
                </span>
            </div>
        </div>

        <div id="dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
            <li>
                <a href="#" className="flex flex-row items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <MdOpenInFull />
                    <span className='ml-2'>Abrir</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex flex-row items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <MdEdit />
                    <span className='ml-2'>Editar</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex flex-row items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <MdDeleteSweep color='#E2445C' />
                    <span className='ml-2 text-[#E2445C]'>Apgar</span>
                </a>
            </li>
            </ul>
        </div>
        </Link>
    )
}
export default TaskCards