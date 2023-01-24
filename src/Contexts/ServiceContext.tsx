import { createContext, useContext, useState } from "react";


export const servicesList = [
	{
		id: "00",
		applicantsName: "vai ser o Auth (usuário logado) da pessoa - pego pelo contexto",
    credentialType: "aluno/servidor/professor/tecnico - pego pelo contexto",
    title: "Preciso de ajuda!",
    patrimônio: "arquivo pdf",
		description:
			"Infelizmente não dá pra gente ganhar todas, mas perder todas aparentemente dá sim.",
    serviceLocal: "Bloco A",
	},
];

// informações do usuário
//const infoUser = {
  //  idUser: user.id,
//  fullName: user.fullName,
//	email: user.email,
//	credentialType: user.bond,
//  campus: user.campus,
//serviceName: mome do serviço que ele clicou e coloca como valor do input de título na página de criação do serviço
categoryService:
subcategorySubcategory: 
//}

//Contexto de serviço
/* 
const lista de serviços
id da carta de serviço

const lista de categorias
id da categoria

const lista de subcategorias 
id da subcategoria


criar o serviço
id, nome e credencial do usuário pelo contexto de usuário logado
id da carta de serviço eu sei a qual categoria ele pertence 


pra obrigar a carta de serviço a ter uma categoria eu crio desde o início a categoria e subcategoria com o nome outros. E aí quando for criar a carta de serviço obriga a colocar uma categoria e subcategoria, se não se aplicar a nenhuma a pessao escolhe outros.

*/



interface ServiceContextProps {
  infoService: Array<object>;
  addInfoService: ( infoService: Array<object> ) => void;
}

interface ServiceProviderProps {
  children: React.ReactNode
}

export const ServiceContext = createContext({} as ServiceContextProps)

export const ServiceProvider = ( { children }: ServiceProviderProps ) => {

  const [ infoServices, setInfoServices ] = useState<Array<object>>( [
    {
		id: "00",
		applicantsName: "vai ser o Auth (usuário logado) da pessoa - pego pelo contexto",
    credentialType: "aluno/servidor/professor/tecnico - pego pelo contexto",
    title: "nome do serviço clicado",
    patrimônio: "arquivo pdf",
		description:
			"Infelizmente não dá pra gente ganhar todas, mas perder todas aparentemente dá sim.",
    serviceLocal: "Bloco A",
	},
  ] ) 


  function addInfoService ( infoService: Array<object> ) {
    setInfoServices([...infoServices, infoService])
  }

  return (
    <ServiceContext.Provider value={ { addInfoService: addInfoService, infoService: infoServices } }>
      {children}
    </ServiceContext.Provider>
  )
}


export function useServiceContext () {
  const serviceContext = useContext( ServiceContext )
  return serviceContext;
} 

