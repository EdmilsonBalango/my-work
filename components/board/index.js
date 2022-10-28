import Header from "../header/header"

const Board = ({children}) => {
    return (
        <div className="flex w-full  flex-col bg-blue-light">
            <Header />
            <div className={`p-[10px] w-[90%]  md:w-[85%] lg:w-[80%] m-auto`}>
                {children}
            </div>

        </div>
    )
}

export default Board