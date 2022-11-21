import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { BsChatDots, BsPlus, BsThreeDots, BsX } from "react-icons/bs"
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
    
    const [ popup, setPopup ] = useState(false)
    const [popupMessage, setPopupMessage] = useState({task: ''})


    useEffect(()=> {

    },[popup])

    
    const onClick = useCallback((taskid) => {

        var myPromise = new Promise((resolve, reject) => {
            const search = tasks.find((task) => (task.id === taskid))
            if (search !== 'undefined'){
                    setPopupMessage(search)
                    resolve(search)
            }else{
                reject('occured an error: task not found')
            }
        })
        myPromise.then((res) => (
            setPopup(true)
        )).catch((err) => (
            console.log(err)
        ))

    })

    const onFocusOut =() => {
        console.log('out')
        if (popup) {
            setPopup(false)
        }
    }

    const createNewTask = () =>{
        setPopup(true)
    }
    return(
        <div className="flex flex-1 flex-col relative">
            
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
            <div className="flex justify-end">
                <button onClick={()=> createNewTask()} className=" flex items-center shadow-md hover:bg-blue-800 h-10 p-2 rounded-md bg-blue-core mb-5 mt-5 text-white font-semibold ">
                    <BsPlus size={24} color="#fff"/>
                    <p>Nova tarefa</p>
                </button>
            </div>
        	{/* Secound card with the tasks */}
            <div className="bg-white p-5 rounded-md w-full shadow-sm">
                <h1 className="font-semibold text-[#444] text-[14pt]">Titulo das tarefas</h1>
                <div className="mt-5">
                    {tasks.map(task => {
                        return <Task key={task.id} task={task} onClick={onClick} />
                    })}
                </div>
            </div>
            <div  className={` h-screen w-screen bg-black-50 top-0 left-0 fixed ${popup ? 'flex' : 'hidden'} z-50`}>
                <div className=" flex flex-1 items-center justify-center relative">
                    <button onClick={() => setPopup(false)} className="outline-none bg-black-50 hover:bg-black-30 flex justify-center items-center h-10 w-10 rounded-md absolute top-3 right-3">
                        <BsX color="#fff" size={34} />
                    </button>
                    <div className="h-[85%] w-[65%] bg-white rounded-md shadow-md p-10">
                        <div className="flex flex-row items-center mb-2.5">
                            <div className="p-0 bg-slate-400 rounded-md flex justify-center items-center mr-2.5">
                                <BsPlus size={34} color="#444" />
                            </div>
                            <h1 className="text-2xl font-semibold text-[#444] ">Adicionar nova tarefa</h1>
                        </div>
                        <p className="text-sm text-[#777]">Adicione uma nova tarefa para a lista de tarefas. Cumpri-las todas, aumentará seus pontos</p>
                        {/* form begins */}
                        <div className="mt-10 w-full ">
                            <div className="flex flex-col">
                                <span className="font-semibold ml-2.5 mb-1 border-slate-400" >Titulo da tarefa</span>
                                <input type={'text'} placeholder="Digite o título da tarefa" className="outline-none rounded-md focus:border-blue-core" />
                            </div>
                            <div className="flex flex-row mt-5 justify-around w-full">
                                <div className="flex flex-col w-1/2">
                                    <span className="font-semibold ml-2.5 mb-1 border-slate-400" >Prazo</span>
                                    <input type={'date'} placeholder="Digite o título da tarefa" className="outline-none rounded-md focus:border-blue-core w-[60%]" />
                                </div>
                                <div className="flex flex-col w-1/2 items-start">
                                    <span className="font-semibold ml-2.5 mb-1 border-slate-400" >Participantes</span>
                                    <div class="flex -space-x-4 pl-2 pr-2 w-[20%] justify-center">
                                        <img class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="" />
                                        <img class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="" />
                                        <img class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="" />
                                        <img class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="" />
                                        <a class="flex justify-center items-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full border-2 border-white hover:bg-gray-600 dark:border-gray-800" href="#">+</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full mt-5">
                                <span className="font-semibold ml-2.5 mb-1 border-slate-400" >Descrição</span>
                                <textarea  placeholder="Digite o título da tarefa" className="outline-none rounded-md focus:border-blue-core w-[60%]" />
                            </div>
                            
                        </div>
                    </div>                
                </div>

            </div>   
        </div>
    )
}
export default TaskDetail