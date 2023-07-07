interface CardListProps {
  children: React.ReactNode
}

export function CardList({children}) {
  return (
    <div className="bg-white-ice hover:bg-white-100 cursor-pointer rounded-lg p-4 font-bold text-lg ">
      {children}
    </div>
  );
}
