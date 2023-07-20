import { AuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { loginUser } from "@/services/users";
import { AxiosError } from "axios";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, _req) {
        if (!(credentials?.email && credentials?.password)) return null;

        try {
          // TODO: POST request to API to validate credentials
          const data = await loginUser(credentials);
          const { user, ...rest } = data;
          return { ...rest, ...user };
        } catch (error) {
          if (error instanceof AxiosError) {
            return Promise.reject(new Error(error.message));
          }
          return Promise.reject(new Error("Ocorreu um erro inesperado"));
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt({ token, user }) {
      console.log("user", user);

      const tokenExpiresInNumber =
        new Date(user.tokenExpiresIn).getTime() * 1000;
      const refreshTokenExpiresInNumber =
        new Date(user.refreshTokenExpiresIn).getTime() * 1000;

      const newToken = {
        ...token,
        ...user,
        tokenExpiresIn: tokenExpiresInNumber,
        refreshTokenExpiresIn: refreshTokenExpiresInNumber,
      };

      if (Date.now() < newToken.tokenExpiresIn) {
        console.log("Token válido", tokenExpiresInNumber);

        return newToken;
      }

      return newToken;
    },
    async session({ session }) {
      return { ...session };
    },
  },
};

export async function getAuthSession() {
  return await getServerSession(authOptions);
}
