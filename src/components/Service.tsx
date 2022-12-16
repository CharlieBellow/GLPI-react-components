export const servicesList = [{id: "00", name:"Socorro Jesus", title: "Preciso de ajuda!", description: "Infelizmente não dá pra gente ganhar todas, mas perder todas aparentemente dá sim.", serviceLocal: "Bloco A" }]

export default function Service() {
	return (
		<div className="text-light-bg w-36 h-20 bg-white-ice pt-3 px-3 rounded-lg shadow-card lg:w-52 lg:h-full flex flex-col lg:gap-1 lg:py-4 lg:px-4 cursor-pointer">
			<strong className="text-sm mt-3 font-medium lg:text-xl">Titulo:</strong>
			<p className="text-sm mt-3 font-medium lg:text-xl">Nome: </p>
			<p className="text-sm mt-3 font-medium lg:text-xl">Descrição: </p>
			<p className="text-sm mt-3 font-medium lg:text-xl">Bloco: </p>
			{/*<>
          {servicesList.map((user: any) => {
            return (
              <User
                nome={user.name}
                date={user.date}
                time={user.time}
                email={user.email}
                id={user.time}
                key={user.time}
              />
            );
          })}
          {console.log(usersList)}
        </>*/}
		</div>
	);
}
