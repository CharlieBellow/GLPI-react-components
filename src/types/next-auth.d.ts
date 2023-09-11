/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

import { Token, UserModel } from "./index";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: DefaultSession["user"] & UserModel;
    sessionTokenInfo: Token & JWT;
    error?: "RefreshTokenError";
  }

  interface User extends DefaultUser, UserModel, Token {}
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends Token {
    user: UserModel;
    error?: "RefreshTokenError";
  }
}
