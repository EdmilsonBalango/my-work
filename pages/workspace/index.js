import TaskCards from "../../components/taskCards"

const Workspace = () => {
    const tasks = [
        {
            id: '001',
            title: 'Desenvolvimento do Design pattern',
            area: 'Design team',
            progress: {all: 5, done: 3},
            deadline: '13 Dez 2022',
            collaborators: 5,
        },
        {
            id: '002',
            title: 'Modeling buttons',
            area: 'Design team',
            progress: {all: 3, done: 1},
            deadline: '13 Dez 2022',
            collaborators: 1,
        },
        {
            id: '003',
            title: 'Desenvolvimento do Design pattern',
            area: 'Development team',
            progress: {all: 3, done: 0},
            deadline: '13 Dez 2022',
            collaborators: 3,
        },
    ]
    return (
        <div className={`flex  h-full w-full`}>
            <div className={``}>
                <h1 className={`text-xl font-bold text-[#444]`}>Tarefas</h1>
                <div className={`flex flex-row mt-5 flex-wrap justify-center`}>
                    {tasks.map(task => <TaskCards key={task.id} data={task} />)}
                </div>
            </div>
        </div>
    )
}

export default Workspace