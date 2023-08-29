import { api } from "@/Utils/server/api";

import { Token, UserModel } from "@/types";

type LoginUserInput = {
  email: string;
  password: string;
};

type LoginUserOutput = { user: UserModel } & Token;

export async function loginUser(input: LoginUserInput) {
  const { data } = await api.post<LoginUserOutput>("/sessions", input);
  return data;
}

type RefreshToken = {
  refresh_token: { token: string; refresh_token: string };
};

export async function refreshToken(refreshToken: string) {
  const { data } = await api.post<RefreshToken>("/refresh-token", null, {
    headers: {
      "x-access-token": refreshToken,
    },
  });
  return data;
}

type CreateUserInput = {
  name: string;
  email: string;
  password: string;
};

export async function createUser(input: CreateUserInput) {
  return await api.post("/users", input);
}
