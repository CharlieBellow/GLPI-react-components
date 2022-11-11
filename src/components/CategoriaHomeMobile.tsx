interface categoriaProps{
    Name: String;
    Icon: any;
}

function CategoriaHomeMobile(props:categoriaProps){
    return(
        <div className="w-36 h-16 bg-white-ice pt-2 px-2 rounded-lg shadow-card text-lg">
            {props.Icon}
            <p className="text-sm mt-3 font-medium">{props.Name}</p>
        </div>
    )
}

export default CategoriaHomeMobile;

// ver gambiarra de tamanho fixo da imagem, além da propriedade any.