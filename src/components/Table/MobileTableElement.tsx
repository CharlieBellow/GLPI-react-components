interface User extends React.HTMLAttributes<HTMLElement> {
    name: string,
    email: string,
    date: string
}

function MobileTableElement(props: User){
    return(
        <div className="flex flex-row items-center">
            <div className="bg-slate-100 flex flex-col w-full mx-8 px-4 rounded-md shadow-md">
                <div>
                    {props.name}
                </div>
                <div>
                    {props.email}
                </div>
                <div>
                    {props.date}
                </div>
            </div>
        </div>
    )
}
export default MobileTableElement;