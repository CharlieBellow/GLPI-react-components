
interface CardTitleProps {
  title: string;
}

export function CardTitle(props: CardTitleProps ) {

  return (
    <>
    <div className="pb-8" />
    <h2 className="mr-6 flex items-center justify-start text-base font-normal text-light-bg" {...props}>
      {props.title}
    </h2>
    </>
  );
}
