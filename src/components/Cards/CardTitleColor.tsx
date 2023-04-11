
import * as Icon from  "phosphor-react"


interface CardTitleColorProps extends React.HTMLAttributes<HTMLElement>{
  colorcard: string;
  coloricon: Icon.IconProps;
  alt: string;
  title: string;
}

export function CardTitle(props: CardTitleColorProps ) {

  return (
    <>
      
    <div className={`${props.colorcard ? props.colorcard :""} w-22 h-22 -top-7 rounded-xl -ml-3 relative`}>{props.coloricon ? <div><>{ props.coloricon}</></div> : <></>} </div>
    <h2 className="text-light-bg font-normal text-base flex items-center justify-end mr-6" {...props}>
      {props.title}
    </h2>
    </>
  );
}
