import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Credentials from "next-auth/providers/credentials"
import bcrypt from 'bgryptjs'
import { db } from "./db"

 
export const { handlers: {GET, POST}, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(db),
    session: {strategy: 'jwt'},
  providers: [
    GitHub({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
      }),
    Credentials({

    })
  ],
})