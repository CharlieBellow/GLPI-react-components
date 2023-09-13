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
  roles?: string[]
};

export async function createUser(input: CreateUserInput) {
  return await api.post("/users", input);
}

export async function forgotPassword(email: string) {
  return api.post("/password/forgot", { email });
}
type ResetPasswordInput = {
  password: string;
  token: string;
};

export async function resetPassword({ password, token }: ResetPasswordInput) {
  return api.post("/password/reset", { password, token });
}
