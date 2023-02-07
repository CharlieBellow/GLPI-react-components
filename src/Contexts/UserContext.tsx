import { createContext, useContext, useState } from "react";
import { userModel } from "../Utils/UserModel";

interface UserProps {
  user: Array<object>;
  addUser: ( user: Array<object> ) => void;
}

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext( {} as UserProps );

export const UserProvider = ( { children }: UserProviderProps ) => {

  const [ user, setUser ] = useState<Array<object>>( userModel );


  function addUser ( user: Array<object> ) {
    setUser( [ ...user, user ] );
  }

  return (
    <UserContext.Provider value={ { addUser: addUser, user: user } }>
      { children }
    </UserContext.Provider>
  );
};


export function useUserContext () {
  const userContext = useContext( UserContext );
  return userContext;
}

