import { ReactNode, useState } from "react";

interface InfoPillProps{
    content: String;
    icon?: ReactNode;
    color: String;
}


function InfoPill(props : InfoPillProps){

    const [showTitle, setShowTitle] = useState(false);

    return(
        <div className={`flex flex-row p-2 gap-2 ${props.color} ease-in-out duration-200 rounded-full text-sm text-white-100 cursor-pointer items-center`} onMouseEnter={() => setShowTitle(true)} onMouseLeave={() => setShowTitle(false)}>
            {props.icon && props.icon} 
            { !props.icon || showTitle ? <div>{props.content}</div> : ""}
        </div>
    );
}
export default InfoPill;