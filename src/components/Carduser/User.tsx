export const usersList = [
	{ name: "Charlie", email: "", date: "13/12/2024", time: "00", id: "0" },
	{ id: 1, name: "Charlie", email: "email@email.com", date: "01/02/2022", time: "00" },
	{ id: 2, name: "Humberto", email: "humberto@email.com", date: "01/02/2022" , time: "00"},
	{ id: 3, name: "Ítalo", email: "italo@email.com", date: "01/02/2022" , time: "00"},
	{ id: 4, name: "Evellyn", email: "evellyn@email.com", date: "01/02/2022" , time: "00"},
	{ id: 5, name: "Josue", email: "zue@email.com", date: "01/02/2022" , time: "00"},
	{ id: 6, name: "Luan", email: "luan@email.com", date: "01/02/2022" , time: "00"},
	{ id: 7, name: "Marcos", email: "marcos@email.com", date: "01/02/2022" , time: "00"},
	{ id: 8, name: "Marcelo", email: "marcelo@email.com", date: "01/02/2022" , time: "00"},
	{ id: 9, name: "Pedro", email: "pedro@email.com", date: "01/02/2022" , time: "00"},
	{ id: 10, name: "Felipe", email: "lipe@email.com", date: "01/02/2022" , time: "00"},
	{ id: 12, name: "Roberta", email: "roberta@email.com", date: "01/02/2022" , time: "00"},
	{ id: 13, name: "Caio", email: "caio@email.com", date: "01/02/2022" , time: "00"},
	{ id: 14, name: "Rodrigo", email: "rodrigo@email.com", date: "01/02/2022" , time: "00"},
	{ id: 15, name: "Charlie2", email: "email@email.com", date: "01/02/2022" , time: "00"},
	{ id: 16, name: "Humberto2", email: "humberto@email.com", date: "01/02/2022", time: "00"},
	{ id: 17, name: "Ítalo2", email: "italo@email.com", date: "01/02/2022" , time: "00"},
	{ id: 18, name: "Evellyn2", email: "evellyn@email.com", date: "01/02/2022" , time: "00"},
	{ id: 19, name: "Josue", email: "zue@email.com", date: "01/02/2022" , time: "00"},
	{ id: 11, name: "Giancarlo2", email: "giancarlo@email.com", date: "01/02/2022", time: "00"},
	{ id: 20, name: "Luan2", email: "luan@email.com", date: "01/02/2022" , time: "00"},
	{ id: 21, name: "Marcos2", email: "marcos@email.com", date: "01/02/2022", time: "00" },
	{ id: 25, name: "Giancarlo", email: "giancarlo@email.com", date: "01/02/2022", time: "00"},
	{ id: 22, name: "Marcelo2", email: "marcelo@email.com", date: "01/02/2022" , time: "00"},
	{ id: 28, name: "Rodrigo2", email: "rodrigo@email.com", date: "01/02/2022" , time: "00"},
	{ id: 23, name: "Pedro2", email: "pedro@email.com", date: "01/02/2022" , time: "00"},
	{ id: 26, name: "Roberta2", email: "roberta@email.com", date: "01/02/2022" , time: "00"},
	{ id: 24, name: "Felipe2", email: "lipe@email.com", date: "01/02/2022" , time: "00"},
	{ id: 27, name: "Caio2", email: "caio@email.com", date: "01/02/2022" , time: "00"},
];



interface UsersProps {
  usersList: Array<any>;
}

export const Users = (props: UsersProps) => {
	return (
		<>
		{
			props.usersList.map( (users: any) => {
				return (
					<div className="bg-white-100" key={users.id}>
						<h2>
							{users.name}
						</h2>
						<h3>{users.email}</h3>
						<p>{users.date}</p>
					</div>
				)
				
			})
		}
		
		</>
	);
};

interface UserProps {
	nome: string;
	date: string;
	email: string;
	time: string;
	id: string;
}

export const User = (props: UserProps) => {
	return (
		<>
			<div
				className="bg-white-100 w-1/2 p-3 m-4"
				key={props.id}
				//id={props.id}
			>
				<h1>
					<>{props.nome}</>
				</h1>
				<h3>{props.email}</h3>
				<div>{props.date}</div>
			</div>
		</>
	);
};