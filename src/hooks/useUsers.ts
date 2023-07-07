import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";

import { ServerError } from "@/exceptions/ServerError";
import { getErrorMessage } from "@/exceptions/utils";
import { createUserErrorResponse } from "./useAuth";

import { User } from "@/domain/account/user.entity";
import { api } from "../Utils/server/api";

type UserPage = {
  User: {
    id?: string;
    username: string;
    name: string;
    email: string;
    password?: string;
    roles?: string[];
    createdAt?: string;
  }
}

type UserData = {
  User: User
}

type CreateOrUpdateUserRequest = {
  user: User;
  header: {
    token: string
  }
}

type DeleteUserRequest = {
  userId: string;
  header: {
    token: string
  }
}

export interface UserResponse {
  user?: User;
  error?: ServerError;
}

export type UsersResponse = {
  totalCount: number;
  users: User[];
}


type UserLoginRequest = {
  username: string;
  password: string;
}

interface UserLoginResponse {
  accessToken: string;
}

export function translateUserMessage(message: string) {
  switch (message) {
    case "User not found!":
      return "Usuário não encontrado";
    case "Email address or password provided is incorrect.":
      return "Email ou senha fornecidos estão incorretos!"
    case "Forbiden":
      return "Usuário sem privilégios para executar esta operação!";
    case "Unauthorized":
      return "Token de Usuário Inválido ou Expirado!";
    case "Another User already registered with this email":
      return "Já existe usuário registrado com este email!"
    case "Another User already registered with this username":
      return "Nome de usuário já registrado!"
    default:      
      return "Erro ao realizar requisição!"
  }
}

export async function loginUser({ username, password }: UserLoginRequest): Promise<UserLoginResponse> {
  try {
    const { data } = await api.post('/auth/login', {
      username,
      password
    });
    if (data?.accessToken) {      
      return {
        accessToken: data.accessToken
      }
    }

    return {
      accessToken: ""
    };
  } catch (error) {

    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<ServerError>;
      const errorMsg = getErrorMessage(serverError);
    } //else
    //errorMessage({ message: "Erro na requisição ao servidor!" });
    return {
      accessToken: ""
    };
  }

}

export async function getUserProfile(token: string): Promise<UserResponse> {

  const userResponse = await getUser({ token });

  return userResponse;

}

export async function deleteUser({ userId, header }: DeleteUserRequest): Promise<UserResponse> {
  const { token } = header;
  try {
    const url = `/account/user/${userId}`;

    const response = await api.delete(url,
      {
        headers: {
          authorization: `Bearer ${token}`
        }
      }
    );

    if (response.status = 204)
      return {};
    else return {
      error: {
        message: "Erro não identificado!"
      }
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<ServerError>;
      const errorMsg = getErrorMessage(serverError);
      return createUserErrorResponse(errorMsg);
    }
    return {
      error: {
        statusCode: 500,
        message: "Erro na requisição ao servidor!"
      }
    };
  }

}

export async function createOrUpdateUser({ user, header }: CreateOrUpdateUserRequest): Promise<UserResponse> {
  const { id, email, name, username, password } = user;

  const { token } = header;

  try {
    if (!id) {
      const { data } = await api.post("/account/user/",
        {
          email, name, username, password
        },
        {
          headers: {
            authorization: `Bearer ${token}`
          }
        }
      );
      if (data?.User) {
        return {
          user: data?.User
        }
      }
    }
    const { data: data2 } = await api.put(`/account/user/${id ? id : ""}`,
      {
        email, name, username
      },
      {
        headers: {
          authorization: `Bearer ${token}`
        }
      }
    );
    if (data2?.User) {
      return {
        user: data2?.User
      }
    }

    return {} as UserResponse;

  } catch (error) {

    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<ServerError>;
      const errorMsg = getErrorMessage(serverError);
      return createUserErrorResponse(errorMsg);
    }
    return {
      error: {
        message: "Erro na requisição ao servidor!"
      }
    };
  }


}

interface GetUsersRequest {
  page: number;
  params: {
    sortType?: 'asc' | 'desc',
    column?: string,
    searchQuery?: string,
    skip?: number,
    take?: number,
  }
}

export async function getUsers({
  page,
  params
}: GetUsersRequest): Promise<UsersResponse> {
  const {
    sortType = "asc",
    column = "name",
    searchQuery = "",
    skip = (page - 1) * 10,
    take = 10
  } = params;
  const response = await api.get('/account/user/pagination', {
    params: {
      sortType,
      column,
      searchQuery,
      skip,
      take,
    }
  });

  const { data } = response;

  const totalCount = data.total;
  const users = data.data.map((userdata: UserData) => {
    return {
      id: userdata.User.id,
      name: userdata.User.name,
      email: userdata.User.email,
      createdAt: new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  });
  return {
    users,
    totalCount
  };
}

interface GetUserRequest {
  userId?: string;
  token: string;
}

export async function getUser({ userId, token }: GetUserRequest): Promise<UserResponse> {
  try {
    const { data } = await api.get(`${userId ? "/account/user/" + userId : "/account/users/profile"}`,
      {
        headers: {
          authorization: `Bearer ${token}`
        }
      }
    );
    const user = data?.User;
    if (data?.User) {
      return {
        user
      }
    }

    return {} as UserResponse;
  } catch (error) {

    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<ServerError>;
      const errorMsg = getErrorMessage(serverError);
      return createUserErrorResponse(errorMsg);
    }
    return {
      error: {
        statusCode: 500,
        message: "Erro na requisição ao servidor!"
      }
    };
  }
}

export function useUsers({
  page,
  params
}: GetUsersRequest) {
  const {
    sortType = "asc",
    column = "name",
    searchQuery = "",
    skip = (page - 1) * 10,
    take = 10
  } = params;

  return useQuery(['users', page, searchQuery, column, sortType], async () => getUsers({
    page,
    params: {
      column,
      searchQuery,
      skip,
      take,
      sortType
    }
  }), {
    staleTime: 1000 * 60 * 10,
  });
  //staleTime: 1000 * 60 * 10,
}