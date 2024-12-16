import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'

import { db } from "./db";
import { saltAndHashPassword } from "./utils/helper";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "john.doe@example.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Your password",
        },
      },
      authorize: async (credentials) => {
        if (!credentials.email || !credentials.password) {
          return null;
        }
        const email = credentials.email as string;
        const hash = saltAndHashPassword(credentials.password as string);

        let user = await db.user.findUnique({
          where: {
            email: email,
          },
        });
        if (!user) {
          user = await db.user.create({
            data: {
              email: email,
              hashedPassword: hash,
            },
          });
        }else{
          const isMatch = bcrypt.compareSync(credentials.password as string, user.hashedPassword as string);
          if(!isMatch){
            throw new Error('Invalid password')
          }
        }
        return user;
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub;
        session.user.role = token.role
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
        token.role = user.role
      }
      return token;
    },
  },
});
