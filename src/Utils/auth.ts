import { AuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { loginUser, refreshToken } from "@/services/users";

import { UserModel } from "@/types";

import { HttpError } from "@/exceptions/http-error";

type TokenWithUserDetails = {
  token: string;
  refresh_token: string;
  tokenExpiresIn: number;
  refreshTokenExpiresIn: number;
  user: UserModel;
  error?: "RefreshTokenError";
};

async function refreshUserToken(
  tokenObj: TokenWithUserDetails
): Promise<TokenWithUserDetails> {
  try {
    const { refresh_token } = await refreshToken(tokenObj.refresh_token);
    const tokenExpiresIn = Date.now() + 7 * 60 * 60 * 1000; // 7 days
    const refreshTokenExpiresIn = Date.now() + 30 * 24 * 60 * 60 * 1000; // 30 days

    return {
      ...tokenObj,
      token: refresh_token.token,
      refresh_token: refresh_token.refresh_token,
      tokenExpiresIn,
      refreshTokenExpiresIn,
    };
  } catch (error) {
    return {
      ...tokenObj,
      error: "RefreshTokenError",
    };
  }
}

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
          const data = await loginUser(credentials);
          const { user, ...rest } = data;
          return { ...rest, ...user };
        } catch (error) {
          if (error instanceof HttpError) {
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
    maxAge: 7 * 60 * 60 * 24, // 7 days
  },
  callbacks: {
    jwt({ token, user }) {
      if (token && user) {
        return {
          ...token,
          user: {
            id: user.id,
            name: user.name!,
            email: user.email!,
            permissions: user.permissions,
            roles: user.roles,
            avatar: user.avatar,
          },
          token: user.token,
          refresh_token: user.refresh_token,
          tokenExpiresIn: new Date(user.tokenExpiresIn).getTime(),
          refreshTokenExpiresIn: new Date(user.refreshTokenExpiresIn).getTime(),
        };
      }

      if (Date.now() < token.tokenExpiresIn) {
        return token;
      }

      return refreshUserToken(token);
    },
    async session({ session, token }) {
      const { user, ...res } = token;
      session.user = { ...user, ...res, email: user.email!, name: user.name! };
      return { ...session };
    },
  },
};

/**
 * @description Get the current session from the server, instead pass all the time authOptions
 */
export async function getAuthSession() {
  return await getServerSession(authOptions);
}
