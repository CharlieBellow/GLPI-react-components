import { AuthOptions, getServerSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

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

        // TODO: POST request to API to validate credentials

        return {
          id: "stub_id",
          name: "john doe",
          email: credentials.email,
          token: "stub_token",
          isAdmin: true,
          avatar: "https://i.pravatar.cc/300",
          created_at: new Date().toISOString(),
        };
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
    jwt({ token, user }: { token: JWT; user: any }) {
      if (user) {
        token.accessToken = user.token;
        token.isAdmin = user.isAdmin;
        token.sub = user.id;
      }

      return { ...token, ...user };
    },
    async session({ token, session }) {
      if (token && session) {
        session.user.id = token.sub as string;
        session.user.isAdmin = token.isAdmin;
        session.user.avatar = token.avatar;
        session.user.created_at = token.created_at;
      }
      return { ...session };
    },
  },
};

export async function getAuthSession() {
  return await getServerSession(authOptions);
}
