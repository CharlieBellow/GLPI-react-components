
interface CardTitleProps {
  title: string;
}

export function CardTitle(props: CardTitleProps ) {

  return (
    <>
    <div className="pb-8"></div>
    <h2 className="text-light-bg font-normal text-base flex items-center justify-end mr-6" {...props}>
      {props.title}
    </h2>
    </>
  );
}
