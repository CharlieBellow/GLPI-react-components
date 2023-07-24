import { ReactNode, useState } from "react";

interface InfoPillProps{
    content: String;
    icon?: ReactNode;
    color: String;
}


function InfoPill(props : InfoPillProps){

    const [showTitle, setShowTitle] = useState(false);

    return(
        <div className={`flex flex-row gap-2 p-2 ${props.color} cursor-pointer items-center rounded-full text-sm text-white-100 duration-200 ease-in-out`} onMouseEnter={() => setShowTitle(true)} onMouseLeave={() => setShowTitle(false)}>
            {props.icon && props.icon} 
            { !props.icon || showTitle ? <div>{props.content}</div> : ""}
        </div>
    );
}
export default InfoPill;