import * as Icon from "phosphor-react";

interface categoriaProps{
    Name: String;
    Icon: Icon.IconProps;
}

function CategoriaHomeMobile(props:categoriaProps){
    return(
        <div className="w-36 h-16 bg-white-ice pt-2 px-2 rounded-lg shadow-card ds:w-52 ds:h-26 flex flex-col ds:gap-5 ds:pt-4 ds:px-4">
            <>
            {props.Icon}
            </>
            <p className="text-sm mt-3 font-medium ds:text-xl">{props.Name}</p>
        </div>
    )
}

export default CategoriaHomeMobile;