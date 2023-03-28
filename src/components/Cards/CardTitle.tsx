import Image from "next/image";
import * as Icon from  "phosphor-react"


interface CardTitleProps extends React.HTMLAttributes<HTMLElement>{
  title: string;
  alt?: string;
  src?: string | StaticImport;
  width?: number;
  height?: number;
  type?: "image" | "color";
  editImage?: boolean;
}

export function CardTitle(props: CardTitleProps) {


  return (
    <>
      
      {props.type === "image" ? (<div className="flex item-center">
        <Image src={props.src} width={props.width} height={props.height} alt={props.alt} className="rounded-xl -top-7 -ml-3 relative " />
        {props.editImage ? <div className="bg-blue-ufal rounded-full w-8 h-8 flex justify-center hover:cursor-pointer items-center text-white-100 relative top-10 -left-6"><Icon.Camera size={16} /></div>: <></>}
        
      </div>) : ( props.type === "color" ? <div className="bg-pink-500 w-22 h-22 -top-7 rounded-xl -ml-3 relative"></div> : <></>)}
    <h2 className="text-light-bg font-normal text-base flex items-center justify-end mr-6" {...props}>
      {props.title}
    </h2>
    </>
  );
}
