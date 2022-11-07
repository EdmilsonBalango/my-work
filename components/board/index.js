import Header from "../header/header"

const Board = ({children}) => {
    return (
        <div className="flex w-full  h-screen flex-col bg-blue-light">
            <Header />
            <div className={`z-1 flex flex-1 p-[10px] w-[90%]  md:w-[85%] lg:w-[80%] m-auto justify-center`}>
                {children}
            </div>

        </div>
    )
}

export default Board