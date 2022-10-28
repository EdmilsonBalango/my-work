import { Dots } from "../../components/icons/SvgIcons"

const Dashboard =() => {

    const stages = [
        {
            name: 'Feitos',
            qtd: 63,
            color: 'bg-[#00C875]'
        },
        {
            name: 'Em andamento',
            qtd: 120,
            color: 'bg-[#FDAB3D]'
        },
        {
            name: 'Parados',
            qtd: 5,
            color: 'bg-[#E2445C]'
        },
    ]

    const tasks = [
        {
            Title: 'Desenvolver o core feature do SCDC',
            CeationDate: '31/10/2022',
            tasksDone: '3/5',
            status: {
                label: 'Em andamento',
                color: () =>{
                    let color = 'Em andamento'
                    if(color === 'Feito')
                        return 'bg-[#00C875]'
                    if(color === 'Em andamento')
                        return 'bg-[#FDAB3D]'
                    if(color === 'Parado')
                        return 'bg-[#E2445C]'
                }
            },
        },
        {
            Title: 'Layout para tablet',
            CeationDate: '20/10/2022',
            tasksDone: '3/3',
            status: {
                label: 'Feito',
                color: () =>{
                    let color = 'Feito'
                    if(color === 'Feito')
                        return 'bg-[#00C875]'
                    if(color === 'Em andamento')
                        return 'bg-[#FDAB3D]'
                    if(color === 'Parado')
                        return 'bg-[#E2445C]'
                }
            },
        },
        {
            Title: 'Desenvolver o core feature do SCDC',
            CeationDate: '31/10/2022',
            tasksDone: '3/5',
            status: {
                label: 'Em andamento',
                
                color: () =>{
                    let color = 'Parado'
                    if(color === 'Feito')
                        return 'bg-[#00C875]'
                    if(color === 'Em andamento')
                        return 'bg-[#FDAB3D]'
                    if(color === 'Parado')
                        return 'bg-[#E2445C]'
                }
            },
        },
    ]
    return (
        <div className={``}>
            <div className={`w-full flex flex-col lg:flex-row lg:justify-start xl:justify-between justify-start flex-wrap items-center lg:items-start`}>
                {stages.map(stage => (
                    <div key={stage.name} className={`flex flex-col h-[180px] my-[5px] mx-[5px]  bg-white justify-center shadow-md w-full lg:w-[280px] xl:w-[300px] 2xl:w-[350px] rounded-[5px] p-[20px]`}>
                    <div className={`w-100% h-[20px] flex flex-row justify-between items-center`}>
                        <div className=" flex flex-row items-center">
                            <span className={`h-[15px] w-[15px] rounded-[3px] ${stage.color}`} />
                            <span className={`text-[12pt] font-bold text-[#777] mx-[5px]`}>{stage.name}</span>
                        </div>
                        <div className="hover:cursor-pointer" onClick={()=> alert(`Detalhes sobre teras ${stage.name} `)}>
                            <Dots />
                        </div>
                    </div>
                    <div className={`flex flex-1 items-center justify-center`}>
                        <span className={`text-[50pt] font-bold text-[#444]`}>{stage.qtd}</span>
                    </div>
                </div>))}
            </div>
            <div className="w-full mt-[10px]">
                <div className={`w-full  flex shadow-md rounded-[5px] flex-col bg-white p-[20px]`}>
                    <h3 className={`font-bold text-titles text-[14pt]`}>Tarefas</h3>   
                    <div class="overflow-x-auto relative sm:rounded-lg">
                        <div class="pb-4 bg-white ">
                            
                        </div>
                        <table class="w-full text-sm text-left text-gray-500 ">
                            <thead class="text-xs text-gray-700 uppercase bg-slate-200 rounded-sm ">
                                <tr>
                                    <th scope="col" class="py-3 px-6">Título tarefa</th>
                                    <th scope="col" class="py-3 px-6">Data de criação</th>
                                    <th scope="col" class="py-3 px-6">tarefas concluídas</th>
                                    <th scope="col" class="py-3 px-6">Estado</th>

                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map( task => (<tr class="bg-white border-b  hover:bg-blue-light hover:cursor-pointer ">
        
                                    <th scope="row" class=" py-4 px-6 font-medium text-gray-900 hover:text-sky-700 whitespace-nowrap ">{task.Title}</th>
                                    <td class="py-4 px-6 ">{task.CeationDate}</td>
                                    <td class="py-4 px-6 font-bold ">{task.tasksDone}</td>
                                    <td class="py-4 px-6">
                                    <span class={`${task.status.color()} text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900`}>{task.status.label}</span>
                                    </td>
                                </tr>  ))}          
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="w-full mt-[10px]">
                <div className={`w-full  flex shadow-md rounded-[5px] flex-col bg-white p-[20px]`}>
                    <h3 className={`font-bold text-titles text-[14pt]`}>Collaboradores</h3>   
                    <div class="overflow-x-auto relative sm:rounded-lg">
                        <div class="pb-4 bg-white ">
                            <label for="table-search" class="sr-only">Search</label>   
                        </div>
                        <table class="w-full text-sm text-left text-gray-500 ">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                                <tr>
                                    <th scope="col" class="py-3 px-6">Título tarefa</th>
                                    <th scope="col" class="py-3 px-6">Data de criação</th>
                                    <th scope="col" class="py-3 px-6">tarefas</th>
                                    <th scope="col" class="py-3 px-6">Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b  hover:bg-gray-50 ">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td class="py-4 px-6">
                                        Sliver
                                    </td>
                                    <td class="py-4 px-6">
                                        Laptop
                                    </td>
                                    <td class="py-4 px-6">
                                        $2999
                                    </td>
                                </tr>            
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard