
import * as Icon from  "phosphor-react"


interface CardTitleColorProps extends React.HTMLAttributes<HTMLElement>{
  colorcard: string;
  coloricon: Icon.IconProps;
  alt: string;
  title: string;
}

export function CardTitleColor(props: CardTitleColorProps ) {

  return (
    <>
      
    <div className={`${props.colorcard ? props.colorcard :""} relative -top-7 -ml-3 h-22 w-22 rounded-xl`}>{props.coloricon ? <div className="flex h-full w-full items-center justify-center"><>{ props.coloricon}</></div> : <></>} </div>
    <h2 className="mr-6 flex items-center justify-end text-base font-normal text-light-bg" {...props}>
      {props.title}
    </h2>
    </>
  );
}
