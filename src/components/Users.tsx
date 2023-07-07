
import * as React from 'react';
import { useEffect, useState } from "react";

import { Spinner } from "@chakra-ui/react";
import CardUsers from './CardUsers';

import { getAllUsers } from "../Utils/server/getInfo";
import {User} from "../Utils/server/types"

const myuser = {
	id: "d49f2af4-333c-4873-8fe4-ffa5ca7b2822",
	status: "Ativo",
	cpf: "08551062476",
	name: "Charlie Bellow de Oliveira",
	birthDate: "2023-03-02T17:00:26.157Z",
	gender: "M",
	created_at: "2023-03-02T20:00:24.955Z",
}

// * exibir todos os usuários em cards
export default function AllUsers () {
 
	
	const token = localStorage.getItem("token");
  
	const [users, setUsers] = useState<User[]>([])


  useEffect(() => {
    const fetchData = async ()  => {
      const response = await getAllUsers(token as string)
      console.log(response);
      setUsers(response)
      
  
    }
    fetchData()
    
  }, [token, users])
	

  return (
		<>
			<div className="lg:m-8 bg-white-100 gap-8 py-6 px-4 flex flex-col rounded-xl">
				<h2 className="lg:text-5xl text-2xl font-bold">Meus Usuários</h2>
				
				<div className="lg:grid lg:w-full flex-wrap mx-auto justify-around gap-9 lg:grid-cols-2 tv:grid-cols-2 grid-cols-1 w-full">
					<>
						
						{users ? (users.map( user => {
							return (
								<CardUsers
									id={user.id}
									key={user.id} name={user.name} password={user.password} email={user.email} avatar={undefined} isAdmin={false} created_at={''} permissions={[]} roles={[]} />

							)
						} ) )
						: <div><Spinner size="lg" /></div>}
								
						
					</>
				</div>
			</div>
		</>
	);
}