import { useRouter } from "next/router"
import { BsChatDots, BsThreeDots } from "react-icons/bs"
import Task from "../../components/task"


const tasks = [
    {
        id: '01',
        task: 'Desenvolver um jogo pra sei lá',
        status:'working on',
        deadline: '12/12/2022',
        coll: 5,
    },
    {
        id: '02',
        task: 'Desenhar o responsivo da página blá blá  blá',
        status:'working on',
        deadline: '12/12/2022',
        coll: 2,
    },
    {
        id: '03',
        task: 'Desenhar o UI/UX da app xyz',
        status:'done',
        deadline: '12/12/2022',
        coll: 1,
    },
    {
        id: '04',
        task: 'Coisas da muito tempoooooo',
        status:'stuck',
        deadline: '12/12/2022',
        coll: 1,
    },
]
const TaskDetail = () => {
    
    const router = useRouter()
    const {taskId} = router.query

    
    
    return(
        <div className="flex flex-1 flex-col">

            {/* first card with the progress status*/}
            <div className="bg-white p-5 shadow-sm rounded-md w-full mb-5 flex flex-row justify-around items-center">
                <div className="flex flex-col w-1/2">
                    <h1 className="font-semibold ">Progresso</h1>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 mt-1">
                        <div className="bg-[rgb(253,171,61)] h-full rounded-full w-[50%]" />
                    </div>
                    <div>
                        <span className="font-medium text-[10pt] text-[#aaa]">5/10</span>
                    </div>
                </div>
                <div>
                    <h1 className="font-semibold">Colaboradores</h1>
                    <div class="flex -space-x-4">
                        <img class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
                        <img class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="" />
                        <img class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="" />
                        <a class="flex justify-center items-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full border-2 border-white hover:bg-gray-600 dark:border-gray-800" href="#">+2</a>
                    </div>
                </div>
            </div>

        	{/* Secound card with the tasks */}
            <div className="bg-white p-5 rounded-md w-full shadow-sm">
                <h1 className="font-semibold text-[#444] text-[14pt]">Titulo das tarefas</h1>
                <div className="mt-5">
                    {tasks.map(task => {
                        return <Task key={task.id} task={task} />
                    })}
                </div>
            </div>        
        </div>
    )
}
export default TaskDetail