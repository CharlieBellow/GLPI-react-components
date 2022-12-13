export const usersList = [
	{id: "0", name: "Charlie", date: "13/12/2024", time:"00"}
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
					<div className="bg-white-100" key={users.date}>
						<h1>
							<>{users.name}</>
						</h1>
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
	time: string;
}

export const User = (props: UserProps) => {
	return (
		<>
			<div className="bg-white-100 w-1/2 p-3 m-4" key={ props.time } id={props.time}>
						<h1>
							<>{props.nome}</>
						</h1>
						<div>{props.date}</div>
					</div>
		</>
	);
};