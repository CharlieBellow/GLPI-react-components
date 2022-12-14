export const usersList = [
	{ name: "Charlie", email: "", date: "13/12/2024", time:"00", id: "0",}
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
					<div className="bg-white-100" key={users.time}>
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
				key={props.time}
				id={props.id}
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