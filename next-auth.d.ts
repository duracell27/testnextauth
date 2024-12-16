import NextAuth from 'next-auth'; // eslint-disable-line

declare module 'next-auth' {
  
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession['user'];
  }
  interface JWT {
    role?: string; // Додайте `role` до JWT
  }
}