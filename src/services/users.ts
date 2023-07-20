import { Token } from "@/types";
import { UserModel } from "@/types";
import { api } from "@/Utils/server/api";

type LoginUserInput = {
  email: string;
  password: string;
};

type LoginUserOutput = { user: UserModel } & Token;

export async function loginUser(input: LoginUserInput) {
  const { data } = await api.post<LoginUserOutput>("/sessions", input);
  return data;
}
