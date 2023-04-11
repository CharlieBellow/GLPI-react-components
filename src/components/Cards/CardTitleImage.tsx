import Image from "next/image";
import { useState } from "react";
import Modal from "../Modal"
 
interface CardTitleImageProps extends React.HTMLAttributes<HTMLElement>{
  srcimage: string;
  handleImg?: Function;
  editImage?: boolean;
  title: string;
  alt: string;
}


export function CardTitleImage(props: CardTitleImageProps ) {

  const [newImage, setNewImage] = useState(props.srcimage)
  
  function handleImg(srcImg: any) {
    console.log("mudar imagem")
    // a função chamada pelo formulário que pede o caminho da nova imagem. aí quando submeter ele vai trocar a imagem no banco. falta ver qual é a rota pra alterar
  
    console.log("srcImg", srcImg)
    setNewImage(srcImg)		
}
  

  return (
    <>
      
      <div className="flex item-center">
        <Image src={newImage} width={86} height={86} alt={props.alt} className="rounded-xl -top-7 -ml-3 relative " />
        {props.editImage ? (
          <Modal  />
        ) : <></>}     
      </div>
    <h2 className="text-light-bg font-normal text-base flex items-center justify-end mr-6" {...props}>
      {props.title}
    </h2>
    </>
  );
}
