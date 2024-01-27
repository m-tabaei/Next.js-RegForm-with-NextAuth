import connectDB from "./../../../utils/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";

import User from "./../../../models/User";
import { verifyPassword } from "../../../utils/auth";

const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;
        try {
          await connectDB();
        } catch (error) {
          throw new Error("Error in connecting to DB!");
        }
        if (!email || !password) {
          throw new Error("Invalid Data!");
        }
        const user = await User.findOne({ email: email });
        if (!user) throw new Error("User dosent Exist!");
        const isValid = await verifyPassword(password, user.password);
        if (!isValid) throw new Error("username and password is incorrect!");
        return { email };
      },
    }),
          GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      })
    
  ],
};
export default NextAuth(authOptions);
