import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const AuthOptions = {
    session: { strategy: "jwt" },
    providers: [
      CredentialsProvider({
        name: "Credentials",
  
        credentials: {
          email: {
            label: "Email",
            type: "text",
            placeholder: "jEnter your Email",
          },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials, req) {
          return { name: "mmd" };
        },
      }),
    ],
  }
export default NextAuth(AuthOptions);
