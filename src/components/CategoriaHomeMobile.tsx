interface categoriaProps{
    Name: String;
    Icon: any;
}

function CategoriaHomeMobile(props:categoriaProps){
    return(
        <div className="w-36 h-16 bg-white-ice pt-2 px-2 rounded-lg shadow-card lg:w-52 lg:h-26 flex flex-col lg:gap-5 lg:pt-4 lg:px-4">
            {props.Icon}
            <p className="text-sm mt-3 font-medium lg:text-xl">{props.Name}</p>
        </div>
    )
}

export default CategoriaHomeMobile;