import { useBreakpointValue } from "@chakra-ui/react";
import { Trash } from "phosphor-react";
import { Button } from "./Buttons/Button";
import { getUserId } from "../Utils/server/getInfo";
import { useEffect, useState } from "react";
import {User} from "../Utils/server/types"

const myuser = {
	id: "d49f2af4-333c-4873-8fe4-ffa5ca7b2822",
	name: "Charlie Bellow",
	password: "$2a$08$epbV.KVDbEQSctWVhSocbOo1KaysC886/pDWopJDOwtfmlpzV9ygm",
	email: "email@email.com",
	avatar: null,
	isAdmin: false,
	created_at: "2023-03-22T16:19:14.843Z",
	permissions: [],
	roles: []
}



export default function CardUser(props: User) {
	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
  });
  
  

	return (
		<div
			className="text-light-bg w-full h-full bg-white-ice py-3 px-4 rounded-xl shadow-card lg:w-auto lg:h-auto flex flex-col lg:py-4 my-4 justify-between"
			{...props}
			key={props.id}
			id={props.id}
		>
			<div>
				<div>
					<p className="text-xs mt-3 font-medium lg:text-xl">
						<strong>Nome: </strong>
						{props.name}
					</p>
				</div>
				<div>
					<p className="text-sm mt-3 font-medium lg:text-xl">
						<strong>Email: </strong>
						{props.email}
					</p>
				</div>
				<div>
					<p className="text-sm mt-3 font-medium lg:text-xl">
						<strong>Senha: </strong>
						{props.password}
					</p>
				</div>
				<div>
					<p className="text-sm mt-3 font-medium lg:text-xl">
						<strong>Credencial: </strong>
						{props.isAdmin}
					</p>
				</div>
				<div>
					<p className="text-sm mt-3 font-medium lg:text-xl">
						<strong>Permissão: </strong>
						{props.permissions}
					</p>
				</div>
				<div>
					<p className="text-sm mt-3 font-medium lg:text-xl">
						<strong>Roles: </strong>
						{props.roles}
					</p>
				</div>
			</div>
			<div className="pt-3 w-fit">
				<Button
					className="flex"
					icon={<Trash className="" weight="bold" size={20} />}
					title={isWideVersion ? "Excluir" : ""}
					theme={"primary"}

				/>
			</div>
		</div>
	);
}
