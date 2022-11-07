import { useRouter } from "next/router"

const TaskDetail = () => {
    
    const router = useRouter()
    const {taskId} = router.query
    // console.log(useRouter().query.taksId)
    return(
        <h1>{`Tarefa ${taskId} `}</h1>
    )
}
export default TaskDetail