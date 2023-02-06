interface CardTitleProps extends React.HTMLAttributes<HTMLElement>{
  title: string;
}

export function CardTitle(props: CardTitleProps) {
  return (
    <h2 className="text-light-bg font-bold text-4xl" {...props}>
      {props.title}
    </h2>
  );
}
