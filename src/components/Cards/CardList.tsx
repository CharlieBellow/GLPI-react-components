interface CardListProps {
  children: React.ReactNode
}

export function CardList({children}) {
  return (
    <div className="cursor-pointer rounded-lg bg-white-ice p-4 text-lg font-bold hover:bg-white-100 ">
      {children}
    </div>
  );
}
