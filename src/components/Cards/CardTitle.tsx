import Image from "next/image";
import * as Icon from  "phosphor-react"
import { useState } from "react";
import Modal from "../../components/Modal"

interface CardTitleImageProps extends React.HTMLAttributes<HTMLElement>{
  srcimage: string | StaticImport;
  handleImg: Function;
  editImage: boolean;
}

interface CardTitleColorProps extends React.HTMLAttributes<HTMLElement>{
  colorcard: string;
  coloricon: Icon.IconProps;
}

interface CardTitleProps extends React.HTMLAttributes<HTMLElement>, CardTitleImageProps, CardTitleColorProps{
  title: string;
  // type: CardTitleImageProps | CardTitleColorProps | "none";
  alt: string;
}

export function CardTitle(props: CardTitleProps ) {

  const [newImage, setNewImage] = useState(props.srcimage)
  
//   function handleImg(srcImg: any) {
//     console.log("mudar imagem")
//     // afunção chamada pelo formulário quee pede o caminho da nova imagem. aí quando submeter ele vai trocar a imagem no banco 
  

   
//     console.log("srcImg", srcImg)
    
//     setNewImage(srcImg)
		
// }

  
/* 
// como pegar a rota de alterar avatar do usuário? (tem que descobrir como pega patch no axios)

  vai ter opção de atualizar grupo e subgrupo (vai, mas depois)?


  as rotas de excluir grupo e subgrupo não funcionam da erro no servidor (vai ter que tratar esse erro do lado do servidor)

  // o que vai ter no menu: 
  - carta de serviço
  - RU
  - Configurações
  - Ajuda;
  

  * criar uma lista para exibir as categorias e subcategorias. nessa lista vai ser possível editar, excluir e atualizar todos os elementos do servicebook (só o admin tem acesso à essa tela)
  
  */

  return (
    <>
      
      {props.srcimage ? (<div className="flex item-center">
        <Image src={newImage} width={86} height={86} alt={props.alt} className="rounded-xl -top-7 -ml-3 relative " />
        {props.editImage ? (
          <Modal  />
        ) : <></>}     
      </div>) : (props.colorcard ? <div className={`${props.colorcard ? props.colorcard :""} w-22 h-22 -top-7 rounded-xl -ml-3 relative`}>{props.coloricon ? <div><>{ props.coloricon}</></div> : <></>}</div> : <div className="pb-8"></div>)}
    <h2 className="text-light-bg font-normal text-base flex items-center justify-end mr-6" {...props}>
      {props.title}
    </h2>
    </>
  );
}
